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
