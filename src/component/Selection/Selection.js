import Item from '../Item/Item';
import './Selection.css';

export default function Selection({
  title,
  choices,
  n,
  selected,
  handleSelect,
  handleUnselect,
}) {
  return (
    <section className="selection">
      <h2 className="selection__title">{title}</h2>
      <ul
        className="selection__list"
        style={{ gridTemplateColumns: `repeat(${n},1fr)` }}
      >
        {choices.map((choice, i) => (
          <Item
            choice={choice}
            key={i}
            selected={selected}
            handleSelect={handleSelect}
            handleUnselect={handleUnselect}
          />
        ))}
      </ul>
    </section>
  );
}
