import "../styles/Footer.css";
import instagram from "../assets/images/logo_instagram.png";
import youtube from "../assets/images/logo_youtube.png";
import twitter from "../assets/images/logo_twitter.png";
import github from "../assets/images/logo_github.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <aside className="asidefooter">
                <ul className="redes">
                    <a className="link" href="https://www.instagram.com"><img src= {instagram} alt="logo instagram"/> <h4>@perez30_</h4> </a>
                    <a className="link" href="https://www.youtube.com"><img src= {youtube} alt="logo youtube"/><h4>GymHouseYT</h4></a>
                    <a className="link" href="https://www.twitter.com"><img src= {twitter} alt="logo twitter"/><h4>@GymHouse</h4></a>
                </ul>
            </aside>
            <section className="sectionright">
                <ul className="github">
                    <a href="https://github.com/MiguelAP30"><img className="github" src= {github} alt="logo instagram"/></a>
                </ul>
            </section>
        </footer>
    )
}

export default Footer