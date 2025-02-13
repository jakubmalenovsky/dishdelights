// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff',  // Blue
        },
        secondary: {
            main: '#28a745',  // Green
        },
        error: {
            main: '#dc3545',  // Red
        },
        background: {
            default: '#f8f9fa', // Light gray
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Prevent uppercase text
                    borderRadius: 8,
                    padding: '10px 15px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '15px',
                },
            },
        },
    },
});

export default theme;
