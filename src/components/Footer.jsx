import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Divider,
    Link as MuiLink,
    Stack,
    useTheme
} from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Phone,
    Email,
    LocationOn,
    ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const theme = useTheme();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/about' },
            { name: 'Careers', path: '/contact' },
            { name: 'Contact', path: '/contact' },
        ],
        services: [
            { name: 'Physiotherapy', path: '/services' },
            { name: 'Chiropractic', path: '/services' },
            { name: 'Sports Rehab', path: '/services' },
            { name: 'Neuro Rehab', path: '/services' },
        ],
        resources: [
            { name: 'Symptoms', path: '/symptoms' },
            { name: 'Treatments', path: '/treatments' },
            { name: 'Blogs', path: '/' },
            { name: 'FAQs', path: '/' },
        ]
    };

    const socialIcons = [
        { icon: <Facebook fontSize="small" />, color: '#1877F2' },
        { icon: <Twitter fontSize="small" />, color: '#1DA1F2' },
        { icon: <Instagram fontSize="small" />, color: '#E4405F' },
        { icon: <LinkedIn fontSize="small" />, color: '#0A66C2' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#002233',
                color: 'white',
                pt: 10,
                pb: 6,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Accent */}
            <Box sx={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 109, 119, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
            }} />

            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                background: 'linear-gradient(45deg, #fff 30%, #00bcd4 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            SRI SAI PRIYA
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, lineHeight: 1.8, maxWidth: 320 }}>
                            Delivering world-class physiotherapy and rehabilitation services across Bangalore and Hyderabad. Enhancing lives through evidence-based care.
                        </Typography>

                        <Stack direction="row" spacing={1.5}>
                            {socialIcons.map((item, idx) => (
                                <IconButton
                                    key={idx}
                                    sx={{
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: item.color,
                                            borderColor: item.color,
                                            transform: 'translateY(-5px)'
                                        }
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Columns */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={4}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'primary.light' }}>Explore</Typography>
                                <Stack spacing={2}>
                                    {footerLinks.company.map((link) => (
                                        <MuiLink
                                            key={link.name}
                                            component={Link}
                                            to={link.path}
                                            sx={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: '0.3s', '&:hover': { color: 'white', pl: 1 } }}
                                        >
                                            {link.name}
                                        </MuiLink>
                                    ))}
                                </Stack>
                            </Grid>

                            <Grid item xs={6} sm={4}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'primary.light' }}>Services</Typography>
                                <Stack spacing={2}>
                                    {footerLinks.services.map((link) => (
                                        <MuiLink
                                            key={link.name}
                                            component={Link}
                                            to={link.path}
                                            sx={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: '0.3s', '&:hover': { color: 'white', pl: 1 } }}
                                        >
                                            {link.name}
                                        </MuiLink>
                                    ))}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'primary.light' }}>Contact</Typography>
                                <Stack spacing={3}>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Email sx={{ color: 'primary.light', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>info@physiotattva.com</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Phone sx={{ color: 'primary.light', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>+91 98765 43210</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <LocationOn sx={{ color: 'primary.light', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                                            JP Nagar, Bangalore <br />
                                            Jubilee Hills, Hyderabad
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                        © {new Date().getFullYear()} SRI SAI PRIYA PHYSIOTHERAPY. All rights reserved.
                    </Typography>

                    <Stack direction="row" spacing={4}>
                        {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((text) => (
                            <MuiLink key={text} href="#" sx={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: 'white' } }}>
                                {text}
                            </MuiLink>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
