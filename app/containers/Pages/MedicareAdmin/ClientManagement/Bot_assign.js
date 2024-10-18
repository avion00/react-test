import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from MUI
import './Botassign.css'; // Ensure this file exists
import clientImage from './client.png';

const Botassign = () => (
  <div className="botassign-container" style={{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '2em .5em',
    // padding: '.5em'
  }}>
    <div className="left-section" style={{
      height: '600px',
      overflowY: 'auto',
      width: '400px',
      flexGrow: '1',
    }}>
      <List style={{
        padding: '0', // this is for removing default top padding
      }}>
        <ListItem
          style={{
            backgroundColor: 'rgb(37, 130, 160, .5)',
            marginBottom: '.5em',
            textTransform: 'uppercase',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ListItemText><h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.15em',
            textTransform: 'capitalize',
            fontWeight: '700',
            margin: '0',
            padding: '.2em 1em'
          }}>Assign Bot To Client</h2></ListItemText>
        </ListItem>

        {[...Array(10)].map((_, index) => (
          <ListItem
            key={index}
            sx={{
              alignItems: 'center',
              marginBottom: '.5em',
              padding: '.25em 1em',
              overflow: 'hidden',
              backgroundColor: 'rgb(37, 130, 160, .15)',
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Client" src={clientImage} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              sx={{ overflow: 'hidden' }}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {' — I\'ll be in your neighborhood doing errands this…'}
                </React.Fragment>
              }
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '.5em 1.5em',
                borderRadius: '.25em',
                textTransform: 'capitalize',
                backgroundColor: '#165a72'
              }}
            >
              Assign
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
    <div className="right-section" style={{
      height: '600px',
      width: '400px',
      overflowY: 'auto',
      flexGrow: '1',
    }}>
      <List
        style={{
          padding: 0,
        }}
      >
        <ListItem
          style={{
            backgroundColor: 'rgb(37, 130, 160, .5)',
            marginBottom: '.5em',
            textTransform: 'uppercase',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ListItemText><h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.15em',
            textTransform: 'capitalize',
            fontWeight: '700',
            margin: '0',
            padding: '.2em 1em'
          }}>Details of Client Activity</h2></ListItemText>
        </ListItem>

        {[...Array(10)].map((_, index) => (
          <ListItem
            key={index}
            sx={{
              alignItems: 'center',
              marginBottom: '.5em',
              padding: '.25em 1em',
              overflow: 'hidden',
              backgroundColor: 'rgb(37, 130, 160, .15)',
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Client" src={clientImage} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              sx={{ overflow: 'hidden' }}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {' — I\'ll be in your neighborhood doing errands this…'}
                </React.Fragment>
              }
            />
            {/* Add the Assign button here as well */}
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '.5em 1.5em',
                borderRadius: '.25em',
                textTransform: 'capitalize',
                backgroundColor: '#165a72'
              }}
            >
              Details
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
);

export default Botassign;
