import { useLoaderData } from "react-router-dom";
import FoodDetails from "../FoodDetails/FoodDetails";
import './Food.css';


const Food = () => {
    const dish = useLoaderData();
    console.log(dish)
    return (
        <div>
            <h1>Welcome to the food corner :{dish.meals.length} </h1>
            <div className="food">
                {
                    dish.meals.map(result=><FoodDetails key={result.id} FoodDetails={result}></FoodDetails>)
               }
            </div>
            
        </div>
    );
};

export default Food;