# Answers in AI

Historical figures answer your questions — in their own words.

## Project Structure

```
answersinai/
├── index.html          # Main app shell (rarely needs editing)
├── app.js              # Application logic
├── figures/
│   ├── figures.js      # ← ADD NEW FIGURES HERE
│   └── sketches.js     # ← ADD NEW SKETCHES HERE
├── nginx.conf          # nginx server config
├── Dockerfile          # Container definition
├── docker-compose.yml  # Local dev + production compose
└── README.md
```

## Adding a New Figure

1. **Open `figures/figures.js`** and add a new entry:
   ```js
   moses: {
     name: "Moses",
     epithet: "Prophet · Liberator of Israel",
     neighbors: ["jesus", "aristotle", "lincoln", "newton"],
     suggestions: [
       "How did you part the Red Sea?",
       "What was God like?",
       "How do you lead a stubborn people?"
     ],
     systemPrompt: `You are Moses, prophet and lawgiver of Israel. Speak with weight and authority...`
   }
   ```

2. **Open `figures/sketches.js`** and add a matching SVG sketch:
   ```js
   moses: `<g opacity="0.88">...</g>`,
   ```
   All sketches use `viewBox="0 0 220 270"`.

3. **Add to neighbors** — update `neighbors` arrays in other figures to include the new key.

4. **Rebuild and deploy** (see below).

That's it. The subdomain `moses.answersinai.com` will automatically work once DNS is pointed at the server.

---

## Local Development

```bash
# Run with Docker
docker compose up

# Visit
open http://localhost:8080?figure=jesus
```

Or just open `index.html` directly in a browser — no server needed for development.

---

## Deployment (nginx + Docker)

### 1. Build and start the container

```bash
docker compose up -d --build
```

### 2. DNS

Add a wildcard A record pointing to your server:
```
*.answersinai.com  →  YOUR_SERVER_IP
```

### 3. Reverse proxy (nginx or Traefik)

The container listens on port `8080` by default. Your outer nginx or Traefik should:
- Accept `*.answersinai.com`
- Terminate SSL (Let's Encrypt)
- Proxy to the container

**Example outer nginx block:**
```nginx
server {
    listen 443 ssl;
    server_name ~^(?<subdomain>.+)\.answersinai\.com$;

    ssl_certificate     /etc/letsencrypt/live/answersinai.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/answersinai.com/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 4. Redeploy after changes

```bash
docker compose up -d --build
```

---

## API Key

The Anthropic API key is currently handled by the Claude.ai preview environment.

For production deployment you'll need to add a thin backend proxy so the key isn't exposed in the browser. A simple approach: a small Express or FastAPI server that holds the key and forwards streaming requests to the Anthropic API.
