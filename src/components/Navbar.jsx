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
        <Box sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Typography variant="h5" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
                Physiotattva
            </Typography>
            <List>
                {navLinks.map((item) => (
                    <ListItem button key={item.title} component={Link} to={item.path} onClick={handleDrawerToggle}>
                        <ListItemText primary={item.title} primaryTypographyProps={{ style: { textAlign: 'center', fontSize: '1.2rem' } }} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: 'auto', mb: 4 }}>
                <Button variant="contained" color="primary" fullWidth size="large">
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
                        bgcolor: trigger ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                        backdropFilter: trigger ? 'blur(20px)' : 'none',
                        color: trigger ? 'text.primary' : 'text.primary', // Always dark text for now, unless Hero is dark
                        transition: 'all 0.3s ease',
                        borderBottom: trigger ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}
                >
                    <Container maxWidth="xl">
                        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 } }}>
                            {/* Logo & Location */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography
                                    variant="h5"
                                    component={Link}
                                    to="/"
                                    sx={{
                                        fontWeight: 800,
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        letterSpacing: '-0.5px',
                                    }}
                                >
                                    Physiotattva
                                </Typography>

                                {/* Location */}
                                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                                    <LocationOnIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                        Bangalore, India
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
                                            fontWeight: 500,
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

                                <Button variant="contained" color="primary" sx={{ px: 4, marginLeft: 1 }}>
                                    Book Appointment
                                </Button>
                            </Box>

                            {/* Mobile Menu Icon */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
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
