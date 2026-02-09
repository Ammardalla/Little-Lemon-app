import { Link } from "react-router-dom";

function Footer(){
    return(
        <section id="footer">
        <img id="img-footer" src={`${process.env.PUBLIC_URL}/img/little-lemon-yellow-logo3.png`} alt="/little-lemon-logo" />
        <div className="footer-div">
        <nav>
            <h2>Nav Bar</h2>
            <ul id="footer-nav">
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/BookingPage">Reservation</Link></li>
                <li><Link to="/NotCooded">OrderOnline</Link></li>
                <li><Link to="/NotCooded">Log In</Link></li>
            </ul>
        </nav>
        </div>
        <div className="footer-div">
            <h2>Contact</h2>
            <p>Address : 123 Main Street, Chicago, IL 60601, United States</p>
            <p>Phone-Number : (312) 555‑1234</p>
            <p>Email : contact@littlelemonchicago.com</p>
        </div>
        <div className="footer-div">
            <h2>Social-Media Links</h2>
            <p>Facebook:  https : //www.facebook.com/LittleLemonChicago</p>
            <p>Instagram: https : //www.instagram.com /LittleLemonChicago</p>
            <p>TikTok: https : //www.tiktok.com/@LittleLemonChicago</p>
        </div>
    </section>
    );
}
export default Footer;
