import { Link, useRouteError } from "react-router-dom";


const ErroreElement = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Ops</h1>
            <p>{
            error.statusText
            || error.message


            
            }</p>
            {
                error.status === 404 && <div>
                    <h1>The page is not found  </h1>
                    <p>Go back home</p>
                    <Link to={'/'}>
                        
                        <button>
                            Go Back Home 
                        </button>
                    </Link>
                
                </div>

            }
            
        </div>
    );
};

export default ErroreElement;