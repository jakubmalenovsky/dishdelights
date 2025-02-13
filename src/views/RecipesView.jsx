import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TextField, Select, MenuItem, InputLabel, FormControl, Container, Typography, Box } from '@mui/material';

export default function RecipePage() {

    const recipes = [
        { recipeId: "1", name: "Spaghetti Carbonara", category: "Italian" },
        { recipeId: "2", name: "Sushi", category: "Japanese" },
        { recipeId: "3", name: "Tacos", category: "Mexican" },
        { recipeId: "4", name: "Sushi Rolls", category: "Japanese" },
        { recipeId: "5", name: "Lasagna", category: "Italian" },
        { recipeId: "6", name: "Burritos", category: "Mexican" }
    ];

    const { recipeId } = useParams(); // Get recipeId from link
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
            <Typography variant="h4" gutterBottom>Recipe List</Typography>

            {/* Search input */}
            <Box mb={2}>
                <TextField
                    label="Search by recipe name"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a recipe"
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
                        <MenuItem value="Italian">Italian</MenuItem>
                        <MenuItem value="Japanese">Japanese</MenuItem>
                        <MenuItem value="Mexican">Mexican</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Display filtered recipes */}
            <Typography variant="h5" gutterBottom>Recipe List</Typography>
            {filteredRecipes.map((recipe) => (
                <Box key={recipe.recipeId} mb={1}>
                    <Link to={`/dishdelights/detailpage/${recipe.recipeId}`}>{recipe.name}</Link>
                </Box>
            ))}
        </Container>
    );
}
