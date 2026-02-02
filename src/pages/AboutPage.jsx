import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Avatar,
    Paper,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';

const stats = [
    { icon: <GroupsIcon fontSize="large" />, value: '10,000+', label: 'Happy Patients' },
    { icon: <LocalHospitalIcon fontSize="large" />, value: '15+', label: 'Years Experience' },
    { icon: <EmojiEventsIcon fontSize="large" />, value: '50+', label: 'Expert Doctors' },
    { icon: <VerifiedIcon fontSize="large" />, value: '98%', label: 'Success Rate' },
];

const teamMembers = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'Founder & Chief Physiotherapist',
        img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
    },
    {
        name: 'Dr. Mark Smith',
        role: 'Sports Rehabilitation Head',
        img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300',
    },
    {
        name: 'Dr. Emily Chen',
        role: 'Pediatric Specialist',
        img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300',
    },
    {
        name: 'Dr. James Wilson',
        role: 'Neurological Rehab Expert',
        img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300',
    },
];

const values = [
    {
        title: 'Patient-Centered Care',
        desc: 'Every treatment plan is customized to meet your unique needs and goals.',
    },
    {
        title: 'Evidence-Based Practice',
        desc: 'We use the latest research and proven techniques for optimal outcomes.',
    },
    {
        title: 'Compassionate Service',
        desc: 'We treat every patient with empathy, respect, and genuine care.',
    },
    {
        title: 'Continuous Innovation',
        desc: 'We invest in advanced technology and ongoing training for our team.',
    },
];

const AboutPage = () => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Banner */}
            <Box
                sx={{
                    mt: { xs: 8, md: 10 },
                    py: { xs: 8, md: 10 },
                    background: `radial-gradient(circle at top left, ${theme.palette.secondary.main}22 0, transparent 50%), linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 55%, #003150 100%)`,
                    color: 'white',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="overline"
                                sx={{ letterSpacing: 3, fontWeight: 700, opacity: 0.9 }}
                            >
                                ABOUT US
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1 }}
                            >
                                Restoring movement.
                                <br />
                                Rebuilding confidence.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ opacity: 0.9, maxWidth: 600, lineHeight: 1.7 }}
                            >
                                Sri Sai Priya Physiotherapy is a Bangalore-based rehab centre
                                focused on evidence-based treatments, personalised care, and
                                measurable outcomes for every patient who walks through our doors.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    component="img"
                                    src="/images/bangalore-clinic.png"
                                    alt="Sri Sai Priya Physiotherapy clinic"
                                    sx={{
                                        width: '100%',
                                        borderRadius: 4,
                                        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
                                        border: '4px solid rgba(255,255,255,0.7)',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Our Story */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
                                    alt="Our Clinic"
                                    sx={{
                                        width: '100%',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                                    }}
                                />
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
                            >
                                OUR STORY
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                                A Legacy of Healing Excellence
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Founded in 2010, Physiotattva began with a simple mission: to provide
                                accessible, high-quality physiotherapy care to our community. What started
                                as a small clinic has grown into a trusted healthcare institution.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Today, we're proud to have helped over 10,000 patients recover from
                                injuries, manage chronic conditions, and improve their quality of life.
                                Our team of 50+ specialists uses cutting-edge technology combined with
                                compassionate care to deliver exceptional results.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats */}
            <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Paper
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 4,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 12px 30px ${theme.palette.primary.main}22`,
                                        },
                                    }}
                                >
                                    <Box sx={{ color: 'primary.main', mb: 2 }}>{stat.icon}</Box>
                                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {stat.label}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Our Values */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6 }}>
                        Our Core Values
                    </Typography>

                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 4,
                                        border: `1px solid ${theme.palette.primary.main}33`,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            bgcolor: `${theme.palette.primary.main}08`,
                                        },
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: 'primary.main' }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {value.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Leadership Team */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6 }}>
                        Meet Our Leadership
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar
                                        src={member.img}
                                        alt={member.name}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            mx: 'auto',
                                            mb: 2,
                                            border: `4px solid ${theme.palette.primary.main}`,
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="primary.main">
                                        {member.role}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;
