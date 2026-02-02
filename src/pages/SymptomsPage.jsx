import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const symptomCategories = [
    {
        category: 'Back & Spine',
        symptoms: [
            {
                name: 'Lower Back Pain',
                description: 'Persistent or recurring pain in the lumbar region affecting daily activities.',
                causes: ['Poor posture', 'Muscle strain', 'Herniated disc', 'Sciatica'],
                severity: 'Common',
            },
            {
                name: 'Neck Stiffness',
                description: 'Restricted movement and discomfort in the cervical spine area.',
                causes: ['Poor sleeping position', 'Prolonged screen time', 'Whiplash', 'Arthritis'],
                severity: 'Common',
            },
            {
                name: 'Radiating Leg Pain',
                description: 'Pain that travels from the back down through the legs.',
                causes: ['Sciatica', 'Nerve compression', 'Spinal stenosis', 'Disc problems'],
                severity: 'Moderate',
            },
        ],
    },
    {
        category: 'Joints & Muscles',
        symptoms: [
            {
                name: 'Knee Pain',
                description: 'Discomfort, swelling, or stiffness in the knee joint.',
                causes: ['Arthritis', 'Ligament injury', 'Meniscus tear', 'Overuse'],
                severity: 'Common',
            },
            {
                name: 'Shoulder Pain',
                description: 'Pain and limited mobility in the shoulder area.',
                causes: ['Frozen shoulder', 'Rotator cuff injury', 'Bursitis', 'Tendinitis'],
                severity: 'Common',
            },
            {
                name: 'Muscle Spasms',
                description: 'Involuntary muscle contractions causing pain and tightness.',
                causes: ['Dehydration', 'Overexertion', 'Electrolyte imbalance', 'Injury'],
                severity: 'Moderate',
            },
        ],
    },
    {
        category: 'Neurological',
        symptoms: [
            {
                name: 'Numbness & Tingling',
                description: 'Loss of sensation or pins and needles feeling in limbs.',
                causes: ['Nerve compression', 'Carpal tunnel', 'Diabetes', 'Vitamin deficiency'],
                severity: 'Moderate',
            },
            {
                name: 'Balance Issues',
                description: 'Difficulty maintaining stability while standing or walking.',
                causes: ['Inner ear problems', 'Stroke effects', 'Neuropathy', 'Muscle weakness'],
                severity: 'Serious',
            },
            {
                name: 'Weakness in Limbs',
                description: 'Reduced strength affecting arm or leg function.',
                causes: ['Nerve damage', 'Stroke', 'Muscle disorders', 'Spinal issues'],
                severity: 'Serious',
            },
        ],
    },
    {
        category: 'Post-Surgery',
        symptoms: [
            {
                name: 'Limited Range of Motion',
                description: 'Restricted movement following surgical procedures.',
                causes: ['Scar tissue', 'Muscle atrophy', 'Joint stiffness', 'Swelling'],
                severity: 'Expected',
            },
            {
                name: 'Post-Operative Pain',
                description: 'Discomfort at the surgical site affecting recovery.',
                causes: ['Tissue healing', 'Inflammation', 'Nerve sensitivity', 'Muscle tension'],
                severity: 'Expected',
            },
            {
                name: 'Swelling & Inflammation',
                description: 'Fluid accumulation causing discomfort and stiffness.',
                causes: ['Normal healing', 'Infection risk', 'Poor circulation', 'Overactivity'],
                severity: 'Common',
            },
        ],
    },
];

const getSeverityColor = (severity) => {
    switch (severity) {
        case 'Serious': return 'error';
        case 'Moderate': return 'warning';
        case 'Expected': return 'info';
        default: return 'success';
    }
};

const SymptomsPage = () => {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box>
            {/* Hero Banner */}
            <Box
                sx={{
                    mt: { xs: 8, md: 10 },
                    py: { xs: 8, md: 10 },
                    background: `radial-gradient(circle at top left, ${theme.palette.secondary.main}22 0, transparent 55%), linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 65%, #003150 100%)`,
                    color: 'white',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="overline"
                                sx={{ letterSpacing: 3, fontWeight: 700, opacity: 0.9 }}
                            >
                                SYMPTOM CHECK
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1 }}
                            >
                                Understand your pain.
                                <br />
                                Find the right care.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ opacity: 0.95, maxWidth: 620, lineHeight: 1.7 }}
                            >
                                Browse common symptoms for spine, joints and neurological issues and
                                see how Sri Sai Priya Physiotherapy can help you recover safely.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(255,255,255,0.12)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255,255,255,0.35)',
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.85 }}>
                                    Quick filters
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {['Back & Neck', 'Knee & Shoulder', 'Post-surgery', 'Neurology'].map(
                                        (label, idx) => (
                                            <Chip
                                                key={idx}
                                                label={label}
                                                color="secondary"
                                                variant="outlined"
                                                sx={{
                                                    bgcolor: 'rgba(255,255,255,0.12)',
                                                    borderColor: 'rgba(255,255,255,0.4)',
                                                    color: 'white',
                                                }}
                                            />
                                        )
                                    )}
                                </Box>
                                <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                                    Unsure where to start? Scroll down and choose the body region that
                                    best matches what you are feeling.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Symptom Categories */}
            <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            mb: 5,
                            '& .MuiTab-root': {
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                textTransform: 'none',
                                minHeight: 48,
                            },
                            '& .MuiTabs-indicator': {
                                height: 3,
                                borderRadius: 999,
                            },
                        }}
                    >
                        {symptomCategories.map((cat, index) => (
                            <Tab key={index} label={cat.category} />
                        ))}
                    </Tabs>

                    <Grid container spacing={4}>
                        {symptomCategories[activeTab].symptoms.map((symptom, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            p: 3,
                                            borderRadius: 4,
                                            border: `1px solid ${theme.palette.divider}`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                boxShadow: `0 12px 30px ${theme.palette.primary.main}15`,
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {symptom.name}
                                                </Typography>
                                                <Chip
                                                    label={symptom.severity}
                                                    size="small"
                                                    color={getSeverityColor(symptom.severity)}
                                                    sx={{ fontWeight: 500 }}
                                                />
                                            </Box>

                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                                {symptom.description}
                                            </Typography>

                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                                Common Causes:
                                            </Typography>
                                            <List dense disablePadding>
                                                {symptom.causes.map((cause, i) => (
                                                    <ListItem key={i} disablePadding sx={{ py: 0.25 }}>
                                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={cause}
                                                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Warning Signs */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <WarningAmberIcon sx={{ fontSize: 40, color: 'warning.main' }} />
                                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                    When to Seek Help
                                </Typography>
                            </Box>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                While many symptoms can be managed at home initially, certain signs require
                                professional attention. Contact us immediately if you experience:
                            </Typography>
                            <List>
                                {[
                                    'Sudden severe pain without apparent cause',
                                    'Numbness or weakness that spreads rapidly',
                                    'Loss of bladder or bowel control',
                                    'Pain accompanied by fever or unexplained weight loss',
                                    'Symptoms that worsen despite rest and home care',
                                    'Pain that disrupts sleep consistently',
                                ].map((item, index) => (
                                    <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <FiberManualRecordIcon sx={{ fontSize: 10, color: 'warning.main' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: `${theme.palette.primary.main}08`,
                                    border: `1px solid ${theme.palette.primary.main}22`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <LocalHospitalIcon sx={{ fontSize: 36, color: 'primary.main' }} />
                                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                        Free Symptom Assessment
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Not sure if physiotherapy is right for you? Book a free 15-minute
                                    consultation with our specialists to discuss your symptoms.
                                </Typography>
                                <Button variant="contained" size="large" sx={{ borderRadius: 3 }}>
                                    Book Free Assessment
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box
                sx={{
                    py: 8,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    color: 'white',
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                        Dont Let Pain Hold You Back
                    </Typography>
                    <Typography sx={{ mb: 4, opacity: 0.9 }}>
                        Our team is here to help you identify the cause and find relief.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                        }}
                    >
                        Schedule Appointment
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default SymptomsPage;
