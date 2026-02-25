# 🛡️ Shield Audit System

A full-stack application for **real-time audit logging with self-destructing data**, built using **Spring Boot 3**, **MongoDB**, and **React**.

---

## 🚀 Overview

Shield Audit System provides a RESTful API and a modern dashboard to capture and monitor system events in real time.

### ✨ Key Features

- 🔥 **Self-Destructing Logs**  
  Every log entry is automatically deleted **60 seconds** after creation using MongoDB TTL indexing.

- 📊 **Real-Time Monitoring**  
  Tracks user actions and event details within a temporary time window.

- ⚙️ **Automatic TTL Index Creation**  
  MongoDB indexes are automatically created when the backend starts.

---

## 🏗️ Tech Stack

### Backend
- Java 17+
- Spring Boot 3
- MongoDB
- Maven

### Frontend
- React (Create React App)
- Node.js 18+

---

## 📁 Project Structure
shield-audit-system/
│
├── src/ # Spring Boot backend
├── frontend/ # React frontend
├── pom.xml # Maven configuration
└── README.md


---

## 🛠️ Prerequisites

Make sure you have installed:

- Java 17+
- Node.js 18+ & npm
- MongoDB (running on localhost:27017)

---

## 🚦 Getting Started

### 1️⃣ Start the Backend

Navigate to the project root directory:

#### Windows
```bash
mvnw.cmd spring-boot:run

#### macOS / Linux

```bash
./mvnw spring-boot:run
```

### Backend Configuration

- **Port:** 8080
- **Database:** audit_db
- **Base URL:** http://localhost:8080

---

### 2️⃣ Start the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📡 API Reference

### 🔹 Create Audit Log

**POST** `/api/audit`

#### Request Body

```json
{
  "user": "admin_user",
  "action": "FILE_UPLOAD",
  "details": "Uploaded src.zip to the server"
}
```

---

### 🔹 Get Active Logs

**GET** `/api/audit`

Returns all non-expired logs (logs expire automatically after 60 seconds).

---

## ⚙️ Key Configuration

### TTL Expiry (60 Seconds)

```java
@Indexed(expireAfter = "60s")
```

### Enable Auto Index Creation

```properties
spring.data.mongodb.auto-index-creation=true
```

---

## 🔐 How It Works

1. User performs an action from the frontend.
2. Backend stores the log in MongoDB.
3. MongoDB TTL index deletes the log automatically after 60 seconds.
4. Frontend displays only active (non-expired) logs.

---

## 📌 Future Improvements

- WebSocket support for live updates
- Authentication & authorization
- Configurable TTL duration
- Docker containerization
- Role-based audit tracking

---