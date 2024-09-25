'use client';

import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';
import '@fontsource/open-sans';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC107',
        },
        secondary: {
            main: '#212121',
        },
        background: {
            default: '#F5F5F5',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: 'Open Sans, Montserrat, sans-serif', // Default fallback
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700, // Bold
        },
        h2: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
        h5: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
        h6: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500, // Slightly less bold
        },
        body1: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400, // Regular weight
        },
        body2: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400, // Regular weight
        },
        button: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 600, // Slightly bolder for buttons
        },
    },
});

export default theme;