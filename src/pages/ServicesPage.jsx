import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import ElderlyIcon from '@mui/icons-material/Elderly';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import HealingIcon from '@mui/icons-material/Healing';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Services list
const servicesList = [
    { title: 'Musculoskeletal Physio', icon: <FitnessCenterIcon />, desc: 'Relieve pain and restore function for back, neck, and joint conditions with personalized therapy.', slug: 'musculoskeletal-physio' },
    { title: 'Sports Rehabilitation', icon: <SportsKabaddiIcon />, desc: 'Targeted recovery plans for athletes to regain strength and return to peak performance.', slug: 'sports-rehabilitation' },
    { title: 'Post-Surgery Rehab', icon: <HealingIcon />, desc: 'Specialized care following orthopedic procedures to ensure optimal healing and mobility.', slug: 'post-surgery-rehab' },
    { title: 'Neurological Physio', icon: <AccessibilityNewIcon />, desc: 'Advanced physical therapy for stroke, Parkinson’s, and multiple sclerosis recovery.', slug: 'neurological-physio' },
    { title: 'Geriatric Care', icon: <ElderlyIcon />, desc: 'Enhancing the quality of life for seniors through balance training and pain management.', slug: 'geriatric-care' },
    { title: 'Pediatric Physio', icon: <BabyChangingStationIcon />, desc: 'Compassionate care focused on developmental milestones and childhood conditions.', slug: 'pediatric-physio' },
    { title: 'Neuro Rehabilitation in Hyderabad', icon: <AccessibilityNewIcon />, desc: 'Comprehensive neuro rehabilitation programs to restore mobility, independence and confidence.', slug: 'neuro-rehabilitation-hyderabad' },
    { title: 'Stroke Rehabilitation Center in Hyderabad', icon: <AccessibilityNewIcon />, desc: 'Intensive, goal‑oriented stroke rehab with gait, balance and upper limb training.', slug: 'stroke-rehabilitation-center-hyderabad' },
    // ... add other services here
];

// Services component
const Services = ({ limit }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Limit the number of services if limit prop is passed
    const displayedServices = limit ? servicesList.slice(0, limit) : servicesList;

    return (
        <Box sx={{ py: 15, position: 'relative', bgcolor: '#F8FAFC' }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: 3,
                            fontWeight: 800,
                            color: 'primary.main',
                            bgcolor: `${theme.palette.primary.main}11`,
                            px: 2,
                            py: 0.5,
                            borderRadius: 1
                        }}
                    >
                        OUR SERVICES
                    </Typography>

                    <Typography variant="h2" sx={{ fontWeight: 800, mt: 2, mb: 3 }}>
                        Specialized Care for You
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        We offer a comprehensive range of physiotherapy services designed to meet
                        your unique health needs and help you return to your active lifestyle.
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {displayedServices.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        maxWidth: 380,
                                        width: '100%',
                                        mx: 'auto',
                                        position: 'relative',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: 2,
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        border: '1px solid rgba(0,0,0,0.03)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        bgcolor: 'white',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 30px 60px rgba(0,109,119,0.12)',
                                            borderColor: 'primary.light',
                                            '& .service-icon-box': {
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                transform: 'scale(1.1) rotate(5deg) translateY(-5px)',
                                                boxShadow: '0 10px 20px rgba(0, 109, 119, 0.2)',
                                            },
                                            '& .explore-btn': {
                                                color: 'primary.main',
                                                transform: 'translateX(8px)',
                                                '& svg': {
                                                    transform: 'translateX(4px)'
                                                }
                                            }
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1 }}>
                                        <Box
                                            className="service-icon-box"
                                            sx={{
                                                width: 72,
                                                height: 72,
                                                borderRadius: 4,
                                                bgcolor: `${theme.palette.primary.main}11`,
                                                color: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 4,
                                                transition: 'all 0.4s ease',
                                                '& svg': { fontSize: 36 }
                                            }}
                                        >
                                            {service.icon}
                                        </Box>

                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                                            {service.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{ mb: 4, flexGrow: 1, lineHeight: 1.7 }}
                                        >
                                            {service.desc}
                                        </Typography>

                                        <Box sx={{ mt: 'auto' }}>
                                            <Button
                                                className="explore-btn"
                                                variant="text"
                                                endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
                                                sx={{
                                                    p: 0,
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    fontWeight: 700,
                                                    color: 'text.primary',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': { bgcolor: 'transparent', color: 'primary.main' }
                                                }}
                                                onClick={() => navigate(`/services/${service.slug}`)}
                                            >
                                                Explore Details
                                            </Button>
                                        </Box>
                                    </CardContent>

                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 6,
                                        bgcolor: `${theme.palette.primary.main}22`
                                    }} />
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Explore All Button (only on Home page) */}
                {limit && (
                    <Box sx={{ textAlign: 'center', mt: 10 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: '12px',
                                px: 6,
                                py: 1.8,
                                boxShadow: 'none',
                                bgcolor: 'text.primary',
                                '&:hover': { bgcolor: 'primary.dark' }
                            }}
                            onClick={() => navigate('/services')}
                        >
                            Explore All Treatments
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default Services;
