from passlib.context import CryptContext
import uuid
from datetime import datetime
from fastapi import HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.auth.models import User, PasswordResetToken
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_password_reset_token(db: Session, user_id: int):
    token = str(uuid.uuid4())
    reset_token = PasswordResetToken(user_id=user_id, token=token)
    db.add(reset_token)
    db.commit()
    db.refresh(reset_token)
    return token

def validate_password_reset_token(db: Session, token: str):
    token_entry = db.query(PasswordResetToken).filter_by(token=token, used=False).first()
    if not token_entry or token_entry.expiration_time < datetime.utcnow():
        raise HTTPException(status_code=400, detail="Invalid or expired token")
    return token_entry