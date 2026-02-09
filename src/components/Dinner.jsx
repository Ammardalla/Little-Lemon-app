import BackButton from "./BackButton";

function Dinner(){
    return(
        <section id="dinner">
          <BackButton/>
           <h1 className="menu-meal-h1">🍽️ Dinner (Cena)</h1>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Risotto ai Fungh</h2>
            <span className="meal-span">Price: $18</span>
            </div>
            <p className="meal-p">Creamy Arborio rice is cooked slowly<br/>
            with fresh mushrooms and onion.<br/>
            Parmesan and butter<br/>
            add richness and depth.</p>
            <img src={`${process.env.PUBLIC_URL}/img/risotto.webp`} alt="risotto" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Osso Buco</h2>
            <span className="meal-span">Price: $25</span>
            </div>
            <p className="meal-p">Tender veal shanks are braised<br/>
            in white wine and tomato sauce.<br/>
            Fresh herbs and gremolata<br/>
            give it a classic flavor.</p>
            <img src={`${process.env.PUBLIC_URL}/img/osso-buco.jpg`} alt="osso buca" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Seafood Linguine</h2>
            <span className="meal-span">Price: $22</span>
            </div>
            <p className="meal-p">Linguine pasta is served with shrimp, mussels,<br/>
            and clams cooked in garlic and olive oil.<br/>
            It is light, fresh,<br/>
            and full of ocean flavor.</p>
            <img src={`${process.env.PUBLIC_URL}/img/Seafood-linguine.jpg`} alt="Seafood linguine" className="meal-img"/>
          </div>
          <div className="meal">
            <div>
            <h2 className="meal-h2">Eggplant Parmigiana</h2>
            <span className="meal-span">Price: $17</span>
            </div>
            <p className="meal-p">Layers of fried eggplant are baked<br/>
            with tomato sauce and mozzarella.<br/>
            Parmesan and fresh basil<br/>
            finish this hearty vegetarian dish.</p>
            <img src={`${process.env.PUBLIC_URL}/img/Eggplant-parmigiana.jpg`} alt="Eggplant Parmigiana" className="meal-img"/>
          </div>

        </section>
    );
}
export default Dinner;