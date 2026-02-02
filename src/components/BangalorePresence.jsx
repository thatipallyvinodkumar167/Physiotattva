import React from 'react';
import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const BangalorePresence = () => {
    const highlights = [
        'Advanced Rehabilitation Centers',
        'Certified Physiotherapists',
        'Personalized Treatment Plans',
        'State-of-the-Art Equipment',
        'Convenient Home Visit Services',
        'Insurance & Corporate Tie-ups',
    ];

    return (
        <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'white' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                    height: { xs: 300, md: 500 },
                                }}
                            >
                                <img
  src="/images/bangalore-clinic.png"
  alt="Physiotherapy Bangalore"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 20,
                                        right: 20,
                                        bgcolor: 'white',
                                        color: 'primary.main',
                                        px: 3,
                                        py: 1,
                                        borderRadius: 10,
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    <LocationOnIcon /> Bangalore
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" sx={{ opacity: 0.8, fontWeight: 700, letterSpacing: 2 }}>
                                TRUSTED BY THOUSANDS
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 3, fontWeight: 800 }}>
                                Premium Physiotherapy <br /> Services in Bangalore
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                                Physiotattva brings world-class physiotherapy to your doorstep in Bangalore.
                                With multiple clinics across the city and a team of highly qualified specialists,
                                we ensure you receive the best care tailored to your specific needs.
                            </Typography>

                            <Grid container spacing={2} sx={{ mb: 4 }}>
                                {highlights.map((item, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                            <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'white',
                                    borderRadius: 30,
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': {
                                        bgcolor: 'secondary.light',
                                    }
                                }}
                            >
                                Find a Clinic Near You
                            </Button>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BangalorePresence;
