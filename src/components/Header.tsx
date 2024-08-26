import "../styles/Header.css"
import logo from "../assets/images/logo_gym.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <aside className="aside">
                <img className="logo_gym"  src= {logo} alt="logo del gimnacio" />
                <h2>Gymhouse</h2>
                <button className="menu-button"><Link to="/Principal">Home</Link></button>
            </aside>
            <menu className="menu">
                <button className="menu-button"><Link to="/login">Login</Link></button>
                <button className="menu-button"><Link to="/Register">Register</Link></button>
            </menu>
        </header>
    )
}

export default Header