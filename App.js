import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TeamDataForm from './TeamDataForm';
import TeamDataUpdate from './TeamDataUpdate';
import TeamDataHistory from './TeamDataHistory';
import TeamDataDelete from './TeamDataDelete';
import plmLogo from './images/plm.jpg';
import bannerImage from './images/banner.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <h1>
            <img src={plmLogo} alt="Premier League Logo" className="plm-logo" />
            365 Scores
          </h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">Add Team</Link></li>
              <li><Link to="/update">Update Team</Link></li>
              <li><Link to="/history">Team History</Link></li>
              <li><Link to="/delete">Delete Team</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="home-content">
                <img src={bannerImage} alt="Football Scene" className="main-image" />
                <h2 className="welcome-message">
                  Welcome to the Football App, 365 Scores<br />
                  <span className="highlight">The Ultimate Place for Live Football &mdash; Anytime, Anywhere, Any Game!</span>
                </h2>
              </div>
            } />
            <Route path="/add" element={<TeamDataForm />} />
            <Route path="/update" element={<TeamDataUpdate />} />
            <Route path="/history" element={<TeamDataHistory />} />
            <Route path="/delete" element={<TeamDataDelete />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="App-footer">
          <p>&copy; 2024 365 Scores. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
