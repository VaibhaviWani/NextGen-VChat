from fastapi import APIRouter 
from app.schemas.auth import LoginRequest

router = APIRouter()

@router.post("/login")
def login(request: LoginRequest):
    return {"message": "Login successful!", "email": request.email}