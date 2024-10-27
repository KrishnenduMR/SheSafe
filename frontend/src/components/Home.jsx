import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
    <div className="container text-center mt-5">
        <h1>Welcome to Safety App</h1>
        <nav className="mt-4">
            <Link to="/help" className="btn btn-outline-primary mx-2">Help</Link>
            <Link to="/planning" className="btn btn-outline-primary mx-2">Planning</Link>
            <Link to="/story" className="btn btn-outline-primary mx-2">Story</Link>
            <Link to="/tracking" className="btn btn-outline-primary mx-2">Tracking</Link>
        </nav>
        
        {/* Panic Button */}
        <div className="mt-5">
            <button className="btn btn-danger btn-lg" onClick={() => alert("Panic button activated!")}>
                Panic Button
            </button>
        </div>
    </div>
);

export default Home;
