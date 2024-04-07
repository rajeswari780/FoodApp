import styles from './css/FoodRecipe.module.css';

import { useEffect, useState } from "react";
import RecipeIngredients from './RecipeIngredients';

export default function FoodRecipe({FoodId}){
    const [RecipeData , setRecipeData] = useState({});
    const [isLoading , setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
    const API_KEY = '4927ba7cff454c339da21654d93be3f8';

    useEffect(()=>{
        async function getRecipe(){
            const response = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await response.json();
            setRecipeData(data);
            setIsLoading(false);
            console.log(data);
        }
        getRecipe();
    },[FoodId])
    
    return <div>
        <div className={styles.food_recipe}>
            <h2 className={styles.food_title} > {RecipeData.title} </h2>
            <div className={styles.food_image} >
                <img
                 src={RecipeData.image}
                 className={styles.image} alt=""/>
            </div> 
            <div className={styles.details}>
                <span>⏱ <strong> { RecipeData.readyInMinutes} minutes</strong> </span>
                <span>👨‍👩‍👦 <strong>serves { RecipeData.servings}</strong> </span>
                <span>{RecipeData.vegetarian ? <strong>🥕 vegetarian</strong> : <strong>🍖 Non-vegetarian</strong>}</span>
                <span>{ RecipeData.vegan ? <strong>🐄Vegan</strong>: ""}</span>
            </div>
            <div>
                <h2>Ingrediants</h2>
                { isLoading ? <p>Loading...</p>: RecipeData.extendedIngredients.map((item)=>
                    <RecipeIngredients item={item}/>
                )}
            </div>
            <div>
                <h2>Instructions</h2>

                { isLoading ? <p>Loading...</p>: RecipeData.analyzedInstructions[0].steps.map((step)=>(
                    <li key={step.id}>{step.step}</li>
                )) }
                
            </div>
        </div>
    </div>
}