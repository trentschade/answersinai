/**
 * sketches.js
 * ─────────────────────────────────────────────────────────────
 * Pencil/charcoal SVG portraits for each figure.
 * Each key must match a key in figures.js.
 *
 * To add a sketch for a new figure:
 *   1. Add a matching key here with SVG path data
 *   2. All sketches use viewBox="0 0 220 270"
 */

const SKETCHES = {

  jesus: `
    <g opacity="0.88">
    <path d="M60 270 C55 230 45 200 50 170 C55 140 65 130 80 125 L110 118 L140 125 C155 130 165 140 170 170 C175 200 165 230 160 270Z" stroke="#2c2418" stroke-width="1.2" fill="rgba(200,185,160,0.18)" stroke-linecap="round"/>
    <path d="M45 270 C38 240 30 200 40 165 C48 138 62 128 80 124" stroke="#2c2418" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M175 270 C182 240 190 200 180 165 C172 138 158 128 140 124" stroke="#2c2418" stroke-width="1" fill="none" stroke-linecap="round"/>
    <rect x="101" y="100" width="18" height="24" rx="6" fill="rgba(210,185,155,0.4)" stroke="#3d2e14" stroke-width="0.8"/>
    <ellipse cx="110" cy="80" rx="32" ry="38" fill="rgba(220,195,165,0.35)" stroke="#2c2418" stroke-width="1.1"/>
    <path d="M78 70 C70 80 68 100 72 118 C76 128 82 132 88 130" stroke="#2c2418" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M80 65 C72 75 70 95 73 115" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    <path d="M142 70 C150 80 152 100 148 118 C144 128 138 132 132 130" stroke="#2c2418" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M92 100 C88 112 90 124 100 132 C106 136 114 136 120 132 C130 124 132 112 128 100" stroke="#2c2418" stroke-width="0.9" fill="rgba(180,155,120,0.15)"/>
    <path d="M98 102 C104 98 116 98 122 102" stroke="#2c2418" stroke-width="0.9" fill="none"/>
    <ellipse cx="100" cy="78" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(60,40,20,0.3)"/>
    <ellipse cx="120" cy="78" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(60,40,20,0.3)"/>
    <path d="M95 73 C97 71 103 71 105 73" stroke="#2c2418" stroke-width="0.9" fill="none"/>
    <path d="M115 73 C117 71 123 71 125 73" stroke="#2c2418" stroke-width="0.9" fill="none"/>
    <path d="M110 80 L107 92 C107 95 110 97 113 95 L116 92" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <circle cx="110" cy="72" r="44" stroke="rgba(212,168,67,0.25)" stroke-width="1.2" fill="none" stroke-dasharray="3 4"/>
    <path d="M90 130 C88 160 86 200 85 240" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    <path d="M115 128 C115 165 114 205 113 245" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    <path d="M135 132 C137 165 138 205 140 245" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    </g>`,

  aristotle: `
    <g opacity="0.88">
    <path d="M55 270 C50 235 48 200 52 168 C57 140 70 128 88 122 L110 116 L132 122 C150 128 163 140 168 168 C172 200 170 235 165 270Z" stroke="#2c2418" stroke-width="1.2" fill="rgba(195,185,165,0.18)"/>
    <path d="M88 122 C78 135 70 160 68 190 C66 215 68 245 70 270" stroke="#3d2e14" stroke-width="0.9" fill="none"/>
    <path d="M132 122 C148 140 155 168 152 200" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <rect x="102" y="98" width="16" height="22" rx="5" fill="rgba(205,180,150,0.4)" stroke="#3d2e14" stroke-width="0.8"/>
    <ellipse cx="110" cy="74" rx="30" ry="35" fill="rgba(215,190,160,0.35)" stroke="#2c2418" stroke-width="1.1"/>
    <path d="M80 58 C82 48 96 42 110 42 C124 42 136 48 140 56" stroke="#2c2418" stroke-width="1" fill="none"/>
    <path d="M80 58 C76 62 74 68 76 74" stroke="#2c2418" stroke-width="1" fill="none"/>
    <path d="M140 58 C144 62 146 68 144 74" stroke="#2c2418" stroke-width="1" fill="none"/>
    <path d="M88 95 C84 108 85 122 92 132 C100 140 120 140 128 132 C135 122 136 108 132 95" stroke="#2c2418" stroke-width="0.9" fill="rgba(175,150,115,0.2)"/>
    <path d="M90 110 C92 118 98 124 110 126 C122 124 128 118 130 110" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    <path d="M97 97 C103 93 117 93 123 97" stroke="#2c2418" stroke-width="0.9" fill="none"/>
    <ellipse cx="100" cy="72" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(50,35,15,0.3)"/>
    <ellipse cx="120" cy="72" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(50,35,15,0.3)"/>
    <path d="M94 66 C97 64 104 64 106 66" stroke="#2c2418" stroke-width="1" fill="none"/>
    <path d="M114 66 C116 64 123 64 126 66" stroke="#2c2418" stroke-width="1" fill="none"/>
    <path d="M110 75 L108 87 C107 90 110 92 113 90 L115 87" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <rect x="62" y="175" width="28" height="14" rx="7" stroke="#3d2e14" stroke-width="0.9" fill="rgba(240,225,190,0.5)"/>
    <line x1="70" y1="175" x2="70" y2="189" stroke="#3d2e14" stroke-width="0.6"/>
    <line x1="82" y1="175" x2="82" y2="189" stroke="#3d2e14" stroke-width="0.6"/>
    <path d="M95 122 C93 155 91 195 90 240" stroke="#3d2e14" stroke-width="0.65" fill="none"/>
    <path d="M118 118 C118 158 117 198 116 242" stroke="#3d2e14" stroke-width="0.65" fill="none"/>
    </g>`,

  lincoln: `
    <g opacity="0.88">
    <path d="M52 270 C50 235 50 195 55 165 C60 140 72 128 90 122 L110 116 L130 122 C148 128 160 140 165 165 C170 195 170 235 168 270Z" stroke="#1a1208" stroke-width="1.3" fill="rgba(30,25,18,0.22)"/>
    <path d="M90 122 L98 145 L110 150 L122 145 L130 122" stroke="#1a1208" stroke-width="0.9" fill="rgba(240,230,210,0.35)"/>
    <path d="M104 148 C101 152 97 155 104 157 L110 155 L116 157 C123 155 119 152 116 148 L110 151Z" stroke="#1a1208" stroke-width="0.8" fill="rgba(30,25,18,0.5)"/>
    <rect x="103" y="100" width="14" height="22" rx="4" fill="rgba(200,175,145,0.4)" stroke="#3d2e14" stroke-width="0.8"/>
    <path d="M82 90 C80 65 86 44 110 40 C134 44 142 65 140 90 C138 110 130 120 110 122 C90 120 84 110 82 90Z" fill="rgba(205,178,148,0.35)" stroke="#1a1208" stroke-width="1.1"/>
    <rect x="78" y="8" width="64" height="42" rx="2" fill="rgba(20,18,12,0.75)" stroke="#1a1208" stroke-width="1"/>
    <path d="M72 50 C74 44 146 44 148 50 C148 53 72 53 72 50Z" fill="rgba(20,18,12,0.85)" stroke="#1a1208" stroke-width="0.8"/>
    <path d="M96 110 C94 118 96 126 104 130 C108 132 112 132 116 130 C124 126 126 118 124 110" stroke="#1a1208" stroke-width="0.9" fill="rgba(50,40,25,0.25)"/>
    <path d="M84 85 C86 88 88 92 87 96" stroke="#3d2e14" stroke-width="0.6" fill="none"/>
    <path d="M136 85 C134 88 132 92 133 96" stroke="#3d2e14" stroke-width="0.6" fill="none"/>
    <ellipse cx="98" cy="80" rx="5.5" ry="4" stroke="#1a1208" stroke-width="0.9" fill="rgba(40,30,12,0.35)"/>
    <ellipse cx="122" cy="80" rx="5.5" ry="4" stroke="#1a1208" stroke-width="0.9" fill="rgba(40,30,12,0.35)"/>
    <path d="M92 74 C95 72 101 72 104 74" stroke="#1a1208" stroke-width="1" fill="none"/>
    <path d="M116 74 C119 72 125 72 128 74" stroke="#1a1208" stroke-width="1" fill="none"/>
    <path d="M110 82 L107 96 C106 100 110 103 114 100 L116 96" stroke="#3d2e14" stroke-width="0.9" fill="none"/>
    <path d="M100 108 C104 106 116 106 120 108" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <circle cx="110" cy="175" r="2" stroke="#3d2e14" stroke-width="0.6" fill="rgba(50,40,25,0.4)"/>
    <circle cx="110" cy="198" r="2" stroke="#3d2e14" stroke-width="0.6" fill="rgba(50,40,25,0.4)"/>
    <circle cx="110" cy="221" r="2" stroke="#3d2e14" stroke-width="0.6" fill="rgba(50,40,25,0.4)"/>
    </g>`,

  newton: `
    <g opacity="0.88">
    <path d="M50 270 C48 230 48 192 55 162 C62 136 76 124 92 118 L110 112 L128 118 C144 124 158 136 165 162 C172 192 172 230 170 270Z" stroke="#1a1208" stroke-width="1.2" fill="rgba(60,50,35,0.2)"/>
    <path d="M92 118 L96 148 L110 155 L124 148 L128 118" stroke="#1a1208" stroke-width="0.9" fill="rgba(220,210,185,0.3)"/>
    <path d="M104 145 C102 154 105 160 110 162 C115 160 118 154 116 145" stroke="#1a1208" stroke-width="0.8" fill="rgba(240,235,220,0.5)"/>
    <rect x="103" y="100" width="14" height="20" rx="4" fill="rgba(205,178,148,0.4)" stroke="#3d2e14" stroke-width="0.8"/>
    <ellipse cx="110" cy="75" rx="30" ry="36" fill="rgba(210,185,155,0.35)" stroke="#1a1208" stroke-width="1.1"/>
    <path d="M80 60 C68 70 62 90 64 110 C66 125 72 132 80 135" stroke="#1a1208" stroke-width="1.1" fill="none"/>
    <path d="M82 55 C70 64 65 82 66 100" stroke="#2c2418" stroke-width="0.8" fill="none"/>
    <path d="M140 60 C152 70 158 90 156 110 C154 125 148 132 140 135" stroke="#1a1208" stroke-width="1.1" fill="none"/>
    <path d="M138 55 C150 64 155 82 154 100" stroke="#2c2418" stroke-width="0.8" fill="none"/>
    <path d="M82 52 C84 44 96 40 110 40 C124 40 136 44 138 52" stroke="#1a1208" stroke-width="1" fill="none"/>
    <path d="M68 88 C65 92 65 97 68 100" stroke="#2c2418" stroke-width="0.6" fill="none"/>
    <path d="M152 88 C155 92 155 97 152 100" stroke="#2c2418" stroke-width="0.6" fill="none"/>
    <ellipse cx="100" cy="73" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(45,30,12,0.35)"/>
    <ellipse cx="120" cy="73" rx="5" ry="3.5" stroke="#1a1208" stroke-width="0.9" fill="rgba(45,30,12,0.35)"/>
    <path d="M94 67 C97 65 103 65 106 67" stroke="#1a1208" stroke-width="0.9" fill="none"/>
    <path d="M114 67 C117 65 123 65 126 67" stroke="#1a1208" stroke-width="0.9" fill="none"/>
    <path d="M110 76 L108 88 C107 91 110 94 113 91 L115 88" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <path d="M102 99 C106 97 114 97 118 99" stroke="#3d2e14" stroke-width="0.8" fill="none"/>
    <circle cx="158" cy="195" r="10" stroke="#3d2e14" stroke-width="0.9" fill="rgba(160,80,60,0.25)"/>
    <path d="M158 185 C159 181 163 179" stroke="#3d2e14" stroke-width="0.7" fill="none"/>
    <path d="M88 122 C86 158 84 198 83 242" stroke="#3d2e14" stroke-width="0.65" fill="none"/>
    <path d="M118 118 C118 158 117 200 116 244" stroke="#3d2e14" stroke-width="0.65" fill="none"/>
    </g>`,

  // ── ADD NEW SKETCHES BELOW ────────────────────────────────
  // Each sketch should use viewBox="0 0 220 270"
  // moses: `<g opacity="0.88">...</g>`,

};
