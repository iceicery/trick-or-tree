import { useState } from 'react';
import './Item.css';

export default function Item({
  choice,
  selected,
  handleSelect,
  handleUnselect,
}) {
  const [itemClass, setItemClass] = useState('selection__list-unselect');

  function toggleSelect() {
    if (selected.includes(choice.description)) {
      handleUnselect(choice.description);
      setItemClass('selection__list-unselect');
      return;
    }
    handleSelect(choice.description);
    setItemClass('selection__list-select');
  }
  return (
    <li className="selection__list-item" onClick={toggleSelect}>
      <img
        className={`${itemClass} selection__img`}
        src={choice.image}
        alt={choice.description}
      />
      <p className="selection__description">{choice.description}</p>
    </li>
  );
}
