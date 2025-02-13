import "@fontsource/rubik";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6F00',  // Orange
        },
        secondary: {
            main: '#000000',  // Black
        },
        error: {
            main: '#dc3545',  // Red
        },
        background: {
            default: '#F5F5F5', // Light gray background
        },
    },
    typography: {
        fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
        h1: { 
            fontSize: '3.5rem', 
            fontWeight: 600,
            '@media (max-width:600px)': {
                fontSize: '2.5rem', // Smaller font size for phones
            },
        },
        h2: { fontSize: '1.5rem', fontWeight: 600 },
        h3: { fontSize: '1.25rem', fontWeight: 600 },
        h4: { fontSize: '1.125rem', fontWeight: 600 },
        h5: { fontSize: '1rem', fontWeight: 600 },
        body1: { fontSize: '1rem' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Prevent uppercase text
                    borderRadius: '50px', // Fully rounded
                    padding: '10px 15px',
                    backgroundColor: '#FF6F00',
                    color: '#FFFFFF', // White text
                    '&:hover': {
                        backgroundColor: '#000000', // Black on hover
                        color: '#FFFFFF',
                    },
                    boxShadow: 'none', // Remove button shadow
                    border: 'none', // Remove button border
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '15px',
                    borderRadius: '50px', // Rounded corners
                    boxShadow: 'none', // Remove text field shadow
                    border: 'none', // Remove text field border
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '10px', // Rounded corners for all paper-based components
                    boxShadow: 'none', // Remove shadows
                    border: 'none', // Remove borders
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    textAlign: 'left', // Align text to the left
                    boxShadow: 'none', // Remove container shadow
                    border: 'none', // Remove container border
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none', // Remove card shadow
                    border: 'none', // Remove card border
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F5F5F5',
                    boxShadow: 'none',
                    border: 'none',
                },
            },
        },
    },
});

export default theme;
