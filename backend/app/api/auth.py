from fastapi import APIRouter, Depends, HTTPException 
from app.schemas.auth import LoginRequest, RegisterRequest, AuthResponse
from app.database.database import get_db
from sqlalchemy.orm import Session
from app.services.auth_service import register_user, login_user

router = APIRouter()

@router.post("/login", response_model=AuthResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    try:
        user = login_user(
            email=request.email,
            password=request.password,
            db=db
        )
    except ValueError as e:
        raise HTTPException(
            status_code=401,
            detail=str(e)
        )

    return {
        "message": "Login successful!",
        "user": user
    }

@router.post("/register", response_model=AuthResponse)
def register(request: RegisterRequest, db: Session = Depends(get_db)):

    try:
        user = register_user(
            fullname=request.fullname,
            email=request.email,
            password=request.password,
            db=db
        )
    except ValueError as e:
        raise HTTPException(
            status_code=409,
            detail=str(e)
        )

    return {
        "message": "User registered successfully!",
        "user": user
    }  