import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Grid, Card, CardMedia, CardContent, IconButton, Box } from '@mui/material';
import { Edit, Delete, FavoriteBorder, Star } from '@mui/icons-material';
import heroImage from '../assets/FavImg.jpg'; // Update with the correct path to your image

function FavRecipeManager() {
    const [recipes, setRecipes] = useState(() => {
        const savedRecipes = localStorage.getItem('recipes');
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });
    const [currentRecipe, setCurrentRecipe] = useState({ title: '', content: '', image: null });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentRecipe({ ...currentRecipe, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setRecipes(updatedRecipes);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setRecipes([...recipes, currentRecipe]);
        }
        setCurrentRecipe({ title: '', content: '', image: null });
    }

    function handleDelete(index) {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
            <Grid container spacing={4} alignItems="center">
                {/* Hero Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: { xs: '300px', md: '400px' },
                            borderRadius: '15px',
                            overflow: 'hidden'
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={heroImage}
                            alt="Hero Image"
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
                            Take a note of your favourite recipe
                        </Typography>
                    </Box>
                </Grid>

                {/* Form Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Add Your Favorite Recipe
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Title"
                            name="title"
                            value={currentRecipe.title}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Recipe Instructions"
                            name="content"
                            value={currentRecipe.content}
                            onChange={handleChange}
                            required
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button variant="contained" component="label" fullWidth>
                            Upload Image
                            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                        {currentRecipe.image && (
                            <CardMedia component="img" image={currentRecipe.image} alt="Recipe" sx={{ width: '100px', marginTop: '10px' }} />
                        )}
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '10px' }}>
                            {isEditing ? 'Update' : 'Create'} Recipe
                        </Button>
                    </form>
                </Grid>
            </Grid>

            {/* Favorite Recipes Section */}
            <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: '40px' }}>
                Favorite Recipes
            </Typography>
            <Grid container spacing={2}>
                {recipes.map((recipe, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            borderRadius: '15px',
                            boxShadow: 'none',
                            position: 'relative',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': { transform: 'scale(1.03)' }
                        }}>
                            {recipe.image && (
                                <CardMedia
                                    component="img"
                                    image={recipe.image}
                                    alt={recipe.title}
                                    sx={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px 15px 0 0'
                                    }}
                                />
                            )}
                            <CardContent sx={{ position: 'relative', padding: 2 }}>
                                <Typography variant="h6" color="text.primary">{recipe.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{recipe.content}</Typography>
                                
                                <IconButton onClick={() => handleEdit(index)} sx={{ position: 'absolute', top: 10, right: 40 }}>
                                    <Edit sx={{ color: '#1976D2' }} />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(index)} sx={{ position: 'absolute', top: 10, right: 10 }}>
                                    <Delete sx={{ color: '#D32F2F' }} />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default FavRecipeManager;
