import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: '10 Exercises to Relieve Lower Back Pain at Home',
        excerpt: 'Simple yet effective exercises you can do at home to manage and reduce chronic lower back pain.',
        image: '/images/blog-back-pain.png',
        category: 'Pain Management',
        date: 'Jan 25, 2026',
    },
    {
        id: 2,
        title: 'The Complete Guide to ACL Recovery',
        excerpt: 'Everything you need to know about recovering from ACL surgery and getting back to your active lifestyle.',
        image: '/images/blog-acl-recovery.png',
        category: 'Sports Rehab',
        date: 'Jan 22, 2026',
    },
    {
        id: 3,
        title: 'Understanding Posture Correction: A Modern Approach',
        excerpt: 'How poor posture affects your health and what you can do to correct it with physiotherapy.',
        image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop',
        category: 'Wellness',
        date: 'Jan 20, 2026',
    },
];

const LatestBlogsSection = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#f1f5f9' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                            STAY INFORMED
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, fontWeight: 800 }}>
                            Latest <Typography component="span" variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>Blogs & Articles</Typography>
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            component={Link}
                            to="/blogs"
                            variant="text"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ fontWeight: 700, mb: 1 }}
                        >
                            View All Posts
                        </Button>
                    </motion.div>
                </Box>

                <Grid container spacing={5}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                                            '& .MuiCardMedia-root': {
                                                transform: 'scale(1.1)',
                                            }
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        width: { xs: '100%', sm: '45%' },
                                        minHeight: { xs: 240, sm: 'auto' }
                                    }}>
                                        <CardMedia
                                            component="img"
                                            image={post.image}
                                            alt={post.title}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s ease'
                                            }}
                                        />
                                        <Chip
                                            label={post.category}
                                            size="small"
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                left: 20,
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                fontWeight: 600,
                                                boxShadow: '0 4px 12px rgba(0,0,121,0.2)'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{
                                        p: 4,
                                        width: { xs: '100%', sm: '55%' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                                            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(0,121,107,0.5)' }}></span>
                                            {post.date}
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2, color: 'text.primary' }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Button
                                            component={Link}
                                            to={`/blogs`}
                                            variant="text"
                                            color="primary"
                                            sx={{
                                                justifyContent: 'flex-start',
                                                p: 0,
                                                fontWeight: 700,
                                                '&:hover': { bgcolor: 'transparent', color: 'primary.dark' }
                                            }}
                                            endIcon={<ArrowForwardIcon />}
                                        >
                                            Read Full Story
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LatestBlogsSection;
