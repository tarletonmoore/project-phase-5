import React, { useState } from "react";


function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            }
            else { r.json().then((errorData) => setErrors(errorData.errors)); }

        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>
            <section>
                <button type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </section>

            {errors.length > 0 && (
                <ul style={{ color: "dark red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}

        </form>
    );
}

export default LoginForm;
