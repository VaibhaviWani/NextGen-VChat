from pydantic import BaseModel, EmailStr, Field, model_validator
from app.schemas.user import UserResponse

class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)

class RegisterRequest(BaseModel):
    fullname: str = Field(min_length=3)
    email: EmailStr
    password: str = Field(min_length=8)
    confirm_password: str = Field(min_length=8) 
    @model_validator(mode="after")
    def validate_passwords(self):
        if self.confirm_password == self.password:
            return self
        
        raise ValueError("Passwords do not match.")

class AuthResponse(BaseModel):
    message: str
    user: UserResponse