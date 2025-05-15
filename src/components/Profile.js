import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);

  const saveChanges = () => {
    setName(tempName);
    setEmail(tempEmail);
    setEditMode(false);
  };

  return (
    <div className="card">
      <h2>Profile Info</h2>
      {!editMode ? (
        <>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={{ borderRadius: '50%', marginBottom: 10 }}
          />
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={tempName}
            onChange={e => setTempName(e.target.value)}
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />
          <input
            type="email"
            value={tempEmail}
            onChange={e => setTempEmail(e.target.value)}
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />
          <button onClick={saveChanges} style={{ marginRight: 10 }}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default Profile;
