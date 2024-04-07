import FoodList from './FoodList';

export default function FoodData({Foods, setFoodId}){
    return <div>
        {Foods.map((food)=>
            <FoodList key={food.id} food={food} setFoodId={setFoodId}/>
        )}
    </div>
}