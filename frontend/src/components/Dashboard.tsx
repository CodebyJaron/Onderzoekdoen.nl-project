// src/components/Profile.tsx
import React from "react";

const Dashboard: React.FC = () => {
    const userItem = localStorage.getItem("user");
    const user = userItem ? JSON.parse(userItem) : null;

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                </div>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
};

export default Dashboard;
