import React from 'react';

import '../../style/AdminStyle/User.css'; // Import CSS file for styling

import { useAuth } from '../../store/auth';

const User = () => {
    const { adminUser } = useAuth();
    console.log("my user is : ", adminUser);
    return (
        <div className="user-page">
            <h2>User</h2>

            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminUser && adminUser.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User;
