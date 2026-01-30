import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Props structure: { service: { icon, title, desc, details }, index }
const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{ height: '100%' }}
        >
            <Card
                sx={{
                    height: '100%',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 12px 40px rgba(37, 99, 235, 0.12)',
                        borderColor: 'primary.light'
                    }
                }}
            >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                            opacity: 0.9
                        }}
                    >
                        {service.icon}
                    </Box>

                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Plus Jakarta Sans' }}>
                        {service.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {service.desc}
                    </Typography>

                    <List dense disablePadding>
                        {service.details.map((detail, i) => (
                            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 18 }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={detail}
                                    primaryTypographyProps={{ variant: 'body2', color: 'text.primary' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>

                <Box sx={{ px: 4, pb: 4 }}>
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: 700, p: 0, textTransform: 'none' }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;
