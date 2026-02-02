import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, Stack } from '@mui/material';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: 'John Doe',
        role: 'Marathon Runner',
        text: 'Sri Sai Priya Physiotherapy helped me recover from my knee injury in record time. The personalized exercises and attention from Dr. Priya were exceptional!',
        rating: 5,
        img: 'https://i.pravatar.cc/150?u=1'
    },
    {
        name: 'Jane Smith',
        role: 'Software Engineer',
        text: 'The ergonomic advice and therapy fixed my chronic back pain after years of discomfort. I really appreciated the holistic approach.',
        rating: 5,
        img: 'https://i.pravatar.cc/150?u=2'
    },
    {
        name: 'Robert Brown',
        role: 'Senior Citizen',
        text: 'Very patient doctors. They helped me improve my mobility significantly after hip surgery. I feel 10 years younger now!',
        rating: 5,
        img: 'https://i.pravatar.cc/150?u=3'
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
        <Box sx={{ py: 15, bgcolor: '#ffffff' }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Stack spacing={2} sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography
                        variant="overline"
                        color="primary"
                        sx={{ letterSpacing: 3, fontWeight: 800 }}
                    >
                        TESTIMONIALS
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800 }}>
                        What Our Patients Say
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, textAlign: 'center', }}>
                        Real stories from real patients who have reclaimed their lives through
                        our specialized physiotherapy treatments.
                    </Typography>
                </Stack>

                <Box sx={{
                    '.slick-dots': { bottom: -50 },
                    '.slick-dots li button:before': { fontSize: 12, color: 'primary.main' }
                }}>
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <Box key={index} sx={{ px: 2, pb: 4 }}>
                                <Card sx={{
                                    height: '100%',
                                    borderRadius: 8,
                                    bgcolor: '#F8FAFC',
                                    p: 4,
                                    boxShadow: 'none',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        bgcolor: 'white',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                        borderColor: 'primary.light'
                                    }
                                }}>
                                    <CardContent sx={{ p: 0 }}>
                                        <FormatQuoteIcon sx={{
                                            fontSize: 60,
                                            color: 'primary.main',
                                            opacity: 0.15,
                                            mb: -2
                                        }} />

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '1.1rem',
                                                lineHeight: 1.7,
                                                mb: 4,
                                                fontWeight: 400,
                                                color: 'text.primary',
                                                minHeight: '8rem'
                                            }}
                                        >
                                            "{item.text}"
                                        </Typography>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar
                                                src={item.img}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                                }}
                                            />
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="primary.main" fontWeight={600} fontSize="0.8rem">
                                                    {item.role}
                                                </Typography>
                                                <Rating value={item.rating} size="small" readOnly sx={{ mt: 0.5, color: '#FFB800' }} />
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
