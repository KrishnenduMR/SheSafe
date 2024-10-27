import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import the CSS file

const Home = () => {
    const [message, setMessage] = useState('');

    const handlePanicButtonClick = async () => {
        const messageContent = "Emergency! Help needed! Live location: [insert live location here]"; // Modify as needed
        const phoneNumber = "";

        try {
            const response = await fetch('http://localhost:5000/api/send-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageContent, to: phoneNumber }),
            });

            if (response.ok) {
                setMessage("The live location has been sent to your contacts!");
            } else {
                setMessage("Failed to send panic message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Done sending.");
        }
    };

    return (
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
                <button className="btn btn-danger btn-lg" onClick={handlePanicButtonClick}>
                    Panic Button
                </button>
            </div>

            {/* Message Display */}
            {message && <div className="alert-message mt-3">{message}</div>}
        </div>
    );
};

export default Home;
