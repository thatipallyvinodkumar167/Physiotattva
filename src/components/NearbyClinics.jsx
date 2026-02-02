import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    Button,
    Paper,
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Fade
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { findNearbyClinics } from '../services/geminiService';

const NearbyClinics = () => {
    const [loading, setLoading] = useState(false);
    const [clinics, setClinics] = useState(null);
    const [error, setError] = useState(null);

    const handleFindClinics = async () => {
        setLoading(true);
        setError(null);

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const result = await findNearbyClinics(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setClinics(result);
                } catch (err) {
                    setError("Failed to fetch nearby clinics. Please try again.");
                } finally {
                    setLoading(false);
                }
            },
            () => {
                setError("Location access denied. Please enable location permissions.");
                setLoading(false);
            }
        );
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', py: 8 }}>
            <Paper
                sx={{
                    p: { xs: 3, md: 6 },
                    borderRadius: 8,
                    textAlign: 'center',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
                    backgroundColor: '#fff',
                    border: '1px solid',
                    borderColor: 'divider'
                }}
            >
                {/* Icon */}
                <Box
                    sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        backgroundColor: 'success.light',
                        color: 'success.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                    }}
                >
                    <MapIcon fontSize="large" />
                </Box>

                {/* Title */}
                <Typography variant="h4" sx={{ fontWeight: 800, fontFamily: 'Plus Jakarta Sans', mb: 2 }}>
                    Find Local Care
                </Typography>

                {/* Description */}
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 500, mx: 'auto' }}>
                    Discover highly-rated physiotherapy centers in your neighborhood using real-time Maps data.
                </Typography>

                {/* Search Button */}
                {!clinics ? (
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        onClick={handleFindClinics}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24} color="inherit" /> : <MyLocationIcon />}
                        sx={{
                            borderRadius: 4,
                            px: 6,
                            py: 2,
                            fontWeight: 700,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 30px rgba(46, 125, 50, 0.2)'
                        }}
                    >
                        {loading ? 'Locating Specialists...' : 'Search Near Me'}
                    </Button>
                ) : (
                    <Fade in={true}>
                        <Box sx={{ textAlign: 'left', mt: 4 }}>
                            {/* Clinics Description */}
                            <Paper sx={{ p: 3, backgroundColor: '#f8fafc', borderRadius: 4, mb: 4, border: '1px solid', borderColor: 'divider' }}>
                                <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
                                    {clinics.text}
                                </Typography>
                            </Paper>

                            {/* Recommended Destinations */}
                            <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', ml: 1 }}>
                                Recommended Destinations
                            </Typography>
                            <List sx={{ mt: 1 }}>
                                {clinics.grounding.map((chunk, i) => (
                                    chunk.maps && (
                                        <React.Fragment key={i}>
                                            <ListItem disablePadding sx={{ mb: 1 }}>
                                                <ListItemButton
                                                    component="a"
                                                    href={chunk.maps.uri}
                                                    target="_blank"
                                                    sx={{
                                                        borderRadius: 3,
                                                        border: '1px solid',
                                                        borderColor: 'divider',
                                                        '&:hover': { backgroundColor: 'success.light', borderColor: 'success.main', color: 'success.contrastText' }
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                                        <MapIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={chunk.maps.title || "View on Maps"}
                                                        primaryTypographyProps={{ fontWeight: 700 }}
                                                    />
                                                    <OpenInNewIcon fontSize="small" sx={{ opacity: 0.5 }} />
                                                </ListItemButton>
                                            </ListItem>
                                        </React.Fragment>
                                    )
                                ))}
                            </List>

                            {/* Reset Button */}
                            <Button
                                onClick={() => setClinics(null)}
                                fullWidth
                                sx={{ mt: 2, color: 'text.secondary', fontWeight: 600 }}
                            >
                                Search Another Location
                            </Button>
                        </Box>
                    </Fade>
                )}

                {/* Error Message */}
                {error && (
                    <Typography color="error" sx={{ mt: 2, fontWeight: 600 }}>{error}</Typography>
                )}
            </Paper>
        </Box>
    );
};

export default NearbyClinics;
