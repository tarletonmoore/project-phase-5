import React, { useContext, useState } from "react";

function SignUpForm(
    { onLogin }
) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])
    function handleSubmit(e) {

        e.preventDefault();
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                bio,
            }),
        })

            .then((r) => {
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </section>
            <section>
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
            </section>

            <section>
                <label htmlFor="bio">Bio</label>
                <textarea
                    rows="3"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </section>

            <section>
                <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            </section>

            {errors && errors.length > 0 && (
                <ul style={{ color: "dark red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}


        </form>
    );
}

export default SignUpForm;