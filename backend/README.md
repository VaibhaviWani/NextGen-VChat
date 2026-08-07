# NextGen-VChat Backend

Backend service for NextGen-VChat built with FastAPI.

The backend provides authentication, database access, and the API foundation for the NextGen-VChat communication platform.

---

## Tech Stack

- Python
- FastAPI
- Uvicorn
- PostgreSQL
- SQLAlchemy
- Pydantic
- Alembic
- JWT Authentication

---

## Architecture

```text
backend/
│
├── app/
│   ├── api/
│   │   └── auth.py
│   │
│   ├── core/
│   │   └── security.py
│   │
│   ├── database/
│   │   ├── config.py
│   │   └── database.py
│   │
│   ├── models/
│   │   ├── base.py
│   │   └── user.py
│   │
│   ├── schemas/
│   │   └── auth.py
│   │
│   ├── services/
│   │   └── auth_service.py
│   │
│   └── main.py
│
├── tests/
│
├── requirements.txt
├── .env
└── .env.example