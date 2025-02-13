import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, Container, Grid, Paper } from "@mui/material";
import theme from "../theme";

import salmon from "../assets/salmon.jpg";
import sushi from "../assets/sushi.jpg";
import tacos from "../assets/tacos.jpg";
import sushiRolls from "../assets/sushi.jpg";
import lasagna from "../assets/lasagna.jpg";
import burritos from "../assets/burritos.jpg";

const recipeDetails = [
    { uid: "1", title: "Lemon Butter Salmon", image: salmon, time: "30 min", calories: "450 kcal", ingredients: ["Salmon", "Butter", "Lemon"], instructions: "Cook salmon in butter, add lemon." },
    { uid: "2", title: "Chicken", image: sushi, time: "45 min", calories: "300 kcal", ingredients: ["Rice", "Fish", "Seaweed"], instructions: "Roll rice and fish in seaweed." },
    { uid: "3", title: "Tacos", image: tacos, time: "20 min", calories: "400 kcal", ingredients: ["Tortilla", "Beef", "Cheese"], instructions: "Fill tortilla with beef and cheese." },
    { uid: "4", title: "Sushi Rolls", image: sushiRolls, time: "50 min", calories: "320 kcal", ingredients: ["Rice", "Fish", "Seaweed"], instructions: "Wrap rice and fish in seaweed." },
    { uid: "5", title: "Lasagna", image: lasagna, time: "60 min", calories: "600 kcal", ingredients: ["Pasta", "Tomato Sauce", "Cheese"], instructions: "Layer pasta, sauce, and cheese, then bake." },
    { uid: "6", title: "Burritos", image: burritos, time: "25 min", calories: "500 kcal", ingredients: ["Flour Tortilla", "Beans", "Rice"], instructions: "Wrap beans and rice in a tortilla." },
];

export default function DetailPage() {
    const { recipeId } = useParams();
    const recipe = recipeDetails.find((recipe) => recipe.uid === recipeId);

    if (!recipe) {
        return <Typography variant="h5">Recipe not found.</Typography>;
    }

    return (
        <Container sx={{ py: 3 }}>
            
                        <Card sx={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="350vh"
                                image={recipe.image}
                                alt={recipe.title}
                                sx={{ filter: "brightness(50%)" }}
                            />
                            <Box sx={{ position: "absolute", bottom: "30px", left: "40px", color: "white" }}>
                                <Typography variant="h1" fontWeight={400}>{recipe.title}</Typography>
                                <Typography variant="body1">{recipe.time} • {recipe.calories}</Typography>
                            </Box>
                        </Card>

                        {/* Ingredients & Instructions Section */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h2">Instructions</Typography>
                    <Typography variant="body1">{recipe.instructions}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, borderRadius: "20px" }}>
                        <Typography variant="h2">Ingredients</Typography>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
            </Grid>

            {/* Picture Gallery */}
            <Typography variant="h3" sx={{ mt: 4 }}>Pictures</Typography>
            <Grid container spacing={2}>
                {[1, 2, 3].map((_, index) => (
                    <Grid item xs={4} key={index}>
                        <Card sx={{ borderRadius: "20px" }}>
                            <CardMedia component="img" height="150" image={recipe.image} alt={recipe.title} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
