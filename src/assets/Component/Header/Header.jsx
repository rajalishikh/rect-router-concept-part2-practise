import { NavLink } from "react-router-dom";
import './header.css';


const Header = () => {
    return (
        <div>
            <h3>Here is Navbar section</h3>
            <nav className="tag">
                <NavLink  to={'/'}>Home</NavLink>
                <NavLink  to={'/contract'}>Contract</NavLink>
                <NavLink  to={'/About'}>About</NavLink>
                <NavLink  to={'/User'}>User</NavLink>
                <NavLink  to={'/post'}>Post</NavLink>
                <NavLink  to={'/Food'}>Food</NavLink>
                
                
            </nav>
            
        </div>
    );
};

export default Header;