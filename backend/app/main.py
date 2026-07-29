from fastapi import FastAPI
from app.api.auth import router as loginRouter

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to NextGen-VChat Backend 🚀"}

app.include_router(loginRouter, prefix="/auth")