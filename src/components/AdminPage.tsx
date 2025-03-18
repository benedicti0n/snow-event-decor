'use client'
import React, { useState } from 'react'

const AdminPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (username === 'ainur' && password === '12345') {
            setIsAuthenticated(true)
        } else {
            alert('Invalid credentials')
            setUsername('')
            setPassword('')
        }
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = async () => {
            const base64Image = reader.result

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ image: base64Image })
                })

                const data = await response.json()
                if (data.success) {
                    alert("Image uploaded successfully!")
                } else {
                    alert("Upload failed: " + data.error)
                }
            } catch (error) {
                console.error("Error uploading image:", error)
                alert("Error uploading image")
            }
        }
    }

    return (
        <div className="p-4">
            {!isAuthenticated ? (
                <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
                    <div>
                        <label htmlFor="username" className="block mb-2">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mb-4"
                    />
                </div>
            )}
        </div>
    )
}

export default AdminPage
