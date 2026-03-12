"""
proxy/main.py
─────────────────────────────────────────────────────────────
Thin FastAPI proxy that holds the Anthropic API key and
forwards streaming requests from the browser to the API.

The frontend calls  POST /v1/messages  (via nginx /api/)
and this service forwards it to api.anthropic.com.
"""

import os
import httpx
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import StreamingResponse

app = FastAPI()

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
ANTHROPIC_URL = "https://api.anthropic.com/v1/messages"


@app.post("/v1/messages")
async def proxy_messages(request: Request):
    if not ANTHROPIC_API_KEY:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not set")

    body = await request.body()

    async def stream():
        async with httpx.AsyncClient(timeout=120) as client:
            async with client.stream(
                "POST",
                ANTHROPIC_URL,
                headers={
                    "x-api-key": ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01",
                    "content-type": "application/json",
                },
                content=body,
            ) as response:
                if response.status_code != 200:
                    yield f"data: {{'error': {response.status_code}}}\n\n".encode()
                    return
                async for chunk in response.aiter_bytes():
                    yield chunk

    return StreamingResponse(stream(), media_type="text/event-stream")


@app.get("/health")
def health():
    return {"status": "ok"}
