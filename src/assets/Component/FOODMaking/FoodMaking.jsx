import PropTypes from 'prop-types';
const FoodMaking = ({ FoodMaking }) => {
    console.log(FoodMaking);
    const { strInstructions
    } = FoodMaking;
    return (
        <div>
            <p>{ strInstructions}</p>
            
        </div>
    );
};
FoodMaking.propTypes = {
    FoodMaking:PropTypes.object.isRequired
}

export default FoodMaking;