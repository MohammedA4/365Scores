# 365Scores – Football Team Data Management (Frontend)

365Scores is a React-based web application designed to manage and display football team statistics. The system provides an interface for creating, updating, viewing, and deleting team data.

---

## 🚀 Overview

This project demonstrates:

* React frontend development
* CRUD interface design
* API integration structure using Axios
* Component-based architecture
* Handling structured football data (teams, goals, statistics)

---

## ✨ Features

### ⚽ Team Data Management

* Add new teams
* Update existing team statistics
* Delete team records
* View team history and performance

---

### 📊 Data Fields

The system is designed to handle:

* Team name
* Country
* Matches played
* Wins, draws, losses
* Goals scored and conceded
* Points
* Season/year

---

### 🔄 CRUD Interface

* **Create** → Add team data
* **Read** → View team statistics
* **Update** → Modify records
* **Delete** → Remove teams

---

## 🛠️ Technologies Used

* React (Create React App)
* JavaScript (ES6)
* CSS3
* Axios
* React Router

---

## 📂 Project Structure

```bash
src/
│
├── App.js
├── App.css
├── index.js
├── index.css
│
├── TeamDataForm.js
├── TeamDataUpdate.js
├── TeamDataDelete.js
├── TeamDataHistory.js
```

---

## ▶️ Running the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open in browser:

```txt
http://localhost:3000
```

---

## ⚠️ Backend Notice

This project was originally developed with a Node.js, Express, and MongoDB backend.

The backend handled football-related data such as:

* Countries
* Teams
* Goals
* Match statistics

At present, this repository contains only the React frontend.
API-based functionality (create, update, delete) will not work without the backend.

---

## 📁 Additional Data

The repository includes a CSV dataset (`FootbalCSV.csv`) containing football-related data, which can be used to:

* Rebuild the backend database
* Seed a MongoDB collection
* Restore full functionality

---

## 🎯 Learning Outcomes

* Building a React application with multiple components
* Designing a CRUD-based user interface
* Structuring frontend code for scalability
* Working with external data sources (CSV, APIs)

---

## 📌 Future Improvements

* Rebuild backend using Node.js and Express
* Reconnect MongoDB database
* Import CSV data into database
* Add authentication system
* Improve UI/UX design

---

## 👤 Author

Mohammed Abir

---

## 📄 License

This project is for educational purposes.
