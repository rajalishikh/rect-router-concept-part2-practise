import { Link } from "react-router-dom";
import './header.css';


const Header = () => {
    return (
        <div>
            <h3>Here is Navbar section</h3>
            <div >
                <Link className="tag" to={'/'}>Home</Link>
                <Link className="tag" to={'/contract'}>Contract</Link>
                <Link className="tag" to={'/About'}>About</Link>
                <Link className="tag" to={'/User'}>User</Link>
                
                
            </div>
            
        </div>
    );
};

export default Header;