import './Selection.css';

export default function Selection({ title, choices }) {
  return (
    <section className="selection">
      <h2 className="selection__title">{title}</h2>
      <ul className="selection__list">
        {choices.map((choice, i) => (
          <li className="selection__list-item" key={i}>
            <img
              className="selection__img"
              src={choice.image}
              alt={choice.description}
            />
            <p className="selection__description">{choice.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
