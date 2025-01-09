import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{ height: '100vh' }}
    >
      <Box
        display='flex'
        gap='1rem'
        alignItems='center'
        sx={{
          fontWeight: 'bold',
          backgroundColor: '#F5F5F5',
          color: 'black',
          padding: '24px 12px 0',
        }}
      >
        <Avatar
          alt="Steve Monite"
          src="/public/monite.jpeg"
          sx={{ width: 48, height: 48 }}
        />

        <Typography fontWeight='bold' component='h1' variant='h6'>
          Steve Monite
        </Typography>
      </Box>
      <Box>
        <List
          sx={{
            width: '300px',
            backgroundColor: '#F5F5F5',
            color: '#F7F7F7',
            flexGrow: 1,
          }}
        >
          <ListItem
            component='button'
            onClick={() => console.log('Dashboard clicked')}
            sx={{
              fontWeight: 'bold',
              backgroundColor: '#F5F5F5',
              color: '#7a7a7a',
            }}
          >
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem
            component='button'
            onClick={() => console.log('Dashboard clicked')}
            sx={{
              fontWeight: 'bold',
              backgroundColor: '#F5F5F5',
              color: '#7a7a7a',
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: 'black', fontWeight: 700 }} primary='Users' />
          </ListItem>
          <ListItem
            component="button"
            onClick={() => console.log('Dashboard clicked')}
            sx={{
              backgroundColor: '#F5F5F5',
              color: '#7a7a7a',
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
