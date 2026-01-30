import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    TextField,
    InputAdornment,
    Tabs,
    Tab,
    Avatar,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const blogCategories = ['All', 'Pain Management', 'Sports Rehab', 'Wellness', 'Recovery', 'Tips'];

const blogPosts = [
    {
        id: 1,
        title: '10 Exercises to Relieve Lower Back Pain at Home',
        excerpt: 'Simple yet effective exercises you can do at home to manage and reduce chronic lower back pain.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
        category: 'Pain Management',
        author: 'Dr. Priya Sharma',
        date: 'Jan 25, 2026',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: 2,
        title: 'The Complete Guide to ACL Recovery',
        excerpt: 'Everything you need to know about recovering from ACL surgery and getting back to your active lifestyle.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600',
        category: 'Sports Rehab',
        author: 'Dr. Rajesh Kumar',
        date: 'Jan 22, 2026',
        readTime: '8 min read',
        featured: true,
    },
    {
        id: 3,
        title: 'Understanding Posture Correction: A Modern Approach',
        excerpt: 'How poor posture affects your health and what you can do to correct it with physiotherapy.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600',
        category: 'Wellness',
        author: 'Dr. Anita Reddy',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        featured: false,
    },
    {
        id: 4,
        title: 'Post-Surgery Rehabilitation: What to Expect',
        excerpt: 'A comprehensive timeline of what recovery looks like after common orthopedic surgeries.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
        category: 'Recovery',
        author: 'Dr. Vikram Singh',
        date: 'Jan 18, 2026',
        readTime: '7 min read',
        featured: false,
    },
    {
        id: 5,
        title: '5 Stretches Every Desk Worker Should Do Daily',
        excerpt: 'Combat the effects of sitting all day with these essential stretches for office workers.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
        category: 'Tips',
        author: 'Dr. Priya Sharma',
        date: 'Jan 15, 2026',
        readTime: '4 min read',
        featured: false,
    },
    {
        id: 6,
        title: 'Managing Arthritis Pain Through Physical Therapy',
        excerpt: 'Discover how targeted physiotherapy can help manage arthritis symptoms and improve mobility.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
        category: 'Pain Management',
        author: 'Dr. Rajesh Kumar',
        date: 'Jan 12, 2026',
        readTime: '6 min read',
        featured: false,
    },
];

const BlogsPage = () => {
    const theme = useTheme();
    const [activeCategory, setActiveCategory] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === 0 || post.category === blogCategories[activeCategory];
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter((post) => post.featured);

    return (
        <Box>
            {/* Hero Banner */}
            <Box
                sx={{
                    marginTop: 10,
                    py: 12,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        Health & Wellness Blog
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                        Expert insights, tips, and guides for your health journey
                    </Typography>

                    {/* Search Bar */}
                    <TextField
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            maxWidth: 500,
                            width: '100%',
                            bgcolor: 'white',
                            borderRadius: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                '& fieldset': { border: 'none' },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
            </Box>

            <Grid container spacing={4}>
                {featuredPosts.map((post, index) => (
                    <Grid item xs={12} sm={4} key={post.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <Card
                                sx={{
                                    height: '100%',

                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: `0 20px 50px ${theme.palette.primary.main}20`,
                                    },
                                }}
                            >
                                {/* card content */}
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* All Posts */}
            <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                        All Articles
                    </Typography>

                    {/* Category Tabs */}
                    <Tabs
                        value={activeCategory}
                        onChange={(e, val) => setActiveCategory(val)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            mb: 4,
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '1rem',
                            },
                        }}
                    >
                        {blogCategories.map((cat, index) => (
                            <Tab key={index} label={cat} />
                        ))}
                    </Tabs>

                    {/* Blog Grid */}
                    <Grid container spacing={4}>
                        {filteredPosts.map((post, index) => (
                            <Grid item xs={12} md={6} key={post.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -6 }}
                                >
                                    <Card sx={{
                                        borderRadius: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: `0 12px 30px rgba(0,0,0,0.1)`,
                                        },
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: { xs: '100%', md: '40%' },
                                                height: { xs: '200px', md: 'auto' },
                                                objectFit: 'cover'
                                            }}
                                            image={post.image}
                                            alt={post.title}
                                        />
                                        <CardContent sx={{
                                            p: 3,
                                            width: { xs: '100%', md: '60%' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flexGrow: 1
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                                                <Chip
                                                    label={post.category}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: `${theme.palette.primary.main}10`,
                                                        color: 'primary.main',
                                                        fontSize: '0.75rem',
                                                    }}
                                                />
                                                <Typography variant="caption" color="text.secondary">
                                                    {post.readTime}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 1.5,
                                                    lineHeight: 1.3,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    minHeight: '3.4rem'
                                                }}
                                            >
                                                {post.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    mb: 2,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    flexGrow: 1
                                                }}
                                            >
                                                {post.excerpt.substring(0, 100)}...
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CalendarTodayIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                                                    <Typography variant="caption" color="text.secondary">
                                                        {post.date}
                                                    </Typography>
                                                </Box>
                                                <Button
                                                    size="small"
                                                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                                                    sx={{ fontWeight: 500 }}
                                                >
                                                    Read
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>

                    {filteredPosts.length === 0 && (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h6" color="text.secondary">
                                No articles found matching your search.
                            </Typography>
                        </Box>
                    )}

                    {/* Load More */}
                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button variant="outlined" size="large" sx={{ borderRadius: 3, px: 5 }}>
                            Load More Articles
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Newsletter CTA */}
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
                        Stay Updated
                    </Typography>
                    <Typography sx={{ mb: 4, opacity: 0.9 }}>
                        Subscribe to our newsletter for the latest health tips and articles.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TextField
                            placeholder="Enter your email"
                            size="small"
                            sx={{
                                minWidth: 280,
                                bgcolor: 'white',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'white',
                                color: 'white',
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default BlogsPage;
