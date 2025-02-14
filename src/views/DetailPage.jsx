import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, Container, Grid, Paper } from "@mui/material";

import salmon from "../assets/salmon.jpg";
import chicken from "../assets/chicken.jpg";
import tacos from "../assets/tacos.jpg";
import sushiRolls from "../assets/sushi.jpg";
import lasagna from "../assets/lasagna.jpg";
import burritos from "../assets/burritos.jpg";

const recipeDetails = [
    { uid: "1", title: "Lemon Butter Salmon", image: salmon, time: "30 min", calories: "450 kcal", ingredients: ["200g Salmon", "50g Butter", "1 Lemon", "2 cloves Garlic", "1 tbsp Parsley", "Salt to taste", "Pepper to taste"], instructions: "Heat a skillet over medium heat and add the butter. Once the butter has melted, add the salmon fillets, skin side down. Cook for about 4-5 minutes on each side, or until the salmon is golden brown and cooked through. Mince the garlic and add it to the skillet during the last minute of cooking. Squeeze fresh lemon juice over the salmon and garnish with chopped parsley. Serve immediately with a side of vegetables or rice." },
    { uid: "2", title: "Herb-Crusted Chicken", image: chicken, time: "45 min", calories: "300 kcal", ingredients: ["200g Chicken Breast", "50g Bread Crumbs", "2 tbsp Olive Oil", "1 tbsp Parsley", "1 tbsp Thyme", "1 tbsp Rosemary", "Salt to taste", "Pepper to taste"], instructions: "Preheat the oven to 375°F (190°C). In a bowl, mix the bread crumbs, parsley, thyme, rosemary, salt, and pepper. Brush the chicken breasts with olive oil and coat them with the herb mixture. Place the chicken on a baking sheet and bake for 25-30 minutes, or until the chicken is cooked through and the crust is golden brown. Serve with a side of vegetables or salad." },
    { uid: "3", title: "Tacos", image: tacos, time: "20 min", calories: "400 kcal", ingredients: ["6 Tortillas", "200g Beef", "100g Cheese", "1 cup Lettuce", "2 Tomatoes", "100g Salsa", "1 Onion"], instructions: "In a skillet over medium heat, cook the beef until browned and fully cooked, breaking it apart with a spoon as it cooks. Warm the tortillas in a separate pan or microwave. Dice the tomatoes and onions. To assemble the tacos, place a portion of the cooked beef onto each tortilla. Sprinkle with cheese, and add lettuce, tomatoes, onions, and salsa. Fold the tortillas in half and serve immediately." },
    { uid: "4", title: "Sushi Rolls", image: sushiRolls, time: "50 min", calories: "320 kcal", ingredients: ["200g Rice", "100g Fish", "4 sheets Seaweed", "1 Cucumber", "1 Avocado", "50ml Soy Sauce", "30g Pickled Ginger"], instructions: "Prepare the sushi rice according to the package instructions and let it cool. Slice the cucumber and avocado into thin strips. Place a sheet of seaweed on a bamboo mat, shiny side down. Spread a thin layer of rice over the seaweed, leaving a 1-inch border at the top. Arrange the fish, cucumber, and avocado strips in the center of the rice. Using the bamboo mat, roll the seaweed tightly around the rice and fillings. Wet the border with a little water to seal the roll. Slice the roll into bite-sized pieces and serve with soy sauce and pickled ginger." },
    { uid: "5", title: "Lasagna", image: lasagna, time: "60 min", calories: "600 kcal", ingredients: ["12 sheets Pasta", "500ml Tomato Sauce", "300g Cheese", "400g Ground Beef", "1 Onion", "2 cloves Garlic", "1 tbsp Basil"], instructions: "Preheat the oven to 375°F (190°C). Cook the pasta sheets according to the package instructions and set aside. In a skillet, cook the ground beef over medium heat until browned. Dice the onion and mince the garlic, then add them to the skillet and cook until softened. Add the tomato sauce and basil, and simmer for 10 minutes. In a baking dish, layer the pasta sheets, meat sauce, and cheese. Repeat the layers, finishing with a layer of cheese on top. Cover with foil and bake for 30 minutes. Remove the foil and bake for an additional 10 minutes, or until the cheese is bubbly and golden brown. Let the lasagna cool for a few minutes before serving." },
    { uid: "6", title: "Burritos", image: burritos, time: "25 min", calories: "500 kcal", ingredients: ["4 Flour Tortillas", "200g Beans", "200g Rice", "100g Cheese", "100g Salsa", "1 Avocado", "50g Sour Cream"], instructions: "Cook the rice according to the package instructions. Warm the flour tortillas in a skillet or microwave. Slice the avocado. To assemble the burritos, place a portion of beans and rice onto each tortilla. Add cheese, salsa, and avocado slices. Roll up the tortillas tightly, folding in the sides as you go. Serve the burritos with a side of sour cream or guacamole." },
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
             {/* <Typography variant="h3" sx={{ mt: 4 }}>Pictures</Typography>
            <Grid container spacing={3}>
                {[1, 2, 3].map((_, index) => (
                    <Grid item xs={4} key={index}>
                        <Card sx={{ borderRadius: "20px" }}>
                            <CardMedia component="img" height="150" image={recipe.image} alt={recipe.title} />
                        </Card>
                    </Grid>
                ))}
            </Grid>*/}
        </Container>
    );
}
