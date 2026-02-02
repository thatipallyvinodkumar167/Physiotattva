import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link as RouterLink} from "react-router-dom"

const WhoWeAre = () => {
    const stats = [
        { icon: <GroupsIcon sx={{ fontSize: 40 }} />, label: '10,000+', sublabel: 'Happy Patients' },
        { icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />, label: '15+', sublabel: 'Specialized Treatments' },
        { icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />, label: '10+', sublabel: 'Years of Excellence' },
    ];

    return (
        <Box sx={{ py: 10, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
            {/* Background Shapes */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(0,121,107,0.05) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                                ABOUT SRI SAI PRIYA PHYSIOTHERAPY
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 2, mb: 3, fontWeight: 800 }}>
                                We Are Dedicated To Your <Typography component="span" variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>Mobility & Wellness</Typography>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                                At Sri Sai Priya Physiotherapy, we believe that movement is life. Our team of expert physiotherapists
                                is committed to providing personalized, evidence-based care to help you recover
                                faster and live a pain-free life. Whether you're recovering from surgery,
                                managing a chronic condition, or looking to improve your athletic performance,
                                we're here to guide you every step of the way.
                            </Typography>
                           

<Button
  component={RouterLink}
  to="/about"
  variant="contained"
  size="large"
  sx={{
    borderRadius: 30,
    px: 4,
    py: 1.5,
    fontSize: "1rem",
    textTransform: "none",
  }}
>
  Learn More About Us
</Button>

                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            {stats.map((stat, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 4,
                                                textAlign: 'center',
                                                borderRadius: 4,
                                                bgcolor: 'secondary.light',
                                                border: '1px solid',
                                                borderColor: 'secondary.main',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-10px)',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mb: 2 }}>
                                                {stat.icon}
                                            </Box>
                                            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                                                {stat.label}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                                {stat.sublabel}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                            <Grid item xs={12} sm={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            borderRadius: 4,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: '0 10px 30px rgba(0,121,107,0.2)'
                                            }
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                            Expert Care
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                            Certified Professional Therapists
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhoWeAre;
