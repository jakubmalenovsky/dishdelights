import React from 'react';
import { 
    Container, Typography, Card, CardContent, Box, Link, IconButton, 
    Accordion, AccordionSummary, AccordionDetails, Grid, CardMedia 
} from '@mui/material';
import { ExpandMore, Email, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import backgroundImage from '../assets/first.jpg';

export default function ContactView() {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 4 }}>
            
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '300px', md: '400px' },
                    borderRadius: '15px',
                    overflow: 'hidden',
                    mb: 4
                }}
            >
                <CardMedia
                    component="img"
                    image={backgroundImage}
                    alt="Contact Background"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(40%)'
                    }}
                />
                <Typography
                    variant="h1"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        fontWeight: '400'
                    }}
                >
                    Get in Touch with DishDelights
                </Typography>
            </Box>

            {/* Contact Info Section */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                        <CardContent>
                            <Email sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Typography variant="h6" sx={{ mt: 1 }}>Email Us</Typography>
                            <Link href="mailto:info@dishdelights.com" underline="hover">
                                info@dishdelights.com
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                        <CardContent>
                            <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Typography variant="h6" sx={{ mt: 1 }}>Visit Us</Typography>
                            <Typography>456 Culinary Avenue, Vienna, Austria</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                        <CardContent>
                            <Typography variant="h6">Follow Us</Typography>
                            <Box sx={{ mt: 1 }}>
                                <IconButton href="#" color="primary"><Facebook /></IconButton>
                                <IconButton href="#" color="primary"><Twitter /></IconButton>
                                <IconButton href="#" color="primary"><Instagram /></IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* FAQ Section */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>What is DishDelights?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            DishDelights is a website where you can find recipes from all around the world. 
                            It is a platform for food enthusiasts to explore and share culinary delights.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>How do I submit a recipe?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can contact us directly, and we will add it to our database.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>Can I save my favorite recipes?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes! You can go to the Favorites page, where you can save and manage your favorite recipes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
