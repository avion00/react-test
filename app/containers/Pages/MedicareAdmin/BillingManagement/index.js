import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import { ResponsivePie } from '@nivo/pie'; // Import Nivo Pie
import Plans from './plans.json';
import './style.css';

const KPIData = [
  {
    id: 'Successful Interactions', label: 'Successful Interactions', value: 85, color: 'hsl(205, 70%, 50%)'
  },
  {
    id: 'Failed Interactions', label: 'Failed Interactions', value: 15, color: 'hsl(340, 70%, 50%)'
  },
];

function BillingManagement(props) {
  const title = `${brand.name} - Billing Management`;
  const description = brand.desc;
  const [plans, setPlans] = useState(Plans);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [planName, setPlanName] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [planStatus, setPlanStatus] = useState('Active');

  const openModal = (index = -1) => {
    if (index >= 0) {
      const plan = plans[index];
      setEditingIndex(index);
      setPlanName(plan.name);
      setPlanPrice(plan.price);
      setPlanStatus(plan.status);
    } else {
      setEditingIndex(-1);
      setPlanName('');
      setPlanPrice('');
      setPlanStatus('Active');
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const savePlan = () => {
    if (editingIndex >= 0) {
      const updatedPlans = [...plans];
      updatedPlans[editingIndex] = { name: planName, price: parseFloat(planPrice), status: planStatus };
      setPlans(updatedPlans);
    } else {
      const newPlan = { name: planName, price: parseFloat(planPrice), status: planStatus };
      setPlans([...plans, newPlan]);
    }
    closeModal();
  };

  const deletePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
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
      <div className="container_billing">
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '.75em 1em',
            backgroundColor: '#0f3c4c',
            color: '#fff',
            margin: '0 .6em',
          }}>Billing Management</h2>
        </div>
        <div className="main-content">
          <section id="subscription-plans" className="dashboard-section">
            <div className="plan-management">
              <button id="create-plan" onClick={() => openModal()}>Create New Plan</button>
              <table className="plan-table" id="plan-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Plan Name</th>
                    <th style={{ width: '25%' }}>Price</th>
                    <th style={{ width: '25%' }}>Status</th>
                    <th style={{ width: '25%' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => (
                    <tr key={index}>
                      <td>{plan.name}</td>
                      <td>${plan.price.toFixed(2)}</td>
                      <td>{plan.status}</td>
                      <td className='tableBtn'>
                        <button onClick={() => openModal(index)}>Edit</button>
                        <button className='del' onClick={() => deletePlan(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="kpi" className="dashboard-section">
            <h2 style={{
              fontSize: '1em',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              marginTop: '2em'
            }}>Key Performance Indicators (KPIs)</h2>
            <div className="kpi-metrics">
              <div className="kpi-item" style={{
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '1em',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  margin: '0'
                }}>Interaction Success Rate</h3>
                <ResponsivePie
                  data={KPIData}
                  margin={{
                    top: 20, right: 20, bottom: 20, left: 20
                  }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: 'nivo' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  enableArcLinkLabels={false}
                  enableArcLabels={true}
                  arcLabelsTextColor="inherif"
                  arcLabelsRadiusOffset={0.4}
                  arcLabelsSkipAngle={10}
                />
              </div>
              <div className="kpi-item" style={{
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '1em',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  margin: '0'
                }}>Total Payments Processed</h3>
                <p id="total-payments" style={{
                  alignContent: 'center',
                  alignItems: 'center'
                }}>$12,300</p>
              </div>
            </div>
          </section>
        </div>

        {modalVisible && (
          <div id="plan-modal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 id="modal-title">{editingIndex >= 0 ? 'Edit Plan' : 'Create New Plan'}</h2>
              <div className='input_div'>
                <input
                  type="text"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  placeholder="Plan Name"
                  required
                />
                <input
                  type="number"
                  value={planPrice}
                  onChange={(e) => setPlanPrice(e.target.value)}
                  placeholder="Price"
                  required
                />
                <select value={planStatus} onChange={(e) => setPlanStatus(e.target.value)}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button className='save_plan' onClick={savePlan}>Save Plan</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

BillingManagement.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(BillingManagement);
