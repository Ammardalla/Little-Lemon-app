import BackButton from "./BackButton";

function Dessert(){
    return(
        <section id="lunch">
          <BackButton/>
           <h1 className="menu-meal-h1">🍰 Dessert (Dolci)</h1>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Tiramisu</h2>
            <span className="meal-span">Price: $8</span>
            </div>
            <p className="meal-p">Ladyfingers are soaked in espresso<br/>
            and layered with mascarpone cheese.<br/>
            Dusting of cocoa<br/>
            makes this dessert rich and creamy.</p>
            <img src={`${process.env.PUBLIC_URL}/img/Tiramisu.jpg`} alt="Tiramisu" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Panna Cotta</h2>
            <span className="meal-span">Price: $7</span>
            </div>
            <p className="meal-p">Cream and sugar are gently cooked<br/>
            with gelatin and vanilla.<br/>
            Berry sauce is drizzled on top,<br/>
            making it smooth and sweet.</p>
            <img src={`${process.env.PUBLIC_URL}/img/PannaCotta.jpg`} alt="Panna Cotta" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Cannoli</h2>
            <span className="meal-span">Price: $6</span>
            </div>
            <p className="meal-p">Crispy pastry shells are filled<br/>
            with sweet ricotta and chocolate chips.<br/>
            They are crunchy on the outside<br/>
            and creamy inside.</p>
            <img src={`${process.env.PUBLIC_URL}/img/Cannoli.jpg`} alt="Cannoli" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Gelato</h2>
            <span className="meal-span">Price: $5</span>
            </div>
            <p className="meal-p">Our Italian gelato comes in classic flavors<br/>
            like vanilla, chocolate, pistachio, and strawberry.<br/>
            It is creamy, rich,<br/>
            and perfect for a refreshing treat.</p>
            <img src={`${process.env.PUBLIC_URL}/img/Gelato.webp`} alt="Gelato" className="meal-img"/>
          </div>

        </section>
    );
}
export default Dessert;