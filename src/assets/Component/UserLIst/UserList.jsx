import { Link } from 'react-router-dom';
import '../User/user.css';
const UserList = ({ userList }) => {
    console.log(userList)
    const {id, email,name, phone,website} = userList;
    return (
        <div className='border'>
            <h1>My name is {name}</h1>
            <p>My website  here it is {website}</p>
            <p>My Number is {phone}</p>
            <Link to={`/user/${id}`}>
                <button>
                    Click me
                </button>
            
            </Link>
        </div>
    );
};

export default UserList;