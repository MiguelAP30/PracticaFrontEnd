import "../styles/Header.css"
import logo from "../assets/images/logo_gym.png"
const Header = () => {
    return (
        <header className='header'>
            <aside className="aside">
                <img className="logo_gym"  src= {logo} alt="logo del gimnacio" />
                <h2>Gymhouse</h2>
            </aside>
            <menu className="menu">
                <button className="menu-button">Login</button>
                <button className="menu-button">Register</button>
            </menu>
        </header>
    )
}

export default Header