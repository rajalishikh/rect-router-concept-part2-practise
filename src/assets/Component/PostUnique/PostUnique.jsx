import { useLoaderData } from "react-router-dom";


const PostUnique = () => {
    const postU = useLoaderData();
    console.log(postU)
    const { title
    } = postU;
    return (
        <div>
            <h1>Here is the Title of my website</h1>
            <p>Title{ title}</p>
            
            
        </div>
    );
};

export default PostUnique;