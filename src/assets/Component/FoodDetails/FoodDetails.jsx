import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Fooddetails.css';
const FoodDetails = ({ FoodDetails}) => {
    console.log(FoodDetails);
    const { strArea,strMealThumb,
        idMeal
        
    } = FoodDetails;
    return (
        <div className='fd'>
            <h1> Food of {strArea}</h1>
            <img src={strMealThumb} alt="" srcSet="" width={400} />
            <Link to={`/Food/${idMeal}`}>
                <button>
                    Show the details how Cook the food
            </button>
            </Link>
            
        </div>
    );
};

export default FoodDetails;
FoodDetails.propTypes = {
    FoodDetails:PropTypes.object.isRequired,
}