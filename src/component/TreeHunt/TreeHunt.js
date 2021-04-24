import './TreeHunt.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import microscope from '../../images/microscope.svg';
import left from '../../images/left.svg';
import right from '../../images/right.svg';
import medal from '../../images/medal.svg';
import Tips from '../Tips/Tips';
import home from '../../images/home-w.svg';
import Selection from '../Selection/Selection';
import {
  leafType,
  leafEdge,
  leafArrange,
  leafShape,
} from '../../data/LeafClass';
import { useState } from 'react';
import Result from '../Result/Result';
import { Link } from 'react-router-dom';
import BadgeCard from '../BadgeCard/BadgeCard';

export default function TreeHunt({
  toggleTips,
  isTipsOpen,
  tree,
  handleBadge,
  badges,
  toggleInfoOpen,
  infoOpen,
}) {
  const [selected, setSelected] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSelectPage = 2;
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isBadgeHad, setIsBadgeHad] = useState(false);

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  function toggleResultOpen() {
    setIsResultOpen(!isResultOpen);
  }

  function checkResult() {
    toggleResultOpen();
    if (tree.class.length !== selected.length) {
      setIsCorrect(false);
      return;
    } else if (tree.class.some((i) => !selected.includes(i))) {
      setIsCorrect(false);
      return;
    }
    setIsCorrect(true);
    if (badges.some((i) => arrayEquals(i.code, tree.code))) {
      setIsBadgeHad(true);
    } else {
      setIsBadgeHad(false);
    }
  }

  function getBadge() {
    if (!isBadgeHad) {
      handleBadge(tree);
    }
    console.log('no add');
  }

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
      {isCorrect ? (
        <Result
          text="Great observe! You identfied all the items and found:"
          plant={tree.name}
          image={medal}
          alt="medal"
          toggleResultOpen={toggleResultOpen}
          isResultOpen={isResultOpen}
        >
          {isBadgeHad && (
            <p style={{ color: 'red' }}>
              Good effort! You already got this badge.
            </p>
          )}
          <button className="result__button" onClick={toggleInfoOpen}>
            Learn {tree.name}
          </button>
          <BadgeCard
            badge={tree}
            infoOpen={infoOpen}
            toggleInfoOpen={toggleInfoOpen}
          />
          <Link to="/badge">
            <button className="result__button" onClick={getBadge}>
              Get Badge
            </button>
          </Link>
        </Result>
      ) : (
        <Result
          text="Try again, you can do it. Pick only one of each."
          image={microscope}
          alt="microscope"
          toggleResultOpen={toggleResultOpen}
          isResultOpen={isResultOpen}
        ></Result>
      )}

      <div className="treehunt__title-box">
        <h2 className="treehunt__title">Pick the best one</h2>
        <div className="treehunt__button-box">
          <button className="coddenter__button-tip" onClick={toggleTips}>
            <img src={lightbulb} alt="tips" className="coddenter__button-img" />
          </button>
          <Link to="/" className="treehunt__button-home">
            <img src={home} alt="go home" className="championmap__button-img" />
          </Link>
        </div>
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
            n={3}
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
          <button className="treehunt__button-check" onClick={checkResult}>
            Check
          </button>
        </div>
      </div>
    </section>
  );
}
