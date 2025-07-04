# Authentication API Documentation

This document describes the authentication API endpoints for the Virtual School Online platform.

## Base URL
All API endpoints start with `/v2/api/`

## Database Setup
The API uses Neon PostgreSQL database. The connection is automatically configured.

## Endpoints

### 1. User Registration (Sign Up)
**POST** `/v2/api/auth/signup`

Creates a new user account.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "password123",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student" // optional, defaults to "student"
}
```

#### Response (201 Created)
```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "student"
  }
}
```

#### Validation Rules
- Email must be valid format
- Password must be at least 8 characters
- All fields are required except role
- Email must be unique

### 2. User Authentication (Sign In)
**POST** `/v2/api/auth/signin`

Authenticates a user and returns a JWT token.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response (200 OK)
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "student"
  }
}
```

### 3. Get User Profile (Protected)
**GET** `/v2/api/user/profile`

Returns the current user's profile information.

#### Headers
```
Authorization: Bearer <jwt_token>
```

#### Response (200 OK)
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "student",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Missing required fields"
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid email or password"
}
```

### 409 Conflict
```json
{
  "error": "User with this email already exists"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

## JWT Token

The JWT token contains the following payload:
```json
{
  "id": 1,
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student",
  "iat": 1640995200,
  "exp": 1641600000
}
```

Token expires after 7 days.

## User Roles

- `student`: Default role for students
- `teacher`: For teachers/instructors
- `admin`: For administrators

## Testing

Visit `/test-auth` to test the authentication endpoints with a web interface.

## Security Features

- Passwords are hashed using bcrypt with 12 salt rounds
- JWT tokens for stateless authentication
- Email validation
- Password strength requirements
- Protected routes with middleware
- SQL injection protection with parameterized queries

## Environment Variables

Set these environment variables in production:

```env
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secure_jwt_secret
``` 