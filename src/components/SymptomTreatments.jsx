import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const symptoms = [
    {
        title: 'Back Pain',
        description: 'Relieve chronic or acute back pain with our specialized therapies.',
        image: '/images/back-pain.png'

    },
    {
        title: 'Neck Pain',
        description: 'Effective treatments for stiff necks and cervical spondylosis.',
        image: '/images/neck-pain.png',
    },
    {
        title: 'Knee Pain',
        description: 'Recover from joint pain and improve mobility with exercises.',
        image: '/images/knee-pain.png',
    },
    {
        title: 'Sports Injuries',
        description: 'Quick recovery plans for athletes and active individuals.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    },
];

const SymptomTreatments = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                            OUR SPECIALIZATIONS
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, fontWeight: 800 }}>
                            Treatment <Typography component="span" variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>By Symptoms</Typography>
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                            Identify your symptoms and find the right treatment plan tailored just for you.
                            Our experts specialize in a wide range of conditions.
                        </Typography>
                    </motion.div>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        pb: 4,
                        overflowX: 'auto',
                        px: { xs: 2, md: 0 },
                        mx: { xs: -2, md: 0 },
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,121,107,0.2)',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {symptoms.map((symptom, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: { xs: '280px', sm: '300px', md: 'calc(25% - 24px)' },
                                flexShrink: 0,
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            '& .MuiCardMedia-root': {
                                                transform: 'scale(1.1)',
                                            }
                                        }
                                    }}
                                >
                                    <Box sx={{ overflow: 'hidden', height: 200 }}>
                                        <CardMedia
                                            component="img"
                                            image={symptom.image}
                                            alt={symptom.title}
                                            sx={{
                                                height: '100%',
                                                transition: 'transform 0.6s ease'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography gutterBottom variant="h5" sx={{ fontWeight: 700 }}>
                                            {symptom.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                            {symptom.description}
                                        </Typography>
                                        <Button
                                            component={RouterLink}
                                            to="/symptoms"
                                            variant="text"
                                            color="primary"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{ p: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.dark' } }}
                                        >
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Button
                        component={RouterLink}
                        to="/symptoms"
                        variant="outlined"
                        size="large"
                        sx={{
                            borderRadius: 30,
                            borderWidth: 2,
                            '&:hover': { borderWidth: 2 }
                        }}
                    >
                        View All Symptoms
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SymptomTreatments;
