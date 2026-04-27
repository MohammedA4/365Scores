# # 365Scores – Full Stack Team Data Management System

365Scores is a full stack web application built with React and MongoDB that allows users to manage football team statistics. The system supports full CRUD functionality and stores data persistently using a backend API.

---

## 🚀 Overview

This project demonstrates:

* Full stack development (Frontend + Backend)
* CRUD operations with persistent storage
* REST API design
* Database integration using MongoDB
* Component-based frontend architecture

---

## ✨ Features

### ⚽ Team Management

* Add new football teams
* Update existing team statistics
* Delete teams from the database
* View team history and records

---

### 📊 Data Stored

Each team record includes:

* Team name
* Matches played
* Wins, draws, losses
* Goals scored and conceded
* Points
* Season/year

---

### 🔄 CRUD Functionality

* **Create** → Add team data to MongoDB
* **Read** → Retrieve and display team stats
* **Update** → Modify existing records
* **Delete** → Remove team entries

---

## 🏗️ Tech Stack

### Frontend

* React (Create React App)
* JavaScript (ES6)
* CSS3 
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB (NoSQL database)

---

## 📂 Project Structure

```bash id="0j6t3k"
365Scores/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── TeamDataForm.js
│   │   ├── TeamDataUpdate.js
│   │   ├── TeamDataDelete.js
│   │   ├── TeamDataHistory.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
```

---

## ▶️ Running the Project

### 1. Clone the repository

```bash id="a1c1gk"
git clone https://github.com/yourusername/365scores.git
cd 365scores
```

---

### 2. Start the backend

```bash id="p8j0kl"
cd backend
npm install
npm start
```

Backend runs on:

```id="d2y9ws"
http://localhost:5000
```

---

### 3. Start the frontend

```bash id="z7f3qa"
cd frontend
npm install
npm start
```

Frontend runs on:

```id="r4q8xy"
http://localhost:3000
```

---

## 🔗 API Endpoints (Example)

```bash id="k9v2md"
POST   /api/teams        → Create team
GET    /api/teams        → Get all teams
PUT    /api/teams/:id    → Update team
DELETE /api/teams/:id    → Delete team
```

---

## 🎯 Key Concepts Demonstrated

* RESTful API development
* MongoDB data modelling
* Frontend-backend integration
* Asynchronous data handling (Axios)
* Component-based UI design

---

## 📌 Future Improvements

* User authentication (login/signup)
* Deploy backend (Render / Railway)
* Deploy frontend (Netlify / Vercel)
* Add charts for team performance
* Improve UI/UX design

---

## 👤 Author

Mohammed Abir

---

## 📄 License

This project is for educational purposes.
