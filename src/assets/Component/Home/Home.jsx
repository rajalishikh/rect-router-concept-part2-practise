import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Home/home.css';

const Home = () => {
    const navigation=useNavigation()
    return (
        <div>
            <h1>Here is the home page</h1>
            <Header></Header>
            {
                navigation.state === "loading" ? <p
                className="text"
                >
                    loading...
                </p>:<Outlet></Outlet>
            }
          
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;