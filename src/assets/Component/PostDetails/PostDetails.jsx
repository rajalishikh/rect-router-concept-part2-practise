import { Link, useNavigate } from 'react-router-dom';
import '../User/user.css';

const PostDetails = ({ PostN}) => {
   
    const { title, body, id } = PostN;
    // navigate is the hok jeta amader button shora shori onno kothi niea jai 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/PostUnique/${id}`)
    }
    return (
        <div className='border'>
            <h1>My tittle is {title}</h1>
            <p>{body}</p>
            <Link to={`/PostUnique/${id}`}>
                <button>
                    Show the post Details
            </button>
            </Link>
            <button onClick={handleClick}>See the Details</button>
            
        </div>
    );
};

export default PostDetails;