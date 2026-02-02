import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Chip, Rating, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
    {
        name: 'Rahul Sharma',
        condition: 'Post-ACL Surgery',
        result: 'Walked in 3 weeks',
        story: 'After my ACL surgery, I was worried about returning to sports. The personalized plan at Physiotattva helped me regain strength faster than expected.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Anita Desai',
        condition: 'Chronic Back Pain',
        result: 'Pain-free in 2 months',
        story: "I had been suffering from lower back pain for years. The therapists pinpointed the root cause and guided me through exercises that finally worked.",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Michael Chen',
        condition: 'Shoulder Impingement',
        result: 'Full range of motion',
        story: 'Professional staff and great facilities. My shoulder mobility improved significantly within just a few sessions. Highly recommend!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Jane Smith',
        condition: 'Posture Correction',
        result: 'Zero Pain at Work',
        story: 'The ergonomic advice and therapy fixed my chronic back pain after years of discomfort. I really appreciated the holistic approach.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=2'
    },
    {
        name: 'Robert Brown',
        condition: 'Hip Surgery',
        result: 'Improved Mobility',
        story: 'Very patient doctors. They helped me improve my mobility significantly after hip surgery. I feel 10 years younger now!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=3'
    },
    {
        name: 'John Doe',
        condition: 'Knee Injury',
        result: 'Back to Running',
        story: 'Physiotattva helped me recover from my knee injury in record time. The personalized exercises were exceptional!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=1'
    },
];

const RecoveryStories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                            PATIENT SUCCESS
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, fontWeight: 800 }}>
                            Real <Typography component="span" variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>Recovery Stories</Typography>
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                            Hear from our patients who have successfully overcome their physical challenges and reclaimed their lives.
                        </Typography>
                    </motion.div>
                </Box>

                <Box sx={{
                    '.slick-dots': { bottom: -40 },
                    '.slick-dots li button:before': { fontSize: 12, color: 'primary.main' }
                }}>
                    <Slider {...settings}>
                        {stories.map((story, index) => (
                            <Box key={index} sx={{ px: 2, pb: 4 }}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 6,
                                        position: 'relative',
                                        bgcolor: 'secondary.light',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 10px 30px rgba(0,121,107,0.08)'
                                        }
                                    }}
                                >
                                    <FormatQuoteIcon
                                        sx={{
                                            position: 'absolute',
                                            top: 20,
                                            right: 20,
                                            fontSize: 40,
                                            color: 'primary.light',
                                            opacity: 0.3
                                        }}
                                    />

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Avatar
                                            src={story.image}
                                            sx={{ width: 64, height: 64, mr: 2, border: '2px solid', borderColor: 'primary.main' }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                {story.name}
                                            </Typography>
                                            <Rating value={story.rating} size="small" readOnly sx={{ color: 'primary.main' }} />
                                        </Box>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Chip
                                            label={story.condition}
                                            size="small"
                                            sx={{ mr: 1, mb: 1, bgcolor: 'primary.main', color: 'white', fontWeight: 600 }}
                                        />
                                        <Chip
                                            label={story.result}
                                            size="small"
                                            variant="outlined"
                                            sx={{ mb: 1, color: 'primary.main', borderColor: 'primary.main', fontWeight: 600 }}
                                        />
                                    </Box>

                                    <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.7, minHeight: '6rem' }}>
                                        "{story.story}"
                                    </Typography>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default RecoveryStories;
