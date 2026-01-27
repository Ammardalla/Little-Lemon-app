import BackButton from "./BackButton";

function Breakfast(){
    return(
        <section id="breakfast">
          <BackButton/>
           <h1 className="menu-meal-h1">🍳 Our Breakfast (Colazione)</h1>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Frittata</h2>
            <span className="meal-span">Price: $7</span>
            </div>
            <p className="meal-p">Our Frittata is made from fresh eggs<br/>
            mixed with spinach and parmesan.<br/>
            Cherry tomatoes are added for flavor<br/>
            and seasoned lightly with salt and pepper.</p>
            <img src="/img/Frittata.jpg" alt="Frittata" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Cornetto</h2>
            <span className="meal-span">Price: $5</span>
            </div>
            <p className="meal-p">This buttery croissant is baked fresh<br/>
            and filled with jam or chocolate.<br/>
            It is soft inside and golden outside.<br/>
            Perfect with a morning coffee.</p>
            <img src="/img/Cornetto.WEBP" alt="Cornetto" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Caprese Toast</h2>
            <span className="meal-span">Price: $6</span>
            </div>
            <p className="meal-p">Our Caprese Toast is made from toasted bread<br/>
              topped with fresh mozzarella and tomatoes.<br/>
              A sprinkle of basil and olive oil<br/>
              makes it refreshing and light.</p>
            <img src="/img/Caprese.jpg" alt="Caprese" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Italian Yogurt</h2>
            <span className="meal-span">Price: $5</span>
            </div>
            <p className="meal-p">Our Caprese Toast is made from toasted bread<br/>
              topped with fresh mozzarella and tomatoes.<br/>
              A sprinkle of basil and olive oil<br/>
              makes it refreshing and light.</p>
            <img src="/img/ItalianYogurt.jpg" alt="ItalianYogurt" className="meal-img"/>
          </div>

        </section>
    );
}
export default Breakfast;