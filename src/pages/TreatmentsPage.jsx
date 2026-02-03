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
import { Link as RouterLink } from 'react-router-dom';

const treatments = [
    {
        title: 'Pain Management',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
        duration: '45-60 min',
        description: 'Advanced techniques for managing chronic back pain, neck pain, and joint inflammation using multidisciplinary approaches.',
        benefits: ['Long-term pain relief', 'Reduced inflammation', 'Better mobility', 'Non-invasive treatment'],
    },
    {
        title: 'Chiropractic Care',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
        duration: '30-45 min',
        description: 'Specialized spinal adjustments and decompression to correct alignment, relieve nerve pressure, and improve posture.',
        benefits: ['Spinal alignment', 'Posture correction', 'Nerve pressure relief', 'Increased flexibility'],
    },
    {
        title: 'Sports Rehab',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
        duration: '45-60 min',
        description: 'Goal-oriented rehabilitation for athletes to recover from injuries like sprains, strains, and ligament tears.',
        benefits: ['Fast recovery', 'Enhanced performance', 'Injury prevention', 'Strength building'],
    },
    {
        title: 'Post-Surgery Rehab',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
        duration: '60 min',
        description: 'Intensive rehabilitation following orthopedic surgeries like ACL reconstruction, hip replacement, or knee replacement.',
        benefits: ['Proper healing', 'Restored function', 'Scar tissue management', 'Joint stabilization'],
    },
    {
        title: 'Neuro Rehab',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
        duration: '60-90 min',
        description: 'Specialized therapy for stroke recovery, Parkinson’s disease, and other neurological conditions to regain independence.',
        benefits: ['Better balance', 'Gait training', 'Functional independence', 'Muscle coordination'],
    },
    {
        title: 'Home Physiotherapy',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
        duration: '60 min',
        description: 'Professional physiotherapy care delivered in the comfort of your home for those with limited mobility or busy schedules.',
        benefits: ['Convenient care', 'Personalized attention', 'Family involvement', 'Same-day recovery focus'],
    },
    {
        title: 'Pediatric Physical Therapy',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
        duration: '45 min',
        description: 'Compassionate care for children with developmental delays, cerebral palsy, or orthopedic conditions.',
        benefits: ['Milestone achievement', 'Improved mobility', 'Fun & engaging sessions', 'Early intervention'],
    },
    {
        title: 'Women’s Health',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        duration: '45 min',
        description: 'Specialized care for pelvic health, pre and post-natal recovery, and overall wellness for women of all ages.',
        benefits: ['Core strengthening', 'Pelvic floor health', 'Post-natal recovery', 'Pain management'],
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
                            <Grid item xs={12} sm={6} md={4} lg={4} key={index} display="flex" justifyContent="center">
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
                                            width: '100%',
                                            height: '100%',      // 🔒 equal height
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
                                            image={treatment.image}
                                            alt={treatment.title}
                                            sx={{
                                                height: 160,
                                                width: '100%',
                                                objectFit: 'cover',
                                            }}
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
                                                component={RouterLink}
                                                to="/contact"
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
                        component={RouterLink}
                        to="/book-appointment"
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: 'primary.main',
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
