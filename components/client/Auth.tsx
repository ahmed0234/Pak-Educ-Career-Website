"use client";
import { Lock } from 'lucide-react';
import { useEffect, useState } from "react";
import "./AuthStyle.css";

const Auth = ({ authenticator }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        // Check if the user is already authenticated
        const storedTimestamp = localStorage.getItem('authTimestamp');
        if (storedTimestamp) {
            const expirationTime = parseInt(storedTimestamp, 10) + 3600000; // 1 hour in milliseconds
            const now = Date.now();
            if (now < expirationTime) {
                setAuthenticated(true);
                authenticator(true);
            } else {
                // If expired, clear the timestamp
                localStorage.removeItem('authTimestamp');
            }
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "pecutube" && password === "pecutube0234") {
            setAuthenticated(true);
            setError(false);
            // Store the current timestamp in LocalStorage
            localStorage.setItem('authTimestamp', Date.now().toString());
            authenticator(true);
        } else {
            setError(true);
        }
    }

    return (
        <div className={`${authenticated && 'hidden'} form-card1 w-[330px] sm:w-[410px] lg:mx-auto mt-40`}>
            <div className="form-card2">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-heading flex gap-2"><Lock /><span>Authenticate Yourself!</span></p>
                    <div className="form-field">
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                            placeholder="Username" 
                            className="input-field" 
                            type="text" 
                        />
                    </div>
                    <div className="form-field">
                        <input
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="input-field"
                            type="password"
                        />
                    </div>
                    {error && <h1 className='text-rose-500 font-semibold'>Wrong Credentials!</h1>}
                    <button className="sendMessage-btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
