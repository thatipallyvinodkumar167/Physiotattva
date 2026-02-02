import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Container,
    useScrollTrigger,
    Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About Us', path: '/about' },

    { title: 'Symptoms', path: '/symptoms' },
    { title: 'Treatments', path: '/treatments' },
    { title: 'Blogs', path: '/blogs' },
];

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            bgcolor: 'white',
            color: 'text.primary'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.main' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
<Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
    <Box
        component="img"
        src="/images/logo.png"
        alt="Company Logo"
        sx={{
            height: 55,
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            background: 'transparent',
        }}
    />
</Box>

            <List sx={{ mt: 2 }}>
                {navLinks.map((item) => (
                    <ListItem
                        button
                        key={item.title}
                        component={Link}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        sx={{
                            borderRadius: 2,
                            mb: 1,
                            bgcolor: location.pathname === item.path ? 'rgba(0, 91, 140, 0.08)' : 'transparent',
                            '&:hover': { bgcolor: 'rgba(0, 91, 140, 0.04)' }
                        }}
                    >
                        <ListItemText
                            primary={item.title}
                            primaryTypographyProps={{
                                style: {
                                    textAlign: 'center',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: location.pathname === item.path ? '#005B8C' : '#2D3748'
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: 'auto', mb: 4 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                    component={Link}
                    to="/book-appointment"
                    onClick={handleDrawerToggle}
                    sx={{ fontWeight: 800, color: 'primary.dark' }}
                >
                    Book Appointment
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    elevation={trigger ? 4 : 0}
                    sx={{
                        bgcolor: trigger
                            ? 'rgba(255, 255, 255, 0.98)'
                            : 'rgba(255, 255, 255, 0.96)',
                        backdropFilter: 'blur(20px)',
                        color: 'text.primary',
                        transition: 'all 0.3s ease',
                        borderBottom: trigger ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}
                >
                    <Container maxWidth="xl">
                        {/* Top info bar: location, contact, mail */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 0.6,
                                px: 0.5,
                                fontSize: '0.85rem',
                                color: 'common.white',
                                background:
                                    'linear-gradient(90deg, #005B8C 0%, #007FA5 40%, #99CC33 100%)',
                                borderRadius: '0 0 12px 12px',
                                boxShadow: '0 8px 20px rgba(0,91,140,0.28)',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <LocationOnIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2">Bangalore, India</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                    <PhoneIcon sx={{ fontSize: 18 }} />
                                    <Typography variant="body2">+91 98765 43210</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                    <EmailIcon sx={{ fontSize: 18 }} />
                                    <Typography variant="body2">info@physiotattva.com</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 } }}>
                            {/* Logo */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box
                                    component={Link}
                                    to="/"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        gap: 1.5
                                    }}
                                >
                                    <img
                                        src="/images/logo.png"
                                        style={{ height: '50px', objectFit: 'contain', mixBlendMode: 'multiply', background: 'transparent' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            color: 'primary.main',
                                            lineHeight: 1.1,
                                            fontSize: { xs: '0.9rem', sm: '1.2rem' },
                                            display: { xs: 'none', sm: 'block' }
                                        }}
                                    >
                                        Sri Sai Priya<br />Physiotherapy
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Desktop Nav */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                                {navLinks.map((item) => (
                                    <Button
                                        key={item.title}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: location.pathname === item.path ? '100%' : '0%',
                                                height: '2px',
                                                bottom: 0,
                                                left: 0,
                                                backgroundColor: 'primary.main',
                                                transition: 'width 0.3s ease',
                                            },
                                            '&:hover::after': {
                                                width: '100%',
                                            },
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                                color: 'primary.main'
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                ))}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to="/book-appointment"
                                    sx={{
                                        px: 4,
                                        marginLeft: 1,
                                        fontWeight: 800,
                                        borderRadius: '30px'
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </Box>

                            {/* Mobile Menu Icon */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' }, color: 'primary.main' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    anchor="right" // Slide from right for modern mobile feel
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
