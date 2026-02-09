import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const goToBooking = () => {
    navigate("/BookingPage");
    };
    return(
        <header>
            <div id="headInf">
                <h1>Little Lemone</h1>
                <h2 id="header-h2">Chicago</h2>
                <h3>
                We are a family owned<br />
                Mediterranean restaurant,<br />
                focused on traditional<br/>
                recipes served with a modern<br/>
                twist.
                </h3>
                <button id="header-button" onClick={goToBooking}>Reserve a Table</button>
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/restauranfood.jpg`} alt="a cheif holds restauranfood" id="headImg"/>
        </header>
    );
}
export default Header;