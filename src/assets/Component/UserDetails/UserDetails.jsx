import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name ,website
    } = userDetails;
    return (
        <div>
            <h1>Here is the details of User </h1>
            <p>{name}</p>
            <p>my website { website}</p>
            
        </div>
    );
};

export default UserDetails;