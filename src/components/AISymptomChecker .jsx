import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    CircularProgress,
    Grid,
    Chip,
    Alert,
    Stack,
    IconButton
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ReplayIcon from '@mui/icons-material/Replay';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { checkSymptoms } from '../services/geminiService';

export const AISymptomChecker = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        setError(null);
        try {
            const data = await checkSymptoms(input);
            setResult(data);
        } catch (err) {
            setError("We encountered an issue analyzing your symptoms. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setInput('');
        setResult(null);
        setError(null);
    };

    const getSeverityColor = (sev) => {
        switch (sev) {
            case 'Emergency': return 'error';
            case 'High': return 'warning';
            case 'Medium': return 'info';
            default: return 'success';
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                maxWidth: 800,
                mx: 'auto',
                p: { xs: 3, md: 5 },
                borderRadius: 8,
                border: '1px solid',
                borderColor: 'primary.light',
                boxShadow: '0 20px 60px rgba(37, 99, 235, 0.08)',
                mt: 4
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box sx={{ p: 1, backgroundColor: 'primary.light', borderRadius: 2, color: 'primary.contrastText' }}>
                    <AutoAwesomeIcon />
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: 'Plus Jakarta Sans' }}>
                        Smart Symptom Triage
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        AI-powered clinical guidance for your discomfort
                    </Typography>
                </Box>
            </Box>

            <AnimatePresence mode="wait">
                {!result ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Example: I have sharp pain in my right shoulder when I reach overhead. It started after tennis yesterday..."
                                variant="outlined"
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 4,
                                        backgroundColor: '#f8fafc'
                                    }
                                }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 300 }}>
                                    This tool is for informational purposes only. In case of acute trauma, please visit an ER.
                                </Typography>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={loading || !input.trim()}
                                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
                                    sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700, textTransform: 'none', fontSize: '1rem' }}
                                >
                                    {loading ? 'Analyzing...' : 'Analyze Symptoms'}
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ p: 3, backgroundColor: 'primary.light', borderRadius: 4, color: 'primary.contrastText', height: '100%' }}>
                                    <Typography variant="overline" sx={{ fontWeight: 900, opacity: 0.8, letterSpacing: 1.5 }}>
                                        Recommendation
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>
                                        {result.recommendedService}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                                        {result.reasoning}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 4, height: '100%' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="overline" sx={{ fontWeight: 900, color: 'text.secondary' }}>
                                            Triage Status
                                        </Typography>
                                        <Chip
                                            label={`${result.severity} Severity`}
                                            color={getSeverityColor(result.severity)}
                                            size="small"
                                            sx={{ fontWeight: 800 }}
                                        />
                                    </Box>
                                    <Stack spacing={1}>
                                        {result.tips.map((tip, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                                <CheckCircleIcon color="success" sx={{ fontSize: 18, mt: 0.2 }} />
                                                <Typography variant="body2" color="text.secondary">{tip}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>

                        {result.severity === 'Emergency' && (
                            <Alert severity="error" icon={<WarningAmberIcon />} sx={{ mt: 3, borderRadius: 3 }}>
                                Urgent attention required. Please seek immediate medical help for severe symptoms.
                            </Alert>
                        )}

                        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ borderRadius: 3, py: 1.5, fontWeight: 700, backgroundColor: 'text.primary' }}
                            >
                                Book Priority Evaluation
                            </Button>
                            <IconButton onClick={reset} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 1.5 }}>
                                <ReplayIcon />
                            </IconButton>
                        </Stack>
                    </motion.div>
                )}
            </AnimatePresence>
        </Paper>
    );
};
