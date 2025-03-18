"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AdminPanel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            router.push('/gallery');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminPanel; 