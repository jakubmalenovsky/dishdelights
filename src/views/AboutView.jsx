import { Container, Typography, Box, Button, CardMedia } from '@mui/material';
import communityImage from '../assets/lasagna.jpg';

export default function AboutView() {
    return (
        <Container maxWidth="lg" sx={{ py: 5, textAlign: 'left' }}>
            {/* Hero Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="h1" fontWeight="400" gutterBottom>
                        Welcome to DishDelights
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        A vibrant community dedicated to uniting food lovers worldwide with diverse and delicious recipes.
                    </Typography>
                </Box>
                <CardMedia component="img" image={communityImage} alt="Food Community" sx={{ width: '50%', borderRadius: '10px' }} />
            </Box>

            <Box sx={{ mb: 5 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    About DishDelights
                </Typography>
                <Typography variant="body1" color="text.secondary"></Typography>
                <Typography variant="body1" color="text.secondary">
                    DishDelights is a global platform for food enthusiasts to explore, share, and create delicious meals. We aim to provide a seamless experience with detailed recipes and user-friendly navigation.
                </Typography>
                <Typography variant="body1" fontWeight="bold" mt={2}>
                    Headquarters: 456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Join the DishDelights Community Today!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 3 }}>
                    Sign up now to explore, save, and share your favorite recipes with a global community of food lovers.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Get Started
                </Button>
            </Box>
        </Container>
    );
}