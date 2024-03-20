import '../User/user.css';
const UserList = ({ userList }) => {
    console.log(userList)
    const { email,name, phone,website} = userList;
    return (
        <div className='border'>
            <h1>My name is {name}</h1>
            <p>My website  here it is {website}</p>
            <p>My Number is { phone}</p>
            
        </div>
    );
};

export default UserList;