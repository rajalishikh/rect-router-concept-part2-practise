import './Fooddetails.css';
const FoodDetails = ({ FoodDetails}) => {
    console.log(FoodDetails);
    const { strArea,strMealThumb
    } = FoodDetails;
    return (
        <div className='fd'>
            <h1> Food of {strArea}</h1>
            <img src={strMealThumb} alt="" srcSet="" width={400} />
            
        </div>
    );
};

export default FoodDetails;