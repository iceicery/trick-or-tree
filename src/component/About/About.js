import './About.css';

export default function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <p>
        Alabama has over 140 state champion trees on the books and is home to
        four national champions. Go to the champion tree map to explore them.
      </p>
      <button className="home__button home__button-2">
        AL Champion Trees Map
      </button>
      <p>
        Want to know more about your neiborhood alabama native trees? Go to the
        Neiborhood Tree hunt! Find the tree with QR tag, observe with us and
        identify the tree. You could know more about them and earn badges.You
        could be a dendrologist.
      </p>
      <button className="home__button home__button-3">Local Tree Hunt</button>
    </section>
  );
}
