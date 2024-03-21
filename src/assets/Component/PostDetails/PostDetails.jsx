import '../User/user.css';

const PostDetails = ({ PostN}) => {
   
    const { title, body } = PostN;
    return (
        <div className='border'>
            <h1>My tittle is {title}</h1>
            <p>{ body}</p>
            
        </div>
    );
};

export default PostDetails;