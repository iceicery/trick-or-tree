import { useState, React } from 'react';
import './CodeEnter.css';

export default function CodeEnter() {
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
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
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
  return (
    <section className="codeenter">
      <h1 className="codeenter__title">Enter Four Digit Code</h1>
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
