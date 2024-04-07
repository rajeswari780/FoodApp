import styles from './css/FoodList.module.css';
export default function FoodData({food, setFoodId}){

        return <div>
            <div className={styles.foodcard}>
                <h2 className={styles.title}>{food.title}</h2>
                <div className={styles.foodImage}>
                    <img src={food.image} alt=""/>
                </div>
                <div className={styles.button_container}>
                    <button 
                        onClick={()=>(setFoodId(food.id))}
                        className={styles.recipe_button} 
                    > View recipe</button>
                </div>
            </div>
        </div>
}