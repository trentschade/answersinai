# Dockerfile
# ─────────────────────────────────────────────────────────────
# Lightweight nginx image serving static files.
# No build step needed — pure HTML/CSS/JS.

FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy site files
COPY index.html        /usr/share/nginx/html/
COPY app.js            /usr/share/nginx/html/
COPY figures/          /usr/share/nginx/html/figures/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
