/**
 * app.js
 * ─────────────────────────────────────────────────────────────
 * Core application logic for Answers in AI.
 * Depends on: figures/figures.js, figures/sketches.js
 */

// ── STATE ────────────────────────────────────────────────────
let currentFigure = 'jesus';
let isLoading = false;

// ── FIGURE DETECTION ─────────────────────────────────────────
// Reads subdomain (jesus.answersinai.com) or ?figure= param for local dev
function getFigureFromURL() {
  const host = window.location.hostname;
  const subdomain = host.split('.')[0];
  if (FIGURES[subdomain]) return subdomain;

  const param = new URLSearchParams(window.location.search).get('figure');
  if (param && FIGURES[param]) return param;

  return Object.keys(FIGURES)[0]; // fallback to first figure
}

// ── RENDER ───────────────────────────────────────────────────
function renderMainFigure(key) {
  const fig = FIGURES[key];
  document.getElementById('mainSketch').innerHTML = SKETCHES[key] || '';
  document.getElementById('figureName').textContent = fig.name;
  document.getElementById('figureEpithet').textContent = fig.epithet;
  document.getElementById('answerLabel').textContent = fig.name + ' speaks';
  document.title = fig.name + ' · Answers in AI';

  renderSuggestions(key);
  renderAdjacent(key);
  updateSwitcher(key);

  // Clear previous answer
  document.getElementById('answerPanel').classList.remove('visible');
  document.getElementById('answerText').innerHTML = '';
  document.getElementById('questionInput').value = '';
}

function renderSuggestions(key) {
  const fig = FIGURES[key];
  document.getElementById('suggestions').innerHTML = fig.suggestions
    .map(s => `<button class="suggestion-pill" onclick="askQuestion('${s.replace(/'/g, "\\'")}')">${s}</button>`)
    .join('');
}

function renderAdjacent(key) {
  const fig = FIGURES[key];
  const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  document.getElementById('adjacentFigures').innerHTML = fig.neighbors
    .slice(0, 4)
    .map((nk, i) => {
      const nf = FIGURES[nk];
      if (!nf) return '';
      return `
        <a class="adj-figure ${positions[i]}" href="?figure=${nk}" onclick="switchFigure('${nk}'); return false;">
          <svg class="adj-sketch" viewBox="0 0 220 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${SKETCHES[nk] || ''}
          </svg>
          <span class="adj-name">${nf.name}</span>
        </a>`;
    })
    .join('');
}

function renderSwitcher() {
  document.getElementById('figureSwitcher').innerHTML = Object.entries(FIGURES)
    .map(([k, f]) => `<button class="fig-btn" onclick="switchFigure('${k}')">${f.name}</button>`)
    .join('');
  updateSwitcher(currentFigure);
}

function updateSwitcher(key) {
  document.querySelectorAll('.fig-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === FIGURES[key].name);
  });
}

// ── NAVIGATION ───────────────────────────────────────────────
function switchFigure(key) {
  if (!FIGURES[key] || key === currentFigure) return;
  currentFigure = key;
  renderMainFigure(key);
  try { window.history.replaceState({}, '', '?figure=' + key); } catch(e) {}
}

// ── ASK ──────────────────────────────────────────────────────
async function askQuestion(question) {
  if (isLoading) return;
  if (!question) question = document.getElementById('questionInput').value.trim();
  if (!question) return;

  document.getElementById('questionInput').value = question;

  const fig = FIGURES[currentFigure];
  const panel = document.getElementById('answerPanel');
  const answerEl = document.getElementById('answerText');

  panel.classList.add('visible');
  answerEl.innerHTML = `<span class="loading-dots"><span></span><span></span><span></span></span>`;
  isLoading = true;

  try {
    const response = await fetch('/api/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        stream: true,
        system: fig.systemPrompt,
        messages: [{ role: 'user', content: question }]
      })
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    answerEl.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    answerEl.appendChild(cursor);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            answerEl.insertBefore(document.createTextNode(parsed.delta.text), cursor);
          }
        } catch { /* skip malformed chunks */ }
      }
    }

    cursor.remove();

  } catch (err) {
    answerEl.innerHTML = `<em style="color:var(--sepia);font-style:italic;">The oracle is silent. Please try again.</em>`;
    console.error('API error:', err);
  }

  isLoading = false;
}

// ── INIT ─────────────────────────────────────────────────────
currentFigure = getFigureFromURL();
renderMainFigure(currentFigure);
renderSwitcher();

document.getElementById('askBtn').addEventListener('click', () => askQuestion());
document.getElementById('questionInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') askQuestion();
});
