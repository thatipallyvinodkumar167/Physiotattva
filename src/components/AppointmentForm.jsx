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
    useTheme,
} from '@mui/material';

const AppointmentForm = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Appointment request sent! We will contact you shortly.');
    };

    return (
        <Box
            sx={{
                py: 12,
                background: `linear-gradient(
          135deg,
          ${theme.palette.primary.main},
          ${theme.palette.primary.light}
        )`,
                color: 'white',
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={5} alignItems="center">

                    {/* LEFT CONTENT */}
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                            Ready to Start Your Recovery?
                        </Typography>

                        <Typography variant="body1" sx={{ opacity: 0.95, mb: 4 }}>
                            Book an appointment with our specialists today and take the first
                            step towards a pain-free life.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            📞 +91 98765 43210
                        </Typography>
                    </Grid>

                    {/* FORM */}
                    <Grid item xs={12} md={7}>
                        <Paper
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            }}
                        >
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        sx={textFieldStyles(theme)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        required
                                        onChange={handleChange}
                                        sx={textFieldStyles(theme)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Service"
                                        name="service"
                                        required
                                        onChange={handleChange}
                                        sx={textFieldStyles(theme)}
                                    >
                                        <MenuItem value="Physiotherapy">Physiotherapy</MenuItem>
                                        <MenuItem value="Sports Rehab">Sports Rehab</MenuItem>
                                        <MenuItem value="Chiropractic">Chiropractic</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="Preferred Date"
                                        name="date"
                                        required
                                        InputLabelProps={{ shrink: true }}
                                        onChange={handleChange}
                                        sx={textFieldStyles(theme)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            mt: 2,
                                            height: 52,
                                            fontSize: '1.05rem',
                                            fontWeight: 600,
                                            borderRadius: 3,
                                            boxShadow: `0 12px 25px ${theme.palette.primary.main}55`,
                                        }}
                                    >
                                        Confirm Booking
                                    </Button>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

/* Shared TextField Styles */
const textFieldStyles = (theme) => ({
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
        },
    },
});

export default AppointmentForm;
