from fastapi import FastAPI
from app.api.auth import router as authRouter
from app.database import database

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to NextGen-VChat Backend 🚀"}

app.include_router(authRouter, prefix="/auth")