import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import Navbar from './Navbar';
import ProfileCard from './Profile';
import Botassign from './Bot_assign';
import Account from './Account';
function ClientManagement(props) {
  const title = brand.name + ' - Client Management';
  const description = brand.desc;
  const { intl } = props;
  const [activeTab, setActiveTab] = useState('Edit Profile');
  const renderContent = () => {
    switch (activeTab) {
      case 'Edit Profile':
        return <ProfileCard />;
      case 'Assign Bot':
        return <Botassign />;
      case 'Account':
        return <Account/>;
      default:
        return null;
    }
  };
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div>
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '.75em 1em',
            backgroundColor: '#0f3c4c',
            color: '#fff',
            margin: '0 .6em',
          }}>Client Management</h2>
        </div>
        <div style={{
          padding: '1em'
        }}>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
ClientManagement.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(ClientManagement);
