# Voting Application - Backend

This is the backend of a **secure and user-friendly voting system**, built with **Node.js, Express, and MongoDB**.  
It handles **user authentication**, **candidate management**, and the **voting process**, ensuring **one vote per user** and **role-based access control**.

## 🔑 Features

- ✅ User sign-up and login using **Aadhar Card Number** and password  
- ✅ Users must be **legally eligible to vote**  
- 📋 Users can view the **list of candidates**  
- 🗳️ Users can vote **only once**  
- 🛠️ Admins can manage candidates (**Add / Update / Delete**)  
- 🚫 Admins **cannot vote**  
- 🔐 **JWT authentication** for secure access  
- 🗂️ Well-structured API for easy integration
  

## 📌 API Endpoints

### 🔐 Authentication

| Method | Endpoint  | Description |
|--------|-----------|-------------|
| POST   | /api/signup   | Register a new user |
| POST   | /api/login    | Login an existing user |

---

### 🧑‍💼 Candidates (Admin Only)

| Method | Endpoint             | Description                |
|--------|--------------------|----------------------------|
| GET    | /api/candidate      | Get list of all candidates |
| POST   | /api/candidate      | Add a new candidate        |
| PUT    | /api/candidate/:id  | Update candidate by ID     |
| DELETE | /api/candidate/:id  | Delete candidate by ID     |

---

### 🗳️ Voting (User Only)

| Method | Endpoint                     | Description                       |
|--------|------------------------------|-----------------------------------|
| POST   | /api/vote/:id                | Vote for a candidate (once only) |
| GET    | /api/vote/count              | Get vote counts for all candidates |

---

