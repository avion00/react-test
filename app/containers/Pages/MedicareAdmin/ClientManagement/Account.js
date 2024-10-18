import React, { useState, useEffect } from 'react';
import userData from './userAccount.json';

const AccountManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetail, setShowDetail] = useState(false); // Initially detail is hidden

  // Fetch users data from userAccount.json
  useEffect(() => {
    setUsers(userData);
  }, []);

  const toggleFreeze = (userId) => {
    setUsers((prevUsers) => prevUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, frozen: !user.frozen };
      }
      return user;
    })
    );
  };

  // Handle selecting a user
  const handleSelectUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setShowDetail(true); // Show the details dialog when a user is selected
  };

  // Close the detail dialog
  const closeDialog = () => {
    setShowDetail(false); // Hide the details dialog
  };

  // Render each user
  const renderUserList = () => users.map((user) => (
    <div
      key={user.id}
      className="userAccount"
      style={{
        border: '1px solid rgb(125, 125, 125, 0.4)',
        padding: '1.5em',
        borderRadius: '.5em',
        backgroundColor: 'rgb(37, 130, 160, .15)',
        width: '400px',
        flexGrow: 1,
        opacity: user.frozen ? 0.5 : 1, // Change opacity if account is frozen
      }}
    >
      <p style={{ fontWeight: '600', fontSize: '1.25em' }}>
        <span style={{ fontWeight: '600' }}> Username: </span>
        {user.username}
      </p>
      <p>
        <span style={{ fontWeight: '600' }}> Email: </span>
        {user.email}
      </p>
      <p>
        <span style={{ fontWeight: '600' }}> Status: </span>
        {user.frozen ? 'Frozen' : 'Active'}
      </p>
      <button
        onClick={() => handleSelectUser(user.id)}
        style={{
          backgroundColor: '#1e7898',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          margin: ' 1em .5em 0 0',
        }}
      >
        View Details
      </button>
      <button
        onClick={() => toggleFreeze(user.id)}
        style={{
          backgroundColor: user.frozen ? '#28a745' : '#dc3545',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: ' 1em',
        }}
      >
        {user.frozen ? 'Unfreeze Account' : 'Freeze Account'}
      </button>
    </div>
  ));

  return (
    <div style={{ position: 'relative' }}>
      <h1
        style={{
          backgroundColor: 'rgb(37, 130, 160, .5)',
          padding: '.9em 2em',
        }}
      >
        Client Management Dashboard
      </h1>
      <div
        className="client_management_board"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1em',
          justifyContent: 'center',
          maxWidth: showDetail ? '68%' : '100%', // Initially 100%, changes to 68% when detail box is shown
          transition: 'max-width 0.3s ease',
        }}
      >
        {renderUserList()}
      </div>
      {showDetail && selectedUser && (
        <div
          className="detail_dialoug_box"
          style={{
            position: 'absolute',
            top: '5em',
            right: '1em',
            padding: '1em',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: 'rgb(37, 130, 160, .15)',
            minWidth: '30%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h2 style={{}}>User Details</h2>
            <span
              className="close-icon"
              onClick={closeDialog} // Close dialog on click
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.25em',
                fontWeight: '800',
                cursor: 'pointer',
                border: '1px solid rgb(125, 125, 125, 0.2)',
                borderRadius: '50%',
              }}
            >
              x
            </span>
          </div>
          <p>
            <strong>Username:</strong> {selectedUser.username}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Address:</strong> {selectedUser.address}
          </p>
          <p>
            <strong>Contact:</strong> {selectedUser.contact}
          </p>
          <p>
            <strong>Date of Birth:</strong> {selectedUser.dob}
          </p>
          <p>
            <strong>Status:</strong> {selectedUser.frozen ? 'Frozen' : 'Active'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
