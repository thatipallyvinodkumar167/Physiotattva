import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GetInTouchSection = () => {
    return (
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 4, md: 6 },
                                    borderRadius: 6,
                                    bgcolor: '#f8fafc',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                                    CONTACT US
                                </Typography>
                                <Typography variant="h2" sx={{ mt: 1, mb: 3, fontWeight: 800 }}>
                                    Get In <Typography component="span" variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>Touch</Typography>
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, lineHeight: 1.8, maxWidth: 600, mx: 'auto' }}>
                                    Have questions about our treatments or want to book a session?
                                    Our team is here to help you. Reach out to us through any of the following channels.
                                </Typography>

                                <Grid container spacing={4} justifyContent="center">
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ p: 1.5, bgcolor: 'secondary.light', borderRadius: 3, color: 'primary.main', display: 'inline-flex', mb: 2 }}>
                                            <PhoneIcon />
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Phone</Typography>
                                        <Typography variant="body2" color="text.secondary">+91 99723 27328</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ p: 1.5, bgcolor: 'secondary.light', borderRadius: 3, color: 'primary.main', display: 'inline-flex', mb: 2 }}>
                                            <EmailIcon />
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Email</Typography>
                                        <Typography variant="body2" color="text.secondary">contact@physiotattva.com</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ p: 1.5, bgcolor: 'secondary.light', borderRadius: 3, color: 'primary.main', display: 'inline-flex', mb: 2 }}>
                                            <LocationOnIcon />
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Our Office</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            #123, 1st Floor, HSR Layout,<br />
                                            Bangalore - 560102
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GetInTouchSection;
