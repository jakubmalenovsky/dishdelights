// theme.js
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
             // Light gray
                },
                },
                typography: {
                fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
                h1: {
                    fontSize: '2.25rem',
                    fontWeight: 600,
                },
                h2: {
                    fontSize: '1.5rem',
                    fontWeight: 600,
                },
                h3: {
                    fontSize: '1.25rem',
                    fontWeight: 600,
                },
                h4: {
                    fontSize: '1.125rem',
                    fontWeight: 600,
                },
                h5: {
                    fontSize: '1rem',
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
                        borderRadius: '50px', // Fully rounded
                        padding: '10px 15px',
                        backgroundColor: '#FF6F00',
                        color: '#FFFFFF', // White text
                        '&:hover': {
                        backgroundColor: '#000000', // Black on hover
                        color: '#FFFFFF', // White text on hover
                        },
                    },
                    },
                },
                MuiTextField: {
                    styleOverrides: {
                    root: {
                        marginBottom: '15px',
                        borderRadius: '50px', // Rounded corners
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '50px', // Rounded corners for all paper-based components
                    boxShadow: 'none', // Remove shadows
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    textAlign: 'left', // Align text to the left
                },
            },
        },
    },
    // Add global styles
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F5F5F5',
                },
            },
        },
    },
});

export default theme;
