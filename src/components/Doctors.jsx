import React from 'react';
import { Box, Container, Typography, Grid, Avatar, useTheme } from '@mui/material';

const doctors = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'Senior Physiotherapist',
        img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400'
    },
    {
        name: 'Dr. Mark Smith',
        role: 'Sports Rehab Specialist',
        img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
    },
    {
        name: 'Dr. Emily Chen',
        role: 'Pediatric Specialist',
        img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400'
    },
    {
        name: 'Dr. James Wilson',
        role: 'Chiropractor',
        img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400'
    },
];

const Doctors = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 15, bgcolor: '#ffffff' }}>
            <Container maxWidth="xl">

                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography
                        variant="overline"
                        color="primary"
                        sx={{ letterSpacing: 3, fontWeight: 800 }}
                    >
                        OUR EXPERTS
                    </Typography>

                    <Typography variant="h2" sx={{ fontWeight: 800, mt: 2, mb: 3 }}>
                        Meet Our Specialists
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
                        A team of dedicated professionals committed to your recovery journey
                        using the latest medical insights and compassionate care.
                    </Typography>
                </Box>

                <Grid container spacing={5} justifyContent="center">
                    {doctors.map((doc, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                    p: 4,
                                    borderRadius: 10,
                                    bgcolor: '#F8FAFC',
                                    border: '1px solid rgba(0, 91, 140, 0.05)',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        bgcolor: 'white',
                                        boxShadow: '0 30px 60px rgba(0, 91, 140, 0.1)',
                                        borderColor: 'primary.light',
                                        '& .doctor-avatar': {
                                            boxShadow: `0 0 0 10px ${theme.palette.primary.main}22`,
                                            transform: 'scale(1.05)'
                                        },
                                        '& .social-links': {
                                            opacity: 1,
                                            transform: 'translateY(0)'
                                        }
                                    }
                                }}
                            >
                                <Avatar
                                    className="doctor-avatar"
                                    src={doc.img}
                                    alt={doc.name}
                                    sx={{
                                        width: 160,
                                        height: 160,
                                        mx: 'auto',
                                        mb: 4,
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        border: '6px solid white',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                />

                                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
                                    {doc.name}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: 1.5,
                                        mb: 3
                                    }}
                                >
                                    {doc.role}
                                </Typography>

                                <Box
                                    className="social-links"
                                    sx={{
                                        mt: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 2,
                                        opacity: 0.6,
                                        transform: 'translateY(5px)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {/* Mock social icons using colored dots for now or leave as empty box for spacing */}
                                    {[1, 2, 3].map((i) => (
                                        <Box key={i} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.light' }} />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};

export default Doctors;
