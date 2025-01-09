import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          textTransform: 'none',
        },
        outlined: {
          borderColor: '#1976d2',
        },
        text: {
          padding: '8px',
        },
      },
    },
  },
});

export default theme;
