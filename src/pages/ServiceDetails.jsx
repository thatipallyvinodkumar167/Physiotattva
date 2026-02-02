import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    TextField,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

/* ------------------ STATIC DETAIL CONTENT ------------------ */
const CONDITIONS = [
    "Stroke Rehabilitation Center in Hyderabad",
    "Head Injury Rehabilitation in Hyderabad",
    "Physiotherapy in Hyderabad",
    "Brachial Plexus Rehabilitation",
    "Bladder and Bowel Rehabilitation",
    "Vestibular Rehabilitation",
    "Orthopedic Rehabilitation",
    "Sports Rehabilitation",
    "Post COVID Rehabilitation",
    "Gynecology Rehabilitation",
    "Cardio Pulmonary Rehabilitation",
    "COMA Care",
    "Pain Management",
    "Bedsore Management",
];

const WHY_CHOOSE = [
    "Highly Experienced Neuro Rehab Specialists",
    "Personalized Treatment Plans",
    "Advanced Therapy Equipment",
    "Patient & Family Education",
    "Convenient Location in Hyderabad",
];

/* ------------------ THEME CONSTANTS ------------------ */
const THEME = {
    primary: "#0a3d62",
    primaryDark: "#08324f",
    background: "#f9fafb",
    formBackground: "#eef2f3",
    white: "#ffffff",
};

/* ------------------ COMPONENT ------------------ */
export default function ServiceDetails() {
    const { slug } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const found = servicesData.find((s) => s.slug === slug);

        if (found) {
            setService({
                title: `${found.title} in Hyderabad`,
                intro: found.description,
                conditions: CONDITIONS,
                whyChoose: WHY_CHOOSE,
            });
        } else {
            setService(null);
        }
    }, [slug]);

    if (!service) {
        return (
            <Box sx={{ py: 10, textAlign: "center" }}>
                <Typography variant="h6">Service details not found.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ background: THEME.background, py: { xs: 6, md: 10 } ,marginTop:5}}>
            <Container maxWidth="xl">

                {/* ==================== TOP SECTION ==================== */}
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
                    
                    {/* -------- LEFT: CONTACT FORM -------- */}
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={2}
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: 4,
                                background: THEME.formBackground,
                                position: { md: "sticky" },
                                top: { md: 100 },
                                width:350,
                            }}
                        >
                            <Typography 
                                variant="h5" 
                                fontWeight="bold" 
                                sx={{ mb: 0.5, color: THEME.primary }}
                            >
                                Need Help?
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{ mb: 3, color: "text.secondary" }}
                            >
                                Drop us a Line
                            </Typography>
                            <TextField 
                                fullWidth 
                                label="Name" 
                                variant="outlined"
                                sx={{ mb: 2 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Email" 
                                type="email"
                                variant="outlined"
                                sx={{ mb: 2 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Phone No" 
                                type="tel"
                                variant="outlined"
                                sx={{ mb: 2 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Looking For" 
                                variant="outlined"
                                sx={{ mb: 2 }} 
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Message"
                                variant="outlined"
                                sx={{ mb: 3 }}
                            />

                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                sx={{
                                    bgcolor: THEME.primary,
                                    color: THEME.white,
                                    fontWeight: 600,
                                    py: 1.5,
                                    borderRadius: 2,
                                    "&:hover": { bgcolor: THEME.primaryDark },
                                }}
                            >
                                Submit Now
                            </Button>
                            
                            {/* Inline Call CTA like reference design */}
                            <Divider sx={{ my: 3 }} />
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Box
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        bgcolor: THEME.primary,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: THEME.white,
                                        flexShrink: 0,
                                    }}
                                >
                                    <PhoneIcon />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
                                    >
                                        Need Help? Call Here
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ mt: 0.5, fontWeight: "bold", color: THEME.primary }}
                                    >
                                        +91 9154977719
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* -------- RIGHT: CONTENT -------- */}
                    <Grid item xs={12} md={8}>
                        {/* Title */}
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{ 
                                color: THEME.primary, 
                                mb: 3,
                                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }
                            }}
                        >
                            {service.title}
                        </Typography>

                        {/* Intro */}
                        <Typography 
                            variant="body1"
                            sx={{ 
                                mb: 4, 
                                lineHeight: 1.8,
                                color: "text.secondary",
                                fontSize: "1.1rem"
                            }}
                        >
                            {service.intro}
                        </Typography>

                        <Divider sx={{ mb: 4 }} />

                        {/* Why Choose Section */}
                        <Typography 
                            variant="h4" 
                            fontWeight="bold" 
                            sx={{ mb: 3, color: THEME.primary }}
                        >
                            Why Choose Physiotattva?
                        </Typography>

                        <List sx={{ mb: 2 }}>
                            {service.whyChoose.map((item, index) => (
                                <ListItem key={index} sx={{ py: 1, px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                        <CheckCircleIcon sx={{ color: THEME.primary }} />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item}
                                        primaryTypographyProps={{
                                            variant: "body1",
                                            fontWeight: 500
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                {/* ==================== CTA SECTION ==================== */}
                <Box sx={{ mt: { xs: 8, md: 12 } }}>
                    <Grid 
                        container 
                        spacing={{ xs: 4, md: 6 }} 
                        alignItems="stretch"
                    >
                        {/* -------- LEFT: CALL CARD -------- */}
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    height: { xs: 280, md: 360 },
                                    borderRadius: 4,
                                    backgroundImage:
                                        `linear-gradient(rgba(10,61,98,0.85), rgba(10,61,98,0.85)), url('https://images.unsplash.com/photo-1584467735871-b0b9c5c14b1d?w=800')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    color: THEME.white,
                                    p: 4,
                                }}
                            >
                                <PhoneIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
                                <Typography variant="h4" fontWeight="bold" gutterBottom>
                                    Need Help? Call Here
                                </Typography>
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        mt: 1,
                                        fontWeight: 500,
                                        letterSpacing: 1
                                    }}
                                >
                                    +91 9154977719
                                </Typography>
                            </Box>
                        </Grid>

                        {/* -------- RIGHT: BOOKING CTA -------- */}
                        <Grid item xs={12} md={7}>
                            <Box 
                                sx={{ 
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    sx={{ 
                                        color: THEME.primary, 
                                        mb: 3,
                                        fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
                                    }}
                                >
                                    Book physiotattva in Hyderabad
                                </Typography>

                                <Typography 
                                    variant="body1"
                                    sx={{ 
                                        mb: 4, 
                                        lineHeight: 1.8,
                                        color: "text.secondary"
                                    }}
                                >
                                    Start your recovery journey with Physiotattva — where healing
                                    begins through expert care, compassion, and advanced therapy.
                                </Typography>

                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                                        <LocationOnIcon sx={{ color: THEME.primary, mr: 1.5 }} />
                                        <Typography variant="body1">
                                            <strong>Visit Us:</strong> Hyderabad
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <PhoneIcon sx={{ color: THEME.primary, mr: 1.5 }} />
                                        <Typography variant="body1">
                                            <strong>Call:</strong> 9154977719, 9154977720
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: THEME.primary,
                                        fontWeight: 600,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        alignSelf: "flex-start",
                                        "&:hover": { bgcolor: THEME.primaryDark },
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
}