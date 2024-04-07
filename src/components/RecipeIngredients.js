import styles from './css/RecipeIngredients.module.css'

export default function RecipeIngredients({item}){

        return <div className={styles.recipe}>
            <img src={`https://img.spoonacular.com/ingredients_100x100/${item.image}`}></img>
                <span className={styles.ingrediants}>
                    <div>{item.name}</div>
                    <div>{item.amount}{item.unit}</div>
                </span>        
        </div>
}