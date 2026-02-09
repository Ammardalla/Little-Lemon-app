function About() {
  return (
    <section id="about">
      <div id="about-info">
      <h1>Little Lemone</h1>
      <h2 id="about-h2">Chicago</h2>
      <h3 id="about-h3">We are a family-owned
      Mediterranean restaurant,
      led by Mario, an Italian chef
      who brings cherished family
      recipes and years of experience
      cooking in Italy to every dish.

      Together with his brother Adrian,
      who oversees our marketing and
      helped expand the menu to include
      diverse Mediterranean flavors,
      we create food made with passion
      and tradition.</h3>
      </div>
      <img id="about-img2" src={`${process.env.PUBLIC_URL}/img/MarioandAdrianB.jpg`} alt="An athor photo for the restaurant owner Mario and Areaian"></img>
      <img id="about-img" src={`${process.env.PUBLIC_URL}/img/MarioandAdrianA.jpg`} alt="A photo for the restaurant owner Mario and Areaian"></img>
    </section>
  );
}
export default About;