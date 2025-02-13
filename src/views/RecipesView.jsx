import { useState } from "react";
import { Link } from "react-router-dom";

import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import salmonImage from '../assets/salmon.jpg';
import chickenImage from '../assets/chicken.jpg';
import tacosImage from '../assets/tacos.jpg';
import sushiImage from '../assets/sushi.jpg';
import lasagnaImage from '../assets/lasagna.jpg';
import burritosImage from '../assets/burritos.jpg';

export default function RecipePage() {
    const recipes = [
        { recipeId: "1", name: "Lemon Butter Salmon", category: "Seafood", description: "Delicious salmon with lemon butter sauce.", rating: 4.8, image: salmonImage },
        { recipeId: "2", name: "Herb-Crusted Chicken", category: "Chicken", description: "Juicy chicken with a crispy herb crust.", rating: 4.6, image: chickenImage },
        { recipeId: "3", name: "Tacos", category: "Mexican", description: "Tasty tacos with fresh ingredients.", rating: 4.5, image: tacosImage },
        { recipeId: "4", name: "Sushi Rolls", category: "Japanese", description: "Fresh sushi rolls with various fillings.", rating: 4.7, image: sushiImage },
        { recipeId: "5", name: "Lasagna", category: "Italian", description: "Classic Italian lasagna with rich flavors.", rating: 4.3, image: lasagnaImage },
        { recipeId: "6", name: "Burritos", category: "Mexican", description: "Hearty burritos packed with flavor.", rating: 4.2, image: burritosImage }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter recipes by category and search term
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container sx={{ pt: 4, pb: 4 }}>
            
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 400 }}>
                Explore Different Cuisines
            </Typography>

            <Box mb={2} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                <TextField
                    label="Search recipes"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{ sx: { borderRadius: '20px' } }}
                />
                <FormControl fullWidth variant="outlined" sx={{ borderRadius: '15px' }}>
                    <InputLabel id="category-label">Filter by category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        label="Filter by category"
                        sx={{ borderRadius: '20px' }}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="Seafood">Seafood</MenuItem>
                        <MenuItem value="Chicken">Chicken</MenuItem>
                        <MenuItem value="Mexican">Mexican</MenuItem>
                        <MenuItem value="Japanese">Japanese</MenuItem>
                        <MenuItem value="Italian">Italian</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Recipes Grid */}
            <Grid container spacing={2}>
                {filteredRecipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.recipeId}>
                        <Link to={`/dishdelights/detailpage/${recipe.recipeId}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{
                                borderRadius: '15px',
                                boxShadow: 'none',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': { transform: 'scale(1.03)' } // Hover effect for better UI
                            }}>
                                <CardMedia
                                    component="img"
                                    image={recipe.image}
                                    alt={recipe.name}
                                    sx={{
                                        width: '100%',       // Full width
                                        height: '200px',     // Fixed height for uniformity
                                        objectFit: 'cover',  // Ensures images fit properly
                                        borderRadius: '15px 15px 0 0'
                                    }}
                                />
                                <CardContent sx={{ position: 'relative', padding: 2 }}>
                                    <Typography variant="h6" color="text.primary">{recipe.name}</Typography>
                                    <Typography color="textSecondary">{recipe.description}</Typography>
                                    <Box display="flex" alignItems="center" mt={1}>
                                        <StarIcon sx={{ color: '#FFB400', fontSize: '18px' }} />
                                        <Typography variant="body2" sx={{ ml: 0.5 }}>{recipe.rating}</Typography>
                                    </Box>
                
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
