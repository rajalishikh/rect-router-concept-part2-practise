import { useLoaderData, useNavigate } from "react-router-dom";


const PostUnique = () => {
    const postU = useLoaderData();
    const navigate2 = useNavigate();
    // here we can go back from the website another page 
    const handleClick2 = () => {
        navigate2(-1);
    }
    console.log(postU)
    const { title,id
    } = postU;
    return (
        <div>
            <h1>Here is the Title of my website{ id}</h1>
            <p>Title{title}</p>
            <button onClick={handleClick2}>Go Back</button>
            
            
        </div>
    );
};

export default PostUnique;