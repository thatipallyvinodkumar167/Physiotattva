import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactInfo = [
    {
        icon: <LocationOnIcon fontSize="large" />,
        title: 'Visit Us',
        lines: ['123 Health Street', 'Bangalore, Karnataka 560001'],
    },
    {
        icon: <PhoneIcon fontSize="large" />,
        title: 'Call Us',
        lines: ['+91 98765 43210', '+91 80 1234 5678'],
    },
    {
        icon: <EmailIcon fontSize="large" />,
        title: 'Email Us',
        lines: ['info@physiotattva.com', 'support@physiotattva.com'],
    },
    {
        icon: <AccessTimeIcon fontSize="large" />,
        title: 'Working Hours',
        lines: ['Mon - Fri: 8AM - 8PM', 'Sat - Sun: 9AM - 5PM'],
    },
];

const ContactPage = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <Box>
            {/* Hero Banner */}
            <Box
                sx={{
                    py: 12,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Have questions? We're here to help you on your path to recovery.
                    </Typography>
                </Container>
            </Box>

            {/* Contact Info Cards */}
            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {contactInfo.map((info, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        height: '100%',
                                        borderRadius: 4,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 12px 30px ${theme.palette.primary.main}22`,
                                        },
                                    }}
                                >
                                    <Box sx={{ color: 'primary.main', mb: 2 }}>{info.icon}</Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        {info.title}
                                    </Typography>
                                    {info.lines.map((line, i) => (
                                        <Typography key={i} variant="body2" color="text.secondary">
                                            {line}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact Form & Map */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} justifyContent="center" alignItems="flex-start">
                        {/* Contact Form */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                                Send Us a Message
                            </Typography>

                            <Paper
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    p: { xs: 3, sm: 4 },
                                    borderRadius: 4,
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            name="message"
                                            multiline
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            sx={{
                                                py: 1.5,
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                borderRadius: 3,
                                                mt: 1,
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        {/* Map Section */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                                Find Us Here
                            </Typography>

                            <Box
                                sx={{
                                    height: 450,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                                }}
                            >
                                <iframe
                                    title="Clinic Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5990035987487!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Emergency CTA */}
            <Box
                sx={{
                    py: 6,
                    textAlign: 'center',
                    bgcolor: `${theme.palette.primary.main}11`,
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        Need Urgent Care?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        For emergencies, call us directly at:
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        📞 +91 98765 43210
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default ContactPage;
