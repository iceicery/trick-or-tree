import './Selection.css';

export default function Selection({ title, choices }) {
  return (
    <section className="selection">
      <h2>{title}</h2>
      <ul>
        {choices.map((choice, i) => (
          <li key={i}>
            <img src={choice.image} alt={choice.alt} />
            <p>{choice.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
