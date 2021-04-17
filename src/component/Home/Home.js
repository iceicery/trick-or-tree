import './Home.css';
import logo from '../../images/treelogoW.png';

export default function Home() {
  return (
    <section className="home">
      <div className="home__logo-box">
        <img src={logo} alt="Alabama trees logo" className="home__logo" />
        <p className="home__text">Alabama Trick Or Tree</p>
        <p className="home__text">Explore | Learn | Play</p>
      </div>
      <div className="home__button-box">
        <button className="home__button home__button-1">Learn More</button>
        <button className="home__button home__button-2">
          AL Champion Trees Map
        </button>
        <button className="home__button home__button-3">Local Tree Hunt</button>
      </div>
    </section>
  );
}
