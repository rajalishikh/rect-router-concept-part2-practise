import { useLoaderData } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";
import '../User/user.css';


const Post = () => {
    const post = useLoaderData();

    return (
        <div >
            <h1>Here is the total number of post :{post.length} </h1>
            <div className="grid">
            {
                post.map(item3=><PostDetails key={item3.id} PostN={item3}></PostDetails>)
            }
            </div>
        </div>
    );
};

export default Post;