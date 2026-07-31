from fastapi import APIRouter 
from app.schemas.auth import LoginRequest, RegisterRequest

router = APIRouter()

@router.post("/login")
def login(request: LoginRequest):
    return {"message": "Login successful!", "email": request.email}

@router.post("/register")
def register(request: RegisterRequest):
    return {"message": "User registration successful!", "fullname": request.fullname, "email": request.email}