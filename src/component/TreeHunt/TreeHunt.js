import './TreeHunt.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import left from '../../images/left.svg';
import right from '../../images/right.svg';
import Tips from '../Tips/Tips';
import Selection from '../Selection/Selection';
import {
  leafType,
  leafEdge,
  leafArrange,
  leafShape,
} from '../../data/LeafClass';
import { useState } from 'react';

export default function TreeHunt({ toggleTips, isTipsOpen }) {
  const [selected, setSelected] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSelectPage = 2;

  function moveRight() {
    if (currentIndex >= totalSelectPage - 1) {
      setCurrentIndex(totalSelectPage - 1);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  function moveLeft() {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  }

  function handleSelect(newselect) {
    setSelected([...selected, newselect]);
  }
  function handleUnselect(unselectItem) {
    setSelected(selected.filter((i) => i !== unselectItem));
  }

  return (
    <section className="treehunt">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <div className="treehunt__title-box">
        <h2 className="treehunt__title">Pick the best one</h2>
        <button className="coddenter__button-tip" onClick={toggleTips}>
          <img src={lightbulb} alt="tips" className="coddenter__button-img" />
        </button>
      </div>
      <div
        className="treehunt__container"
        style={{
          transform: `translateX(calc(100vw * -${currentIndex}))`,
        }}
      >
        <div className="treehunt__items">
          <Selection
            title={leafType.title}
            choices={leafType.choices}
            n={4}
            selected={selected}
            handleSelect={handleSelect}
            handleUnselect={handleUnselect}
          />
          <Selection
            title={leafEdge.title}
            choices={leafEdge.choices}
            n={6}
            selected={selected}
            handleSelect={handleSelect}
            handleUnselect={handleUnselect}
          />
          <Selection
            title={leafArrange.title}
            choices={leafArrange.choices}
            n={2}
            selected={selected}
            handleSelect={handleSelect}
            handleUnselect={handleUnselect}
          />
          <button className="treehunt__button" onClick={moveRight}>
            Next
            <img
              src={right}
              alt="next right"
              className="treehunt__button-img"
            />
          </button>
        </div>
        <div className="treehunt__items">
          <Selection
            title={leafShape.title}
            choices={leafShape.choices}
            n={4}
            selected={selected}
            handleSelect={handleSelect}
            handleUnselect={handleUnselect}
          />
          <button className="treehunt__button" onClick={moveLeft}>
            <img src={left} alt="next left" className="treehunt__button-img" />
            Back
          </button>
          <button className="treehunt__button-check">Check</button>
        </div>
      </div>
    </section>
  );
}
