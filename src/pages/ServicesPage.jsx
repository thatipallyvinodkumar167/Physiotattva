import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import ElderlyIcon from '@mui/icons-material/Elderly';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import HealingIcon from '@mui/icons-material/Healing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const servicesList = [
    {
        title: 'Musculoskeletal Physiotherapy',
        icon: <FitnessCenterIcon fontSize="large" />,
        desc: 'Treatment for back pain, neck pain, joint issues, and muscular disorders.',
        details: [
            'Chronic back and neck pain management',
            'Joint mobilization techniques',
            'Posture correction programs',
            'Manual therapy sessions',
        ],
    },
    {
        title: 'Sports Rehabilitation',
        icon: <SportsKabaddiIcon fontSize="large" />,
        desc: 'Recover faster from sports injuries and optimize athletic performance.',
        details: [
            'Injury prevention programs',
            'ACL and ligament rehab',
            'Performance enhancement training',
            'Return-to-sport protocols',
        ],
    },
    {
        title: 'Post-Surgery Rehabilitation',
        icon: <HealingIcon fontSize="large" />,
        desc: 'Comprehensive care after orthopaedic surgeries for optimal recovery.',
        details: [
            'Joint replacement rehab',
            'Spinal surgery recovery',
            'Fracture rehabilitation',
            'Scar tissue management',
        ],
    },
    {
        title: 'Neurological Physiotherapy',
        icon: <AccessibilityNewIcon fontSize="large" />,
        desc: 'Expert care for stroke, Parkinsons, and spinal cord injuries.',
        details: [
            'Stroke recovery programs',
            'Balance and coordination training',
            'Gait retraining',
            'Functional mobility exercises',
        ],
    },
    {
        title: 'Geriatric Care',
        icon: <ElderlyIcon fontSize="large" />,
        desc: 'Improving mobility, strength, and quality of life for seniors.',
        details: [
            'Fall prevention programs',
            'Arthritis management',
            'Strength and flexibility training',
            'Home safety assessments',
        ],
    },
    {
        title: 'Pediatric Physiotherapy',
        icon: <BabyChangingStationIcon fontSize="large" />,
        desc: 'Specialized care for children with developmental delays or injuries.',
        details: [
            'Developmental milestone support',
            'Cerebral palsy management',
            'Torticollis treatment',
            'Coordination and motor skill development',
        ],
    },
];

const faqs = [
    {
        q: 'How long does a typical session last?',
        a: 'Most sessions last 45-60 minutes, depending on the treatment plan.',
    },
    {
        q: 'Do I need a doctors referral?',
        a: 'No referral is needed. You can book directly with our specialists.',
    },
    {
        q: 'Is physiotherapy covered by insurance?',
        a: 'Yes, most health insurance plans cover physiotherapy. We can assist with claims.',
    },
    {
        q: 'How many sessions will I need?',
        a: 'This varies by condition. After assessment, we will provide a personalized plan.',
    },
];

const ServicesPage = () => {
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
                        Our Services
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Comprehensive physiotherapy solutions tailored to your unique needs
                    </Typography>
                </Container>
            </Box>

            {/* Services Grid */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="center">
                        {servicesList.map((service, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index} display="flex" justifyContent="center">
                                <motion.div whileHover={{ y: -6 }}>
                                    <Card
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '100%',
                                            p: 3,
                                            borderRadius: 4,
                                            transition: 'all 0.3s ease',
                                            maxWidth: 320, // limit width
                                            width: '100%',
                                            '&:hover': {
                                                boxShadow: `0 16px 40px ${theme.palette.primary.main}22`,
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    width: 64,
                                                    height: 64,
                                                    borderRadius: 3,
                                                    bgcolor: `${theme.palette.primary.main}15`,
                                                    color: 'primary.main',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 2,
                                                }}
                                            >
                                                {service.icon}
                                            </Box>

                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                                {service.title}
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {service.desc}
                                            </Typography>

                                            <Box>
                                                {service.details.map((item, i) => (
                                                    <Box
                                                        key={i}
                                                        sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                                                    >
                                                        <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                                                        <Typography variant="body2">{item}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>


            {/* FAQ Section */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6 }}>
                        Frequently Asked Questions
                    </Typography>

                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            sx={{
                                mb: 2,
                                borderRadius: 2,
                                '&:before': { display: 'none' },
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary">{faq.a}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
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
                        Ready to Get Started?
                    </Typography>
                    <Typography sx={{ mb: 4, opacity: 0.9 }}>
                        Book your first appointment today and start your journey to recovery.
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
                        Book Appointment
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default ServicesPage;
