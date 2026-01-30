import React from 'react';
import { Box, Container, Typography, Button, useTheme, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e0f2f1 100%)`,
                pt: { xs: 12, md: 0 },
            }}
        >
            {/* Decorative Elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: 900,
                    mx: 'auto'
                }}>
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        {/* Trust Badge */}
                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>

                            <Typography variant="subtitle2" fontWeight={600} color="text.secondary">

                            </Typography>
                        </Stack>

                        <Typography
                            variant="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-2px',
                                fontSize: { xs: '3.5rem', md: '5.5rem' },
                                color: 'text.primary',
                                mb: 3
                            }}
                        >
                            Reclaim Your <br />
                            <Box component="span" sx={{
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Movement & Life
                            </Box>
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.secondary',
                                mb: 5,
                                maxWidth: 650,
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontSize: '1.2rem',
                            }}
                        >
                            Experience world-class physiotherapy with a personal touch. Our expert team uses
                            advanced techniques to help you recover faster and move without pain.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    px: 5,
                                    py: 2.2,
                                    borderRadius: '16px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: `0 20px 40px ${theme.palette.primary.main}44`,
                                    '&:hover': {
                                        boxShadow: `0 25px 50px ${theme.palette.primary.main}66`,
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                Book Free Consultation
                            </Button>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'translateX(5px)'
                                }
                            }}>
                                <Box sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    bgcolor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    <PlayArrowIcon color="primary" />
                                </Box>
                                <Typography fontWeight={700}>Watch Story</Typography>
                            </Box>
                        </Box>

                        {/* Active Users */}
                        <Box sx={{ mt: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <Box sx={{ display: 'flex', '& > *': { ml: -1.5, '&:first-child': { ml: 0 } } }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <Avatar
                                        key={i}
                                        src={`https://i.pravatar.cc/150?u=${i}`}
                                        sx={{ width: 45, height: 45, border: '3px solid white' }}
                                    />
                                ))}
                            </Box>
                            <Typography variant="body2" color="primary.main" fontWeight={500} textAlign="left">
                                Join 500+ people <br />
                                recovering this week
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
