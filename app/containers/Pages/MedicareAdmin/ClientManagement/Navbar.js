import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="clientNavbar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%',
      textAlign: 'center',
      borderRadius: '.25em',
      overflow: 'hidden',
      marginBottom: '2em',
      gap: '.25em',
    }}>
      <div
        className={`nav-button ${activeTab === 'Edit Profile' ? 'active' : ''}`}
        onClick={() => handleTabClick('Edit Profile')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Edit Profile
      </div>
      <div
        className={`nav-button ${activeTab === 'Assign Bot' ? 'active' : ''}`}
        onClick={() => handleTabClick('Assign Bot')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Assign Bot
      </div>
      <div
        className={`nav-button ${activeTab === 'Account' ? 'active' : ''}`}
        onClick={() => handleTabClick('Account')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Account
      </div>
    </div>
  );
};

Navbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Navbar;
