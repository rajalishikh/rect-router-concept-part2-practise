import { useLoaderData } from "react-router-dom";
import UserList from "../UserLIst/UserList";
import './user.css';


const User = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <p>Here is the Total Number of user {users.length} </p>
            <div className="grid">
            {
                users.map(item=><UserList key={item.id} userList={item}></UserList>)
            }
            </div>
            
        </div>
    );
};

export default User;