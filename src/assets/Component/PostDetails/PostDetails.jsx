import { Link } from 'react-router-dom';
import '../User/user.css';

const PostDetails = ({ PostN}) => {
   
    const { title, body ,id} = PostN;
    return (
        <div className='border'>
            <h1>My tittle is {title}</h1>
            <p>{body}</p>
            <Link to={`/PostUnique/${id}`}>
                <button>
                    Show the post Details
            </button>
            </Link>
            
        </div>
    );
};

export default PostDetails;