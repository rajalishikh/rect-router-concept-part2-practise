import { useLoaderData } from "react-router-dom";
import FoodMaking from "../FOODMaking/FoodMaking";


const FoodU = () => {
    
    const foodUnique = useLoaderData();
    console.log(foodUnique)
    
    return (
        <div>
            <h1>Here Is the Cooking process</h1>
            {
                foodUnique.meals.map(item7=><FoodMaking key={item7} FoodMaking={item7}></FoodMaking>)
            }
            
        </div>
    );
};

export default FoodU;