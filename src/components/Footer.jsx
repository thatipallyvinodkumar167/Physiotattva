import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'secondary.main', color: 'text.primary', pt: 8, pb: 4, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Brand & Tagline */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.dark' }}>
                            Physiotattva
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, maxWidth: 300 }}>
                            Restoring movement, enhancing life. Your trusted partner in physiotherapy and rehabilitation.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton color="primary" sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'primary.light' } }}>
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary" sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'primary.light' } }}>
                                <Twitter />
                            </IconButton>
                            <IconButton color="primary" sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'primary.light' } }}>
                                <Instagram />
                            </IconButton>
                            <IconButton color="primary" sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'primary.light' } }}>
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Quick Links
                        </Typography>
                        {['Home', 'About Us', 'Services', 'Doctors', 'Blog'].map((text) => (
                            <Box key={text} sx={{ mb: 1 }}>
                                <MuiLink
                                    component={Link}
                                    to={`/${text.toLowerCase().replace(' ', '-')}`}
                                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                                >
                                    {text}
                                </MuiLink>
                            </Box>
                        ))}
                    </Grid>

                    {/* Services */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Our Services
                        </Typography>
                        {['Physiotherapy', 'Chiropractic', 'Sports Injury', 'Post-Op Rehab', 'Pediatric Therapy'].map((text) => (
                            <Box key={text} sx={{ mb: 1 }}>
                                <MuiLink
                                    component={Link}
                                    to="/services"
                                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                                >
                                    {text}
                                </MuiLink>
                            </Box>
                        ))}
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <LocationOn color="primary" />
                            <Typography variant="body2">123 Healing Street, Wellness City, HC 56000</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <Phone color="primary" />
                            <Typography variant="body2">+91 98765 43210</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Email color="primary" />
                            <Typography variant="body2">info@physiotattva.com</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(0,0,0,0.1)' }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Physiotattva. All rights reserved.
                    </Typography>
                    <Box sx={{ mt: { xs: 2, sm: 0 } }}>
                        <MuiLink href="#" sx={{ color: 'text.secondary', mr: 2 }}>Privacy Policy</MuiLink>
                        <MuiLink href="#" sx={{ color: 'text.secondary' }}>Terms of Service</MuiLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
