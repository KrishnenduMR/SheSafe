import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HelpPage from './components/HelpPage';
import PlanningPage from './components/Planningpage';
import StoryPage from './components/StoryPage';
import TrackingPage from './components/TrackingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/planning" element={<PlanningPage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
