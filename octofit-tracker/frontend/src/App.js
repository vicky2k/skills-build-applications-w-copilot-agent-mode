

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navLinks = [
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="octofit-logo me-2" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navLinks.map(link => (
                <li className="nav-item" key={link.to}>
                  <Link className="nav-link" to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/" element={
                <div className="text-center mt-5">
                  <h1 className="display-4 fw-bold mb-3">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
                  <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
                  <Link to="/activities" className="btn btn-lg btn-primary mt-3">Get Started</Link>
                </div>
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
