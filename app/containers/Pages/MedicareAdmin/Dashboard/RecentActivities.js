import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const RecentActivities = () => (
  <List
    sx={{
      height: '328px',
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '350px',
      flexGrow: 1,
      padding: 0,
    }}
  >
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 130, 160, .5)',
        fontWeight: '800',
      }}>
      <div style={{
        fontWeight: '600',
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.125em',
        padding: '.75em 1em'
      }}>Recent Activities</div>
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 150, 190, .15)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 150, 190, .15)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{
                color: 'text.primary',
                display: 'inline'
              }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 150, 190, .15)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 150, 190, .15)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(37, 150, 190, .15)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
  </List>
);

export default RecentActivities;
