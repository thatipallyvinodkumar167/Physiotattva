import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const treatments = [
    {
        title: 'Manual Therapy',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
        duration: '45-60 min',
        description: 'Hands-on techniques including massage, joint mobilization, and manipulation to reduce pain and improve mobility.',
        benefits: ['Pain relief', 'Improved range of motion', 'Muscle relaxation', 'Better circulation'],
    },
    {
        title: 'Electrotherapy',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
        duration: '20-30 min',
        description: 'Advanced electrical stimulation techniques including TENS, ultrasound, and interferential therapy for pain management.',
        benefits: ['Pain reduction', 'Muscle stimulation', 'Tissue healing', 'Inflammation control'],
    },
    {
        title: 'Exercise Therapy',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
        duration: '45-60 min',
        description: 'Customized exercise programs designed to strengthen muscles, improve flexibility, and enhance functional capacity.',
        benefits: ['Strength building', 'Flexibility', 'Balance improvement', 'Endurance'],
    },
    {
        title: 'Dry Needling',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
        duration: '30-45 min',
        description: 'Targeted insertion of thin needles into trigger points to release muscle tension and alleviate chronic pain.',
        benefits: ['Trigger point release', 'Muscle relaxation', 'Pain relief', 'Improved mobility'],
    },
    {
        title: 'Hydrotherapy',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
        duration: '45-60 min',
        description: 'Water-based exercises and treatments that reduce joint stress while improving strength and mobility.',
        benefits: ['Low-impact exercise', 'Joint relief', 'Muscle relaxation', 'Cardiovascular health'],
    },
    {
        title: 'Spinal Decompression',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
        duration: '30-45 min',
        description: 'Non-surgical treatment that gently stretches the spine to relieve pressure on discs and nerves.',
        benefits: ['Disc pressure relief', 'Nerve decompression', 'Posture improvement', 'Back pain relief'],
    },
    {
        title: 'Cupping Therapy',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
        duration: '20-30 min',
        description: 'Ancient technique using suction cups to increase blood flow, reduce inflammation, and promote healing.',
        benefits: ['Blood circulation', 'Toxin removal', 'Muscle recovery', 'Pain relief'],
    },
    {
        title: 'Kinesio Taping',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        duration: '15-20 min',
        description: 'Elastic therapeutic tape applied to support muscles and joints while allowing full range of motion.',
        benefits: ['Joint support', 'Pain reduction', 'Swelling control', 'Muscle support'],
    },
];

const TreatmentsPage = () => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Banner */}
            <Box
                sx={{
                    marginTop: 10,
                    py: 12,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        Our Treatments
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Evidence-based therapies delivered by certified professionals
                    </Typography>
                </Container>
            </Box>

            {/* Treatments Grid */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {treatments.map((treatment, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index} display="flex" justifyContent="center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                >
                                    <Card
                                        sx={{
                                            maxWidth: 360,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: `0 20px 50px ${theme.palette.primary.main}25`,
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={treatment.image}
                                            alt={treatment.title}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {treatment.title}
                                                </Typography>
                                                <Chip
                                                    label={treatment.duration}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: `${theme.palette.primary.main}15`,
                                                        color: 'primary.main',
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            </Box>

                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {treatment.description}
                                            </Typography>

                                            <Box sx={{ mb: 2 }}>
                                                {treatment.benefits.map((benefit, i) => (
                                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                        <CheckCircleOutlineIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                                                        <Typography variant="caption" color="text.secondary">
                                                            {benefit}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Button
                                                variant="outlined"
                                                size="small"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{ mt: 'auto', borderRadius: 2 }}
                                            >
                                                Learn More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Process Section */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 2 }}>
                        Our Treatment Process
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
                        A systematic approach to ensure the best outcomes for every patient
                    </Typography>

                    <Grid container spacing={4}>
                        {[
                            { step: '01', title: 'Assessment', desc: 'Comprehensive evaluation of your condition, medical history, and goals.' },
                            { step: '02', title: 'Diagnosis', desc: 'Accurate identification of the root cause of your symptoms.' },
                            { step: '03', title: 'Treatment Plan', desc: 'Personalized therapy program tailored to your specific needs.' },
                            { step: '04', title: 'Recovery', desc: 'Ongoing care and follow-up to ensure lasting results.' },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 800,
                                            color: `${theme.palette.primary.main}20`,
                                            mb: 2,
                                        }}
                                    >
                                        {item.step}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box
                sx={{
                    py: 8,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    color: 'white',
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                        Start Your Treatment Today
                    </Typography>
                    <Typography sx={{ mb: 4, opacity: 0.9 }}>
                        Our specialists are ready to help you on your path to recovery.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                        }}
                    >
                        Book Consultation
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default TreatmentsPage;
