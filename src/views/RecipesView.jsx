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
  IconButton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import salmonImage from '../assets/salmon.jpg';
import chickenImage from '../assets/chicken.jpg';
import tacosImage from '../assets/tacos.jpg';
import sushiImage from '../assets/sushi.jpg';
import lasagnaImage from '../assets/lasagna.jpg';
import burritosImage from '../assets/burritos.jpg';

export default function RecipePage() {
  const recipes = [
    { recipeId: "1", name: "Lemon Butter Salmon", category: "Seafood", price: "$22.00", rating: 4.8, image: salmonImage },
    { recipeId: "2", name: "Herb-Crusted Chicken", category: "Chicken", price: "$29.00", rating: 4.6, image: chickenImage },
    { recipeId: "3", name: "Tacos", category: "Mexican", price: "$15.00", rating: 4.5, image: tacosImage },
    { recipeId: "4", name: "Sushi Rolls", category: "Japanese", price: "$18.00", rating: 4.7, image: sushiImage },
    { recipeId: "5", name: "Lasagna", category: "Italian", price: "$20.00", rating: 4.3, image: lasagnaImage },
    { recipeId: "6", name: "Burritos", category: "Mexican", price: "$17.00", rating: 4.2, image: burritosImage }
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
    <Container>
      {/* Search input */}
      <Box mb={2}>
        <TextField
          label="Search recipes"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Category filter */}
      <Box mb={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="category-label">Filter by category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            label="Filter by category"
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
                  <Typography color="textSecondary">{recipe.price}</Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    <StarIcon sx={{ color: '#FFB400', fontSize: '18px' }} />
                    <Typography variant="body2" sx={{ ml: 0.5 }}>{recipe.rating}</Typography>
                  </Box>
                  <IconButton sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <FavoriteBorderIcon sx={{ color: '#FF6F00' }} />
                  </IconButton>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
