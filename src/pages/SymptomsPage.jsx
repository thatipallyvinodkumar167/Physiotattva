import React, { useState, useMemo } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    TextField,
    InputAdornment,
    Chip,
    useTheme,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Alpha,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

// Icons for categories
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HealingIcon from '@mui/icons-material/Healing';

const symptomData = [
    {
        id: 'spine',
        title: 'Spine & Back',
        icon: <AccessibilityIcon sx={{ fontSize: 40 }} />,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
        items: [
            { name: 'Lower Back Pain', desc: 'Dull ache or sharp pain in the lumbar region, often caused by muscle strain or disc issues.', action: 'Physiotherapy & Core Stability' },
            { name: 'Neck Pain & Stiffness', desc: 'Discomfort and restricted movement in the neck, common from poor posture or whiplash.', action: 'Manual Therapy & Posture Correction' },
            { name: 'Sciatica', desc: 'Pain radiating from the lower back through the hips and down each leg.', action: 'Nerve Flossing & Specialized Stretches' },
            { name: 'Scoliosis', desc: 'Sideways curvature of the spine often requiring specialized corrective exercises.', action: 'Schroth Method & Strengthening' }
        ]
    },
    {
        id: 'joints',
        title: 'Joints & Bones',
        icon: <AccessibilityIcon sx={{ fontSize: 40 }} />,
        image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=800',
        items: [
            { name: 'Knee Pain (OA/ACL)', desc: 'Stiffness, swelling, or instability in the knee joint.', action: 'Joint Mobilization & Strengthening' },
            { name: 'Shoulder Impingement', desc: 'Pain when lifting the arm, often due to rotator cuff issues.', action: 'Shoulder Stability Rehab' },
            { name: 'Hip Arthritis', desc: 'Deep groin pain or stiffness making walking difficult.', action: 'Hydrotherapy & Mobility Drill' },
            { name: 'Ankle Sprains', desc: 'Tearing or stretching of ligaments after a twist.', action: 'Balance & Proprioception Training' }
        ]
    },
    {
        id: 'sports',
        title: 'Sports Injuries',
        icon: <SportsMartialArtsIcon sx={{ fontSize: 40 }} />,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
        items: [
            { name: 'Ligament Tears', desc: 'Complete or partial tears of ACL, MCL, or PCL.', action: 'Post-Op Sport Rehab' },
            { name: 'Tennis/Golfer\'s Elbow', desc: 'Overuse injury causing pain around the elbow joint.', action: 'Eccentric Loading Protocols' },
            { name: 'Muscle Strains', desc: 'Pulled hamstrings, quads, or calf muscles.', action: 'Soft Tissue Release & Taping' },
            { name: 'Shin Splints', desc: 'Pain along the shin bone from repetitive stress.', action: 'Gait Analysis & Footwear Correction' }
        ]
    },
    {
        id: 'neuro',
        title: 'Neuro Rehab',
        icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
        image: 'https://images.unsplash.com/photo-1559757175-5700dac835bb?w=800',
        items: [
            { name: 'Stroke Recovery', desc: 'Loss of movement or coordination after a stroke.', action: 'Neuro-Facilitation Techniques' },
            { name: 'Parkinson’s Disease', desc: 'Tremors, stiffness, and slow movement.', action: 'Balance & Gait Retraining' },
            { name: 'Multiple Sclerosis', desc: 'Fatigue and difficulty with muscle control.', action: 'Functional Maintenance Therapy' },
            { name: 'Bell’s Palsy', desc: 'Sudden weakness in facial muscles.', action: 'Facial Muscle Re-education' }
        ]
    }
];

const SymptomsPage = () => {
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('spine');

    const filteredSymptoms = useMemo(() => {
        if (!searchTerm) return symptomData.find(c => c.id === selectedCategory)?.items || [];

        const allItems = symptomData.flatMap(c => c.items.map(i => ({ ...i, catTitle: c.title })));
        return allItems.filter(i =>
            i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            i.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, selectedCategory]);

    return (
        <Box sx={{ bgcolor: '#fdfdfd', minHeight: '100vh' }}>
            {/* --- HERO SECTION --- */}
            <Box
                sx={{
                    position: 'relative',
                    pt: { xs: 8, md: 10 },
                    pb: { xs: 4, md: 6 },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative Elements */}
                <Box sx={{
                    position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%'
                }} />

                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 700, mb: 2, display: 'block', color: 'primary.light' }}>
                                    AI-ASSISTED SYMPTOM GUIDE
                                </Typography>
                                <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3, lineHeight: 1.1 }}>
                                    Find Relief for Your <br />
                                    <Box component="span" sx={{ color: 'primary.light' }}>Physical Discomfort</Box>
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, fontWeight: 400, maxWidth: 600 }}>
                                    Compare your symptoms with common conditions and discover how
                                    SRI SAI PRIYA PHYSIOTHERAPY's specialized therapies can accelerate your recovery.
                                </Typography>

                                {/* Search Bar */}
                                <TextField
                                    fullWidth
                                    placeholder="Search symptoms (e.g. back pain, stiffness...)"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    sx={{
                                        bgcolor: 'white',
                                        borderRadius: 4,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 4,
                                            height: 64,
                                            fontSize: '1.1rem',
                                            '& fieldset': { border: 'none' },
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ ml: 1 }}>
                                                <SearchIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Box
                                    component="img"
                                    src="/images/physio-illustration.svg"
                                    sx={{
                                        width: '100%',
                                        maxHeight: 320,
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                                    }}
                                    onError={(e) => e.target.src = 'https://cdni.iconscout.com/illustration/premium/thumb/physiotherapy-2974921-2477353.png'}
                                />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* --- CATEGORY SELECTOR --- */}
            <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Select a Body Region</Typography>
                        <Typography variant="body1" color="text.secondary">Narrow down your symptoms by choosing a clinical area</Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {symptomData.map((cat) => (
                            <Grid item xs={6} md={3} key={cat.id}>
                                <Card
                                    onClick={() => { setSelectedCategory(cat.id); setSearchTerm(''); }}
                                    sx={{
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        p: 3,
                                        borderRadius: 5,
                                        transition: 'all 0.3s ease',
                                        border: '2px solid',
                                        borderColor: selectedCategory === cat.id ? 'primary.main' : 'transparent',
                                        bgcolor: selectedCategory === cat.id ? 'primary.main' : 'white',
                                        color: selectedCategory === cat.id ? 'white' : 'text.primary',
                                        boxShadow: selectedCategory === cat.id ? '0 15px 35px rgba(0, 109, 119, 0.25)' : '0 4px 15px rgba(0,0,0,0.05)',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <Box sx={{ mb: 2, color: selectedCategory === cat.id ? 'white' : 'primary.main' }}>
                                        {cat.icon}
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{cat.title}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* --- SYMPTOMS LIST --- */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="md">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory + searchTerm}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                                    {searchTerm ? `Results for "${searchTerm}"` : `${symptomData.find(c => c.id === selectedCategory)?.title} Symptoms`}
                                </Typography>
                                <Chip label={`${filteredSymptoms.length} Conditions`} variant="outlined" color="primary" />
                            </Box>

                            {filteredSymptoms.length > 0 ? (
                                filteredSymptoms.map((symptom, idx) => (
                                    <Accordion
                                        key={idx}
                                        sx={{
                                            mb: 2,
                                            borderRadius: '16px !important',
                                            '&:before': { display: 'none' },
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            border: '1px solid #eee'
                                        }}
                                    >
                                        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                                                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{symptom.name}</Typography>
                                                {searchTerm && <Chip size="small" label={symptom.catTitle} sx={{ fontSize: '0.65rem' }} />}
                                            </Stack>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 4, pb: 4 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                                                {symptom.desc}
                                            </Typography>
                                            <Box sx={{ p: 2.5, bgcolor: '#f0f9fa', borderRadius: 3, borderLeft: '4px solid', borderColor: 'primary.main' }}>
                                                <Typography variant="subtitle2" sx={{ color: 'primary.dark', fontWeight: 800, mb: 0.5 }}>RECOMMENDED THERAPY</Typography>
                                                <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 500 }}>{symptom.action}</Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            ) : (
                                <Box sx={{ py: 10, textAlign: 'center' }}>
                                    <Typography variant="h6" color="text.secondary">No matching symptoms found. Try another search term.</Typography>
                                </Box>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Container>
            </Box>

            {/* --- EMERGENCY BANNER --- */}
            <Box sx={{ py: 10, bgcolor: '#fff5f5' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                <WarningAmberIcon color="error" />
                                <Typography variant="h5" sx={{ fontWeight: 800, color: '#c53030' }}>When to See a Doctor Immediately</Typography>
                            </Stack>
                            <Typography variant="body1" color="text.secondary">
                                If you experience sudden loss of bowel/bladder control, severe unexplained weight loss, fever with back pain, or sudden severe weakness, please visit an emergency room immediately.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Button
                                component={RouterLink}
                                to="/book-appointment"
                                variant="contained"
                                color="error"
                                size="large"
                                sx={{ py: 2, px: 4, borderRadius: 3, fontWeight: 700 }}
                            >
                                Urgent Consultation
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* --- FOOTER CTA --- */}
            <Box sx={{
                py: 12,
                textAlign: 'center',
                background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=1600')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <Container maxWidth="sm">
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>Ready to Start Your Recovery?</Typography>
                    <Typography variant="h6" sx={{ mb: 5, opacity: 0.8, fontWeight: 300 }}>
                        Our experts are here to help you move without pain. Book your clinical assessment today.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <Button
                            component={RouterLink}
                            to="/book-appointment"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ py: 2, px: 5, borderRadius: 99, fontWeight: 700, bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.main' } }}
                        >
                            Book Appointment
                        </Button>
                        <Button
                            component={RouterLink}
                            to="/contact"
                            variant="outlined"
                            size="large"
                            sx={{ py: 2, px: 5, borderRadius: 99, fontWeight: 700, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'primary.light', color: 'primary.light' } }}
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default SymptomsPage;
