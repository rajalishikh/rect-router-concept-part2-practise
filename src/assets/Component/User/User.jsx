import { useLoaderData } from "react-router-dom";


const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <p>Here is the Total Number of user {users.length} </p>
            
        </div>
    );
};

export default User;