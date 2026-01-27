import BackButton from "./BackButton";

function Lunch(){
    return(
        <section id="lunch">
          <BackButton/>
           <h1 className="menu-meal-h1">🍝 Lunch (Pranzo)</h1>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Spaghetti Carbonara</h2>
            <span className="meal-span">Price: $14</span>
            </div>
            <p className="meal-p">Spaghetti is tossed with eggs and parmesan<br/>
            and mixed with crispy pancetta.<br/>
            A touch of black pepper<br/>
            finishes this classic Italian dish.</p>
            <img src="/img/Spaghetti.jpg" alt="Spaghetti Carbonara" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Margherita Pizza</h2>
            <span className="meal-span">Price: $12</span>
            </div>
            <p className="meal-p">Our pizza is made from fresh dough<br/>
            spread with tomato sauce and mozzarella.<br/>
            Fresh basil and a drizzle of olive oil<br/>
            make it simple and delicious.</p>
            <img src="/img/Margherita.jpg" alt="Margherita Pizza" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Lasagna al Forno</h2>
            <span className="meal-span">Price: $16</span>
            </div>
            <p className="meal-p">Layers of pasta sheets are baked<br/>
            with rich beef ragu and creamy béchamel sauce.<br/>
            Parmesan cheese is sprinkled on top<br/>
            for a golden finish.</p>
            <img src="/img/Lasagna-al-Forno.jpg" alt="Lasagna al Forno" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Minestrone Soup</h2>
            <span className="meal-span">Price: $10</span>
            </div>
            <p className="meal-p">A hearty soup of seasonal vegetables<br/>
            with beans and pasta.<br/>
            Olive oil and herbs add flavor,<br/>
            making it light but filling.</p>
            <img src="/img/MinestroneSoup.jpg" alt="Minestrone Soup" className="meal-img"/>
          </div>

        </section>
    );
}
export default Lunch;