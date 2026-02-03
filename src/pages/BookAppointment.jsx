import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    Stack,
    Stepper,
    Step,
    StepLabel,
    useTheme,
    Avatar,
    Fade,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import StarIcon from '@mui/icons-material/Star';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const clinics = [
    { name: 'JP Nagar Center', city: 'Bangalore' },
    { name: 'HSR Layout Center', city: 'Bangalore' },
    { name: 'Indiranagar Center', city: 'Bangalore' },
    { name: 'Jayanagar Center', city: 'Bangalore' },
    { name: 'Jubilee Hills Center', city: 'Hyderabad' },
    { name: 'Gachibowli Rehab', city: 'Hyderabad' },
    { name: 'Kukatpally Center', city: 'Hyderabad' },
    { name: 'Banjara Hills Rehab', city: 'Hyderabad' },
];

const concerns = [
    { title: 'Back Pain', icon: <SportsScoreIcon /> },
    { title: 'Sports Injury', icon: <MedicalServicesIcon /> },
    { title: 'Post-Surgery', icon: <LocalHospitalIcon /> },
    { title: 'Neuro Rehab', icon: <AssignmentIcon /> },
];

const steps = [
    { label: 'Concern', sub: 'What hurts?' },
    { label: 'Schedule', sub: 'When works?' },
    { label: 'Details', sub: 'Who are you?' },
];

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
        date: '',
        timeSlot: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveStep(3); // Success Step
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 800, textAlign: 'center' }}>
                            What can we help you with?
                        </Typography>
                        <Grid container spacing={2}>
                            {concerns.map((item) => (
                                <Grid item xs={6} sm={3} key={item.title}>
                                    <Paper
                                        onClick={() => setFormData({ ...formData, areaOfConcern: item.title })}
                                        sx={{
                                            p: 3,
                                            textAlign: 'center',
                                            borderRadius: 4,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            border: `2px solid ${formData.areaOfConcern === item.title ? theme.palette.primary.main : 'rgba(0,0,0,0.03)'}`,
                                            bgcolor: formData.areaOfConcern === item.title ? `${theme.palette.primary.main}08` : 'white',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                                borderColor: theme.palette.primary.main,
                                            },
                                        }}
                                    >
                                        <Box sx={{ color: 'primary.main', mb: 1.5 }}>
                                            {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
                                        </Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                            {item.title}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ mt: 5 }}>
                            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
                                Choose a preferred location
                            </Typography>
                            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                                {clinics.map((c) => (
                                    <Button
                                        key={c.name}
                                        onClick={() => setFormData({ ...formData, clinic: c.name })}
                                        variant={formData.clinic === c.name ? "contained" : "outlined"}
                                        sx={{
                                            px: 3,
                                            py: 1,
                                            borderRadius: 2,
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            borderWidth: 2,
                                            '&:hover': { borderWidth: 2 }
                                        }}
                                    >
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography variant="caption" sx={{ display: 'block', opacity: 0.8, fontSize: '0.65rem' }}>{c.city}</Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 700 }}>{c.name}</Typography>
                                        </Box>
                                    </Button>
                                ))}
                            </Stack>
                        </Box>
                    </motion.div>
                );
            case 1:
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 800, textAlign: 'center' }}>
                            Pick a date and time
                        </Typography>
                        <Box sx={{ maxWidth: 400, mx: 'auto', mb: 5 }}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Preferred Date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    '& .MuiOutlinedInput-root': { borderRadius: 4, bgcolor: '#F8FAFC' }
                                }}
                            />
                        </Box>

                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
                            Available Slots
                        </Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map((slot) => (
                                <Grid item xs={6} sm={4} key={slot}>
                                    <Button
                                        fullWidth
                                        variant={formData.timeSlot === slot ? "contained" : "outlined"}
                                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                        sx={{
                                            borderRadius: 3,
                                            py: 2,
                                            fontWeight: 800,
                                            textTransform: 'none',
                                            borderWidth: 2,
                                            '&:hover': { borderWidth: 2 }
                                        }}
                                    >
                                        {slot}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 800, textAlign: 'center' }}>
                            Tell us who you are
                        </Typography>
                        <Stack spacing={3} sx={{ maxWidth: 500, mx: 'auto' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
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
                                        sx={formInputStyles}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                sx={formInputStyles}
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                sx={formInputStyles}
                            />
                        </Stack>

                        <Paper elevation={0} sx={{ mt: 5, p: 3, borderRadius: 4, bgcolor: `${theme.palette.secondary.main}08`, border: `1px dashed ${theme.palette.secondary.main}30`, display: 'flex', alignItems: 'center', gap: 3, maxWidth: 500, mx: 'auto' }}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
                                <VerifiedUserIcon />
                            </Avatar>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Complete Summary</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                    <b>{formData.areaOfConcern}</b> session at <b>{formData.clinic}</b>
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Scheduled for <b>{formData.date}</b> at <b>{formData.timeSlot}</b>
                                </Typography>
                            </Box>
                        </Paper>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ pt: { xs: 12, md: 15 }, pb: 15, bgcolor: '#F8FAFC', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Elements */}
            <Box sx={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(153, 204, 51, 0.05) 0%, transparent 70%)' }} />
            <Box sx={{ position: 'absolute', bottom: -150, right: -150, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 91, 140, 0.03) 0%, transparent 70%)' }} />

            <Container maxWidth="md">
                {/* Header Branding */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: 3, mb: 1, display: 'block' }}
                    >
                        PREMIUM REHABILITATION
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                        Book Your <Typography component="span" variant="inherit" sx={{ color: 'primary.main' }}>Treatment</Typography>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                        Join thousands of patients who started their recovery journey with our expert team of physiotherapists.
                    </Typography>
                </Box>

                {/* Main Centered Card */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: 12,
                        bgcolor: 'white',
                        boxShadow: '0 50px 120px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(0,0,0,0.02)',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {activeStep < 3 ? (
                        <>
                            {/* Centered Stepper */}
                            <Box sx={{ mb: 8 }}>
                                <Stepper activeStep={activeStep} alternativeLabel sx={{ '& .MuiStepConnector-line': { borderTopWidth: 2 } }}>
                                    {steps.map((step) => (
                                        <Step key={step.label}>
                                            <StepLabel
                                                StepIconProps={{
                                                    sx: {
                                                        fontSize: 32,
                                                        '&.Mui-active': { color: 'primary.main' },
                                                        '&.Mui-completed': { color: 'secondary.main' }
                                                    }
                                                }}
                                            >
                                                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{step.label}</Typography>
                                                <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>{step.sub}</Typography>
                                            </StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>

                            <form onSubmit={handleSubmit}>
                                <Box sx={{ minHeight: 400 }}>
                                    <AnimatePresence mode="wait">
                                        {renderStepContent(activeStep)}
                                    </AnimatePresence>
                                </Box>

                                <Box sx={{ mt: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        startIcon={<NavigateBeforeIcon />}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 4,
                                            fontWeight: 800,
                                            color: 'text.secondary',
                                            '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                                        }}
                                    >
                                        Earlier Step
                                    </Button>

                                    {activeStep === steps.length - 1 ? (
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                px: 8,
                                                py: 2.5,
                                                borderRadius: 5,
                                                fontWeight: 900,
                                                fontSize: '1.1rem',
                                                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                                boxShadow: `0 20px 40px ${theme.palette.primary.main}40`,
                                                '&:hover': { transform: 'scale(1.02)' }
                                            }}
                                        >
                                            Confirm Appointment
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            disabled={
                                                (activeStep === 0 && (!formData.areaOfConcern || !formData.clinic)) ||
                                                (activeStep === 1 && (!formData.date || !formData.timeSlot))
                                            }
                                            endIcon={<NavigateNextIcon />}
                                            sx={{
                                                px: 6,
                                                py: 2.2,
                                                borderRadius: 5,
                                                fontWeight: 800,
                                                fontSize: '1rem',
                                                boxShadow: `0 15px 35px ${theme.palette.primary.main}25`,
                                            }}
                                        >
                                            Continue
                                        </Button>
                                    )}
                                </Box>
                            </form>
                        </>
                    ) : (
                        <Fade in timeout={1000}>
                            <Box sx={{ textAlign: 'center', py: 6 }}>
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 0.8 }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 140,
                                            height: 140,
                                            bgcolor: `${theme.palette.secondary.main}15`,
                                            color: 'secondary.main',
                                            margin: '0 auto',
                                            mb: 4,
                                            border: `4px solid ${theme.palette.secondary.main}`
                                        }}
                                    >
                                        <CheckCircleOutlineIcon sx={{ fontSize: 90 }} />
                                    </Avatar>
                                </motion.div>
                                <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>Awesome!</Typography>
                                <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 500, mx: 'auto', lineHeight: 1.6 }}>
                                    Your request for <b>{formData.timeSlot}</b> on <b>{formData.date}</b> has been received. Our team will call you shortly.
                                </Typography>
                                <Stack direction="row" spacing={3} justifyContent="center">
                                    <Button
                                        variant="contained"
                                        onClick={() => { setActiveStep(0); setFormData({ firstName: '', lastName: '', email: '', phone: '', clinic: '', areaOfConcern: '', date: '', timeSlot: '' }); }}
                                        sx={{ px: 5, py: 2, borderRadius: 5, fontWeight: 800 }}
                                    >
                                        Book Another
                                    </Button>
                                    <Button
                                        href="/"
                                        variant="outlined"
                                        sx={{ px: 5, py: 2, borderRadius: 5, fontWeight: 800, borderWidth: 2 }}
                                    >
                                        Go Home
                                    </Button>
                                </Stack>
                            </Box>
                        </Fade>
                    )}
                </Paper>

                {/* Trust Footer */}
                <Grid container spacing={4} sx={{ mt: 10 }}>
                    <Grid item xs={12} sm={4}>
                        <TrustBadge icon={<StarIcon />} label="5-Star Care" sub="Top rated by patients" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TrustBadge icon={<AccessTimeIcon />} label="Fast Booking" sub="Slots cleared daily" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TrustBadge icon={<PhoneIcon />} label="24/7 Priority" sub="Always a call away" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const formInputStyles = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 4,
        bgcolor: '#F8FAFC',
        '& fieldset': { borderColor: 'rgba(0,0,0,0.05)' },
        '&:hover fieldset': { borderColor: 'primary.main' },
    },
    '& .MuiInputLabel-root': { fontWeight: 700, fontSize: '0.9rem' },
};

const TrustBadge = ({ icon, label, sub }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 3, bgcolor: 'primary.main', color: 'white', mb: 2 }}>
            {React.cloneElement(icon, { fontSize: 'medium' })}
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>{label}</Typography>
        <Typography variant="caption" color="text.secondary">{sub}</Typography>
    </Box>
);

export default BookAppointment;
