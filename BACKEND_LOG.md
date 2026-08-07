# NextGen-VChat Backend Development Log

---

## Goal

Develop a scalable backend using FastAPI that powers authentication, messaging, AI translation, meetings, and collaboration features.

---

## Planned Technology Stack

- FastAPI
- Python
- PostgreSQL
- SQLAlchemy
- Alembic
- JWT Authentication
- Pydantic
- OpenAI APIs

---

## Planned Architecture

backend/
│
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   └── main.py
│
├── tests/
│
├── requirements.txt
├── .env
├── .env.example

---

# Week 1

## ✅ Backend Foundation

Completed:

- Created Python virtual environment
- Installed FastAPI & Uvicorn
- Generated requirements.txt
- Created backend project structure
- Built FastAPI application
- Configured Uvicorn server
- Implemented APIRouter architecture
- Added authentication router
- Created LoginRequest schema using Pydantic
- Built initial POST /auth/login endpoint
- Tested endpoint using Swagger UI

---

## Lessons Learned

- Python virtual environments
- FastAPI application lifecycle
- Uvicorn server
- APIRouter
- Route prefixes
- Request vs Response
- HTTP POST
- Pydantic BaseModel
- Request schemas
- JSON → Python object conversion
- Swagger/OpenAPI documentation

---

# Week 2

## ✅ Request Validation

Completed:

- Added EmailStr validation
- Added minimum length validation using Field()
- Added model-level validation using model_validator()
- Implemented password confirmation validation
- Improved LoginRequest validation
- Improved RegisterRequest validation

---

## Lessons Learned

- EmailStr
- Field()
- Field constraints
- model_validator()
- Cross-field validation
- Validation lifecycle
- Clean request models
- Separation of validation and business logic

---

# Week 3

## ✅ PostgreSQL & SQLAlchemy Integration

Completed:

- Configured PostgreSQL database
- Added DATABASE_URL using environment variables
- Created centralized database configuration
- Created SQLAlchemy engine
- Configured SQLAlchemy SessionLocal
- Created shared declarative Base
- Created User database model
- Added primary key configuration
- Added unique email constraint
- Added database indexes
- Created users table using SQLAlchemy metadata
- Implemented database session dependency using get_db()
- Integrated database sessions with FastAPI routes

---

## Lessons Learned

- PostgreSQL connection configuration
- Environment variables
- SQLAlchemy Engine
- SQLAlchemy Session
- sessionmaker
- Declarative Base
- SQLAlchemy ORM models
- Primary keys
- Unique constraints
- Database indexes
- Transactions
- commit()
- refresh()
- FastAPI dependency injection
- Database session lifecycle
- Separation of database models and Pydantic schemas

---

# Week 4

## ✅ Authentication Backend

Completed:

### User Registration

- Implemented user registration service
- Added duplicate email detection
- Added password hashing using Pwdlib/Argon2
- Stored hashed passwords instead of plaintext passwords
- Added database transaction handling
- Added user refresh after commit
- Added structured registration response

### User Login

- Implemented login service
- Added user lookup by email
- Added password verification against stored password hashes
- Added generic authentication error messages
- Implemented 401 Unauthorized for invalid credentials
- Prevented user enumeration through identical login failure responses
- Added reusable AuthResponse schema
- Added response models to prevent password exposure

---

## Authentication Flow

### Registration

Client
→ RegisterRequest
→ Validation
→ Duplicate email check
→ Password hashing
→ User creation
→ PostgreSQL
→ AuthResponse

### Login

Client
→ LoginRequest
→ Validation
→ User lookup
→ Password verification
→ AuthResponse

Invalid credentials return:

`401 Unauthorized`

with the generic message:

`Invalid email or password.`

---

## Security Principles Implemented

- Passwords are never stored in plaintext
- Password hashes are verified using a dedicated verification function
- Duplicate registration attempts return `409 Conflict`
- Invalid login attempts return `401 Unauthorized`
- Login errors do not reveal whether an email exists
- Password fields are excluded from API responses
- Secrets are stored through environment-based configuration

---

## Lessons Learned

- Password hashing vs encryption
- Password salts
- Password verification
- Pwdlib/Argon2
- Service-layer business logic
- Authentication flow
- User enumeration
- HTTP 401 Unauthorized
- HTTP 409 Conflict
- Response models
- Pydantic from_attributes
- Separation of API and business logic
- Secure authentication error handling

---

# Next Milestone

## JWT Authentication

Planned:

- JWT configuration
- JWT secret/key management
- Access tokens
- Refresh tokens
- Token expiration
- JWT generation
- JWT verification
- Authentication dependency
- Protected API routes
- Authentication state
- React ↔ FastAPI authentication integration

---

## Planned Authentication Architecture

Login

→ Verify credentials

→ Generate short-lived access token

→ Generate long-lived refresh token

→ Return authentication response

Protected request

→ Receive access token

→ Verify JWT

→ Identify authenticated user

→ Allow request

When the access token expires:

→ Use refresh token

→ Generate new access token

---

## Current Status

Backend Foundation: ✅

Request Validation: ✅

PostgreSQL Integration: ✅

User Registration: ✅

Password Hashing: ✅

User Login: ✅

Password Verification: ✅

JWT Authentication: 🚧 Next