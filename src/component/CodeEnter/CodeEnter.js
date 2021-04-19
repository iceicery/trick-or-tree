import { useState, React } from 'react';
import './CodeEnter.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import map from '../../images/map-marked.svg';
import Tips from '../Tips/Tips';
import { Link } from 'react-router-dom';
import TreeHuntMap from '../TreeHuntMap/TreeHuntMap';

export default function CodeEnter({
  isTipsOpen,
  toggleTips,
  isMapOpen,
  toggleMap,
}) {
  console.log(isTipsOpen);
  const numOfFields = 4;
  const [ssnValues, setValue] = useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
  });
  console.log(ssnValues);

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split('-');
    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < numOfFields) {
        const nextSibling = document.querySelector(
          `input[name=${fieldName}-${parseInt(fieldIndex, 10) + 1}]`
        );
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
    setValue({
      ...value,
      [`ssn${fieldIndex}`]: value,
    });
  };
  console.log(isMapOpen);
  return (
    <section className="codeenter">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <TreeHuntMap isMapOpen={isMapOpen} toggleMap={toggleMap} />
      <h2 className="codeenter__title">
        <span className="codeenter__cap">Welcome! </span>Get ready to indentify
        the tree! You could get tips by clicking lightbulb button.
      </h2>
      <button className="coddenter__button-tip" onClick={toggleTips}>
        <img
          src={lightbulb}
          alt="got to tips"
          className="coddenter__button-img"
        />
      </button>
      <h2 className="codeenter__title">
        You could get tree hunt map by clicking map button.
      </h2>
      <button className="coddenter__button-tip" onClick={toggleMap}>
        <img
          src={map}
          alt="go to tree hunt map"
          className="coddenter__button-img-l"
        />
      </button>
      <h2 className="codeenter__title">Enter Four Digit Code</h2>
      <form className="codeenter__form">
        <input
          type="text"
          name="ssn-1"
          maxLength={1}
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ssn-2"
          maxLength={1}
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ssn-3"
          maxLength={1}
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ssn-4"
          maxLength={1}
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          onChange={handleChange}
        />
      </form>
      <Link to="/TreeHunt">
        <button className="codeenter__button">GO</button>
      </Link>
    </section>
  );
}
