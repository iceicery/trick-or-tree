import { useState, React } from 'react';
import './CodeEnter.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import Tips from '../Tips/Tips';

export default function CodeEnter({ isTipsOpen, toggleTips }) {
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
  console.log(isTipsOpen);
  return (
    <section className="codeenter">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <h2 className="codeenter__title">
        <span className="codeenter__cap">Welcome! </span>Get ready to indentify
        the tree! You could get tips by clicking lightbulb button anytime.
      </h2>
      <button className="coddenter__button-tip" onClick={toggleTips}>
        <img src={lightbulb} alt="tips" className="coddenter__button-img" />
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
    </section>
  );
}
