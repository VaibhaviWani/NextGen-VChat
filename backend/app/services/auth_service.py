from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import hash_password, verify_password

def register_user(fullname: str, email: str, password: str, db: Session):
    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise ValueError("Email already registered.")
    
    hashed_password = hash_password(password)
    user = User( 
        fullname = fullname,
        email = email,
        password = hashed_password
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

def login_user(email: str, password: str, db: Session):
    user = db.query(User).filter(User.email == email).first()

    if not user:
        raise ValueError("Invalid email or password.")

    if not verify_password(password, user.password):
        raise ValueError("Invalid email or password.")

    return user