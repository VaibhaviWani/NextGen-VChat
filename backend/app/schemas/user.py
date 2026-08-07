from pydantic import BaseModel, EmailStr, ConfigDict

class UserResponse(BaseModel):
    id: int
    fullname: str
    email: EmailStr

    model_config = ConfigDict(from_attributes=True)