import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, List, ListItem, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

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
        <Container style={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Add you favorite recipe
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
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    margin="normal"
                >
                    Upload Image
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                    />
                </Button>
                {currentRecipe.image && (
                    <CardMedia
                        component="img"
                        image={currentRecipe.image}
                        alt="Recipe"
                        style={{ width: '100px', marginTop: '10px' }}
                    />
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {isEditing ? 'Update' : 'Create'} Recipe
                </Button>
            </form>
            <Typography variant="h5" component="h2" gutterBottom>
                Favorite Recipes
            </Typography>
            <List>
                {recipes.map((recipe, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    {recipe.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {recipe.content}
                                </Typography>
                                {recipe.image && (
                                    <CardMedia
                                        component="img"
                                        image={recipe.image}
                                        alt="Recipe"
                                        style={{ width: '100px', marginTop: '10px' }}
                                    />
                                )}
                                <IconButton onClick={() => handleEdit(index)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(index)}>
                                    <Delete />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default FavRecipeManager;
