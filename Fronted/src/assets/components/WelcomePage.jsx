// WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleWelcomeClick = () => {
        navigate('/register'); // Redirect to the registration page
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6 bg-white border rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Hospital Management System</h1>
                <p className="text-lg mb-6">Click the button below to register a new hospital.</p>
                <button 
                    onClick={handleWelcomeClick} 
                    className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
                >
                    Go to Registration
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
