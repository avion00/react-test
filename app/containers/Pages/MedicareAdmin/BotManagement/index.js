import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import useStyles from 'enl-components/Tables/tableStyle-jss';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import botsData from './bots.json';
import './style.css';

const ClientManagement = () => {
  const title = brand.name + ' - Client Management';
  const description = brand.desc;

  const [bots, setBots] = useState([]);
  const [trainingMaterials, setTrainingMaterials] = useState('');
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    setBots(botsData);
  }, []);

  const toggleBotStatus = (index) => {
    const updatedBots = [...bots];
    updatedBots[index].status = updatedBots[index].status === 'Running' ? 'Stopped' : 'Running';
    setBots(updatedBots);
  };

  const deleteBot = (index) => {
    const updatedBots = bots.filter((_, i) => i !== index);
    setBots(updatedBots);
  };

  const editBot = (index) => {
    alert(`Edit configuration for ${bots[index].id}`);
  };

  const saveTrainingMaterials = () => {
    alert('Training materials saved!');
    console.log('Training Materials:', trainingMaterials);
  };

  const { classes } = useStyles();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="client_management" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '.75em 1em',
            backgroundColor: '#0f3c4c',
            color: '#fff',
            margin: '0 .6em',
          }}>Bot Management</h2>
        </div>
        <section className="bot-overview" style={{
          padding: '1em'
        }}>
          {bots.length > 0 ? (
            <table id="bot-table" textAlign="center">
              <thead style={{ backgroundColor: 'rgb(37, 130, 160, .5)' }}>
                <tr>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Bot ID</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Status</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Success Rate</th>
                  <th style={{ width: '40%', padding: '1em 0.25em' }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'rgb(37, 130, 160, .15)' }}>
                {bots.map((bot, index) => (
                  <tr key={bot.id}>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.id}</td>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.status}</td>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.successRate}</td>
                    <td style={{
                      padding: '.5em 0.25em',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '.5em',
                      justifyContent: 'space-around',
                    }}>
                      <button
                        className="action-btn stop-btn"
                        onClick={() => toggleBotStatus(index)}
                        style={{
                          width: '100px',
                          backgroundColor: '#165a72',
                          fontSize: '.9em',
                          padding: '.75em',
                          margin: '.3em 0',
                          color: 'white',
                        }}
                      >
                        {bot.status === 'Running' ? 'Stop' : 'Run'}
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteBot(index)}
                        style={{
                          width: '100px',
                          backgroundColor: 'rgb(210,5,5, .8)',
                          color: 'white',
                          padding: '.75em',
                          margin: '.3em 0',
                          fontSize: '.9em'
                        }}>
                        Delete
                      </button>
                      <button
                        className="action-btn edit-btn" onClick={() => editBot(index)}
                        style={{
                          width: '100px',
                          backgroundColor: '#165a72',
                          color: 'white',
                          padding: '.75em',
                          margin: '.3em 0',
                          fontSize: '.9em',
                        }}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading bots...</p>
          )}
          <button
            id="refresh-btn"
            className='refresh_bots'
            onClick={() => window.location.reload()}
            style={{
              width: '220px',
              margin: '1em 0',
              backgroundColor: '#165a72',
              color: 'white'
            }}
          >
            Refresh Bots
          </button>
        </section>

        <section className="training-materials" style={{
          padding: '1em'
        }}>
          <Typography
            className={classes.title}
            style={{
              fontSize: '1.25em',
              fontWeight: 'bold',
              padding: '.75em 1em',
              backgroundColor: 'rgb(26, 105, 133, .5)',
              margin: '.75em 0',
            }}
            variant="h6"
          >
            Manage Training Materials
          </Typography>

          {/* Autocomplete with Chips for Bot Selection */}
          <Autocomplete
            multiple
            id="tags-filled"
            options={bots.map((bot) => bot.id)}
            value={selectedBots}
            onChange={(event, newValue) => setSelectedBots(newValue)}
            freeSolo
            renderTags={(value, getTagProps) => value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Bots"
                placeholder="Bots"
              />
            )}
            style={{
              // margin: '2em 0'
              marginTop: '2em',
              marginBottom: '.5em'
            }}
          />

          <textarea
            className='training_material_area'
            id="training-materials"
            value={trainingMaterials}
            onChange={(e) => setTrainingMaterials(e.target.value)}
            placeholder="Edit training materials here..."
            style={{
              width: '100%',
              borderRadius: '.25em',
            }}
          />
          <button
            className='save_training'
            id="save-training-btn"
            onClick={saveTrainingMaterials}>
            Save Training Materials
          </button>
        </section>
      </div>
    </div>
  );
};

export default ClientManagement;
