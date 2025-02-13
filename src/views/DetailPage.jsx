import { useParams } from "react-router-dom";

export default function DetailPage() {
    const recipedetail = [
        { uid: "1", description: "Lemon Butter Salmon: A delicious dish featuring salmon fillets cooked in a rich and tangy lemon butter sauce." },
        { uid: "2", description: "Sushi: A traditional Japanese dish with vinegared rice and various ingredients such as raw seafood, vegetables, and sometimes tropical fruits." },
        { uid: "3", description: "Tacos: A traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients, typically meat, vegetables, and salsa." },
        { uid: "4", description: "Sushi Rolls: A variation of sushi where the rice and fillings are rolled in seaweed." },
        { uid: "5", description: "Lasagna: An Italian pasta dish made of layers of lasagna noodles, ground meat, cheese, and tomato sauce." },
        { uid: "6", description: "Burritos: A Mexican dish consisting of a flour tortilla wrapped around various fillings, including beans, rice, meat, and salsa." },
    ];

    const { recipeId } = useParams(); // Extract recipeId from the URL
    console.log("RecipeId from URL: ", recipeId); // Log the recipeId to see if it's correct

    const recipe = recipedetail.find((recipe) => recipe.uid === recipeId); // Find the recipe by id

    console.log("Found recipe: ", recipe); // Log the found recipe

    return (
        <div>
            {recipe ? (
                <div>{recipe.description}</div>
            ) : (
                <div>Recipe not found.</div>
            )}
        </div>
    );
}
