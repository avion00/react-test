import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl, FormattedMessage } from 'react-intl';
import './style.css';
import ActiveUser from './ActiveUser';
import BotDeployed from './BotDeployed';
import RecentActivities from './RecentActivities';
import Graph from './Graph';
import Table from './Tables';
import Charts from './Charts';

function AdminDashboard(props) {
  const title = brand.name + ' - Bot page';
  const description = brand.desc;
  const { intl } = props;
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
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          padding: '.75em 1em',
          backgroundColor: '#0f3c4c',
          color: '#fff',
          margin: '0 .6em',
        }}>Dashboard Overview</h2>
        <div
          style={{
            display: 'flex',
            height: '100%',
            flexWrap: 'wrap',
            gap: '2.5em 1em',
            boxSizing: 'border-box',
            padding: '1em'
          }}
        >
          <ActiveUser/>
          <BotDeployed/>
          <RecentActivities/>
          <Charts/>
          <Graph/>
          <Table/>
        </div>
      </div>
    </div>
  );
}

AdminDashboard.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(AdminDashboard);
