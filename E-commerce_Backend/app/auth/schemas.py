from pydantic import BaseModel, EmailStr, Field
from enum import Enum

# Role Enum
class UserRole(str, Enum):
    admin = "admin"
    user = "user"

# Create User
class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)
    role: UserRole = UserRole.user

# Public User Response
class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: UserRole

    class Config:
        from_attributes = True

# Login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Auth Token Response
class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"

# Forgot Password
class ForgotPasswordRequest(BaseModel):
    email: EmailStr

# Reset Password
class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str = Field(..., min_length=6)

    class Config:
        from_attributes = True  # Pydantic v2
