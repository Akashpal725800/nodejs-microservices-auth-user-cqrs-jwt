NodeJS Microservices Auth–User System (CQRS + JWT)

This project demonstrates a production-style microservices architecture built with Node.js, where Auth Service and User Service are completely separated and communicate using an HttpClientFactory pattern.
The system follows the CQRS (Command Query Responsibility Segregation) pattern and uses JWT authentication for secure access.


🧩 Architecture Overview
Client
  ↓
Auth Service (Port 8001)
  ↓ (HttpClientFactory)
User Service (Port 8002)
  ↓
MongoDB


Auth Service

Handles Register & Login

Generates JWT Token

Does NOT store user data

User Service

Owns MongoDB

Creates and fetches user data

Pure data service

🚀 Tech Stack

Node.js + Express

MongoDB

Axios (HttpClientFactory pattern)

JWT (jsonwebtoken)

CQRS Pattern

Microservices Architecture

📁 Folder Structure
microservice/
 ├── auth-service/
 │    ├── src/
 │    │    ├── controllers/
 │    │    ├── handlers/
 │    │    ├── services/
 │    │    ├── routes/
 │    │    └── utils/
 │
 └── user-service/
      ├── src/
      │    ├── controllers/
      │    ├── handlers/
      │    ├── services/
      │    └── routes/

⚙️ Environment Variables
auth-service/.env
PORT=8001
USER_SERVICE_URL=http://localhost:8002
JWT_SECRET=your_secret_key

user-service/.env
PORT=8002
MONGODB_URL=mongodb://localhost:27017/users


🔌 API Routes
Auth Service (8001)
Method	Route	Description
POST	/auth/register	Create new user (calls user-service)
POST	/auth/login	Verify user & generate JWT
User Service (8002)
Method	Route	Description
POST	/user/create	Store user in MongoDB
GET	/user/:email	Fetch user by email


🔐 Authentication Flow

User hits /auth/register

Auth calls User Service to store data

User hits /auth/login

Auth fetches user data from User Service

JWT token is generated and returned

🧪 Testing with Postman
Register
POST http://localhost:8001/auth/register


Login (JWT)
POST http://localhost:8001/auth/login


✅ Key Learning Highlights

Microservices communication

CQRS implementation

HttpClientFactory pattern

Proper service separation

JWT based authentication

MongoDB as dedicated user data store

👨‍💻 Developer

Akash Pal