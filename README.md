# task-management-hybrid
A Task Management system using Node.js, featuring a Hybrid Database (PostgreSQL for Users and MongoDB for Tasks) with JWT Authentication.
# Hybrid Database Task Management System

A professional backend implementation featuring a dual-database architecture. This project demonstrates secure user authentication and scalable task management.

## 📺 Project Demonstration
**[https://drive.google.com/file/d/103dgiw7GY8LO7fxC5mE4rvA7YzKG_edj/view?usp=sharing]**
*This 10-minute video covers User Auth (PostgreSQL), Task CRUD (MongoDB), and Security logic.*

## 🏗️ Architecture
- **Relational (PostgreSQL):** Stores User credentials and profile data for structured, secure authentication.
- **NoSQL (MongoDB):** Stores Task documents for flexible, schema-less data management.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Auth:** JSON Web Tokens (JWT) & Bcrypt
- **Databases:** PostgreSQL (via pg), MongoDB (via Mongoose)

## 🔑 Key Security Features
- **JWT Protection:** All task routes require a valid bearer token.
- **Data Isolation:** Users are strictly forbidden from viewing, editing, or deleting tasks created by others.
- **Password Hashing:** Uses Bcrypt for secure user credential storage.
