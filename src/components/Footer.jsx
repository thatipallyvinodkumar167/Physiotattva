import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'secondary.light', color: 'text.primary', pt: 8, pb: 4, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Brand & Tagline */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.dark' }}>
                            Sri Sai Priya Physiotherapy
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

                {/* Map Section */}
                <Box sx={{ mt: 8, mb: 0, borderRadius: 4, overflow: 'hidden', height: 300, border: '1px solid', borderColor: 'divider' }}>
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756627196238!2d77.6331922!3d12.9233633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148d13264903%3A0x28976b921319c8d3!2sPhysiotattva%20-%20HSR%20Layout!5e0!3m2!1sen!2sin!4v1706617000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>

                <Divider sx={{ my: 4, borderColor: 'rgba(0,0,0,0.1)' }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Sri Sai Priya Physiotherapy. All rights reserved.
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
