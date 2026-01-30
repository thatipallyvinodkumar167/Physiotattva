import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00796b',      // Brand Teal (MAIN)
            light: '#83C5BE',
            dark: '#004A52',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#E0F2F1',      // Soft mint instead of pink (more medical)
            light: '#F1FAF9',
            dark: '#4DB6AC',
            contrastText: '#004A52',
        },
        background: {
            default: '#EDF6F9',
            paper: '#ffffff',
        },
        text: {
            primary: '#2D3748',
            secondary: '#4A5568',
        },
    },

    typography: {
        fontFamily: '"Poppins", "Inter", "Roboto", "Arial", sans-serif',

        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #00796b 30%, #4db6ac 90%)',
                    boxShadow: '0 6px 16px rgba(0,121,107,0.3)',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    borderRadius: 16,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.06)',
                },
            },
        },
    },
});

export default theme;
