import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#005B8C',
            light: '#E1F5FE',
            dark: '#003C5F',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#99CC33',
            light: '#F8FAFC',
            dark: '#689F38',
            contrastText: '#003C5F',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#2D3748',
            secondary: '#4A5568',
        },
    },

    typography: {
        fontFamily: '"Intro", "Poppins", "Inter", "Roboto", "Arial", sans-serif',

        h1: { fontFamily: '"Intro", sans-serif', fontWeight: 700, fontSize: '3.5rem', lineHeight: 1.2 },
        h2: { fontFamily: '"Intro", sans-serif', fontWeight: 600, fontSize: '2.5rem' },
        h3: { fontFamily: '"Intro", sans-serif', fontWeight: 600, fontSize: '2rem' },
        h4: { fontFamily: '"Intro", sans-serif', fontWeight: 500, fontSize: '1.5rem' },
        h5: { fontFamily: '"Intro", sans-serif', fontWeight: 500, fontSize: '1.25rem' },
        h6: { fontFamily: '"Intro", sans-serif', fontWeight: 500, fontSize: '1rem' },

        body1: { fontFamily: '"Intro", sans-serif', fontWeight: 400 },
        body2: { fontFamily: '"Intro", sans-serif', fontWeight: 400 },

        button: { fontFamily: '"Intro", sans-serif', textTransform: 'none', fontWeight: 600 },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 12, padding: '10px 24px' },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #005B8C 30%, #99CC33 90%)',
                    boxShadow: '0 6px 16px rgba(0,91,140,0.2)',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: 'none', borderRadius: 16 },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: { borderRadius: 20, boxShadow: '0px 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)' },
            },
        },
    },
});

export default theme;
