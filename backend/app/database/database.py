from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database.config import DATABASE_URL
from app.models.base import Base
from app.models.user import User

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(
    autocommit = False,
    autoflush = False,
    bind = engine
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()