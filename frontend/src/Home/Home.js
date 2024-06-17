import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <h1>Welcome to To-Do App</h1>
            <div className="clearfix1">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Signup</button>
            </div>
        </div>
    );
}

export default Home;