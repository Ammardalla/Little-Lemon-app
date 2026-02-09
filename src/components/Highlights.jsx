import { useNavigate } from "react-router-dom";

function Highlights() {
    const navigate = useNavigate();
    const goToOrder = () => {
    navigate("/NotCooded");
    };
  return (
    <>
    <div id="main-div">
    <p id="header-p">This weeks specials !</p>
    <button id="highlights-button" onClick={goToOrder}>Online menu</button>
    </div>
    <div id="main-specials">
    <div className="specials">
      <img src={`${process.env.PUBLIC_URL}/img/greek salad.jpg`} alt="greek salad" />
      <div class="menu-item">
        <span class="item-name">Greek Salad</span>
        <span class="item-price">$12.99</span>
      </div>
      <p>The famous greek salad of<br/>
      crispy lettuce, peppers, olives<br/>
      and our Chicago style feta<br/>
      cheese, garnished with
      <br/>crunchy garlic and eosemary<br/>
      croutons .</p>
      <p>Order a delivery  +1</p>
    </div>
        <div className="specials">
      <img src={`${process.env.PUBLIC_URL}/img/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg`} alt="Brucheta" />
      <div class="menu-item">
        <span class="item-name">Brucheta</span>
        <span class="item-price">$5.99</span>
      </div>
     <p>Our Bruschetta is made from<br/>
      grilled brea that has been<br/>
      smeared with garlic and<br/>
      seasoned with salt and olive
      <br/>oil . <br /> <br /></p>
      <p>Order a delivery  +1</p>
    </div>
            <div className="specials">
      <img src={`${process.env.PUBLIC_URL}/img/lemon dessert.jpg`} alt="lemon dessert" />
      <div class="menu-item">
        <span class="item-name">Lemone desert</span>
        <span class="item-price">$5.00</span>
      </div>
      <p>This comes straight from<br/>
      grandma’s recipe book, every<br/>
      last ingredient has been<br/>
      sourced and is as authentic
      <br/>as can be imagined . <br /> <br /></p>
      <p>Order a delivery  +1</p>
    </div>
    </div>
    </>  
  );
}
export default Highlights;