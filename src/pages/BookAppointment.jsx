import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    MenuItem,
    Paper,
    Stack,
    Stepper,
    Step,
    StepLabel,
    useTheme,
    Avatar,
    Divider,
    Fade,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';

const clinics = [
    'Downtown Recovery Center',
    'North Bangalore Wellness Hub',
    'South Park Rehabilitation',
    'East Side Physiotherapy',
];

const concerns = [
    'Lower Back Pain',
    'Neck & Shoulder Pain',
    'Knee Injury',
    'Sports Injury',
    'Post-Surgery Recovery',
    'Neurological Issues',
    'Other',
];

const steps = ['Patient Details', 'Session Info', 'Review'];

const BookAppointment = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        clinic: '',
        areaOfConcern: '',
        symptoms: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
        setActiveStep(3); // Show Success State
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                            Tell us about yourself
                        </Typography>
                        <Grid container spacing={2.5}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    sx={formInputStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    sx={formInputStyles}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    sx={formInputStyles}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    placeholder="+91 XXXX XXX XXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    sx={formInputStyles}
                                />
                            </Grid>
                        </Grid>
                    </motion.div>
                );
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                            Appointment Preferences
                        </Typography>
                        <Grid container spacing={2.5}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Select Clinic Location"
                                    name="clinic"
                                    value={formData.clinic}
                                    onChange={handleChange}
                                    required
                                    sx={formInputStyles}
                                >
                                    {clinics.map((clinic) => (
                                        <MenuItem key={clinic} value={clinic}>{clinic}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Area of Concern"
                                    name="areaOfConcern"
                                    value={formData.areaOfConcern}
                                    onChange={handleChange}
                                    required
                                    sx={formInputStyles}
                                >
                                    {concerns.map((concern) => (
                                        <MenuItem key={concern} value={concern}>{concern}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="date"
                                    label="Preferred Date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    sx={formInputStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="time"
                                    label="Preferred Time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    sx={formInputStyles}
                                />
                            </Grid>
                        </Grid>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                            Final Review
                        </Typography>
                        <Box sx={{ bgcolor: 'rgba(0,0,0,0.02)', p: 3, borderRadius: 4, mb: 3, border: '1px solid rgba(0,0,0,0.05)' }}>
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">Patient Name</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{formData.firstName} {formData.lastName}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">Location</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{formData.clinic}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">Schedule</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{formData.date} at {formData.time}</Typography>
                                </Box>
                                <Divider />
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Symptoms Breakdown</Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        name="symptoms"
                                        placeholder="Briefly describe your condition..."
                                        value={formData.symptoms}
                                        onChange={handleChange}
                                        sx={formInputStyles}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'secondary.main', p: 1 }}>
                            <SecurityIcon fontSize="small" />
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                Your health data is encrypted and secure.
                            </Typography>
                        </Box>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ pt: { xs: 10, md: 15 }, pb: 15, bgcolor: '#FAFBFC', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor Elements */}
            <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(153, 204, 51, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
            <Box sx={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 91, 140, 0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6}>
                    {/* LEFT CONTENT: Information & Trust */}
                    <Grid item xs={12} md={4}>
                        <Stack spacing={4}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                    <Avatar
                                        src="/images/logo.png"
                                        sx={{ width: 48, height: 48, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: -0.5, lineHeight: 1.1 }}>
                                        Physiotattva<br />
                                        <Typography component="span" variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>
                                            Premium Rehab
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                                    Experience world-class physiotherapy with our certified experts. Your journey to recovery starts with a single click.
                                </Typography>
                            </Box>

                            {/* Trust Cards */}
                            <Stack spacing={2}>
                                <InfoCard
                                    icon={<PhoneIcon fontSize="small" />}
                                    title="Consultation Hotline"
                                    value="+91 98765 43210"
                                    color="rgba(153, 204, 51, 0.1)"
                                    iconColor="#99CC33"
                                />
                                <InfoCard
                                    icon={<StarIcon fontSize="small" />}
                                    title="Expert Supervision"
                                    value="Over 10,000+ Recovered Patients"
                                    color="rgba(0, 91, 140, 0.08)"
                                    iconColor="#005B8C"
                                />
                                <InfoCard
                                    icon={<AccessTimeIcon fontSize="small" />}
                                    title="Operating Hours"
                                    value="Mon-Sat (8:00 AM - 8:00 PM)"
                                    color="rgba(0, 0, 0, 0.04)"
                                    iconColor="#2D3748"
                                />
                            </Stack>

                            {/* Credentials Header */}
                            <Paper
                                sx={{
                                    p: 3,
                                    borderRadius: 6,
                                    background: 'linear-gradient(135deg, #005B8C 0%, #003C5F 100%)',
                                    color: 'white',
                                    boxShadow: '0 15px 35px rgba(0, 91, 140, 0.25)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <VerifiedUserIcon sx={{ position: 'absolute', top: -10, right: -10, fontSize: 80, opacity: 0.1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Accredited Center</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, mb: 2.5 }}>
                                    Recognized by leading medical boards for excellence in physical rehabilitation.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        borderRadius: 2,
                                        '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
                                    }}
                                >
                                    View Certificates
                                </Button>
                            </Paper>
                        </Stack>
                    </Grid>

                    {/* RIGHT CONTENT: Booking Form */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 5 }}>
                            <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3rem' }, letterSpacing: -1 }}>
                                Book Your <Typography component="span" variant="inherit" sx={{ color: 'secondary.main' }}>Session</Typography>
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Quick 3-step process to secure your consultation slot.
                            </Typography>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 5 },
                                borderRadius: 8,
                                position: 'relative',
                                bgcolor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                            }}
                        >
                            {activeStep < 3 ? (
                                <>
                                    <Box sx={{ mb: 6 }}>
                                        <Stepper
                                            activeStep={activeStep}
                                            alternativeLabel
                                            sx={{
                                                '& .MuiStepLabel-label': { fontWeight: 700, fontSize: '0.85rem', color: 'text.secondary' },
                                                '& .MuiStepIcon-root': { fontSize: '1.8rem' },
                                                '& .MuiStepIcon-root.Mui-active': { color: 'primary.main' },
                                                '& .MuiStepIcon-root.Mui-completed': { color: 'secondary.main' },
                                            }}
                                        >
                                            {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel>{label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Box>

                                    <form onSubmit={handleSubmit}>
                                        <Box sx={{ minHeight: '340px' }}>
                                            <AnimatePresence mode="wait">
                                                {renderStepContent(activeStep)}
                                            </AnimatePresence>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6, pt: 3, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                startIcon={<NavigateBeforeIcon />}
                                                sx={{ px: 3, borderRadius: 3, fontWeight: 700, color: 'text.secondary' }}
                                            >
                                                Back
                                            </Button>

                                            {activeStep === steps.length - 1 ? (
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    sx={{
                                                        px: 6,
                                                        py: 1.8,
                                                        borderRadius: 4,
                                                        fontWeight: 800,
                                                        fontSize: '1rem',
                                                        backgroundImage: 'linear-gradient(45deg, #005B8C 0%, #99CC33 100%)',
                                                        boxShadow: '0 10px 30px rgba(0, 91, 140, 0.3)',
                                                    }}
                                                >
                                                    Confirm Booking
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    endIcon={<NavigateNextIcon />}
                                                    sx={{
                                                        px: 5,
                                                        py: 1.8,
                                                        borderRadius: 4,
                                                        fontWeight: 800,
                                                        fontSize: '1rem',
                                                        boxShadow: '0 10px 30px rgba(0, 91, 140, 0.2)',
                                                    }}
                                                >
                                                    Continue
                                                </Button>
                                            )}
                                        </Box>
                                    </form>
                                </>
                            ) : (
                                <Fade in timeout={800}>
                                    <Box sx={{ py: 6, textAlign: 'center' }}>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: '50%',
                                                    bgcolor: 'rgba(153, 204, 51, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    mb: 4,
                                                    color: 'secondary.main'
                                                }}
                                            >
                                                <CheckCircleOutlineIcon sx={{ fontSize: 60 }} />
                                            </Box>
                                        </motion.div>
                                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>Booking Confirmed!</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400, mx: 'auto', mb: 5, lineHeight: 1.6 }}>
                                            Success! Your appointment request has been received. Our team will reach out to you within the next 2 hours.
                                        </Typography>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                                            <Button
                                                variant="contained"
                                                onClick={() => { setActiveStep(0); setFormData({ firstName: '', lastName: '', email: '', phone: '', clinic: '', areaOfConcern: '', symptoms: '', date: '', time: '' }); }}
                                                sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}
                                            >
                                                Done
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                onClick={() => window.print()}
                                                sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}
                                            >
                                                Download Summary
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Fade>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

// Sub-component for Info Cards
const InfoCard = ({ icon, title, value, color, iconColor }) => (
    <Paper
        elevation={0}
        sx={{
            p: 2.5,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: 'white',
            border: '1px solid rgba(0,0,0,0.04)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                borderColor: iconColor + '33'
            }
        }}
    >
        <Box sx={{ bgcolor: color, p: 1.2, borderRadius: 3, color: iconColor, display: 'flex' }}>
            {icon}
        </Box>
        <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                {value}
            </Typography>
        </Box>
    </Paper>
);

// Styled input settings
const formInputStyles = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 3,
        bgcolor: 'rgba(255,255,255,0.5)',
        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
        '&:hover fieldset': { borderColor: 'primary.main' },
        '&.Mui-focused fieldset': { borderWidth: 2 },
    },
    '& .MuiInputLabel-root': { fontWeight: 600 },
};

export default BookAppointment;
