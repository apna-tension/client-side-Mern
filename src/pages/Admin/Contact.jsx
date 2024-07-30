
import '../../style/AdminStyle/Contact.css'; // Import CSS file for styling

import React, { useState } from 'react';
import { useAuth } from '../../store/auth';

const Contact = () => {
    const { adminContact } = useAuth();
    const [editIndex, setEditIndex] = useState(null);
    const [editedMessage, setEditedMessage] = useState('');

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedMessage(adminContact[index].message);
    };

    const handleSaveEdit = () => {
        // Update contact details
        const updatedContact = [...adminContact];
        updatedContact[editIndex].message = editedMessage;
        // Update contact details in the store or backend
        // For now, just console log the updated contact
        console.log("Updated Contact:", updatedContact[editIndex]);
        // Close edit form or modal
        setEditIndex(null);
    };

    return (
        <div className="contact-page">
            <h2>Contact</h2>

            <div className="contact-table-container">
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminContact && adminContact.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {editIndex === index ? (
                                        <textarea
                                            value={editedMessage}
                                            onChange={(e) => setEditedMessage(e.target.value)}
                                            rows={3}
                                            cols={30}
                                        />
                                    ) : (
                                        user.message
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <>
                                            <button className="save-btn" onClick={handleSaveEdit}>Save</button>
                                            <button className="cancel-btn" onClick={() => setEditIndex(null)}>Cancel</button>
                                        </>
                                    ) : (
                                        <button className="edit-btn" onClick={() => handleEditClick(index)}>Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact;
