import { useState, React } from 'react';
import './CodeEnter.css';

export default function CodeEnter() {
  const [value, setValue] = useState('');
  const [nextComponent, setNextComponent] = useState();
  console.log(nextComponent);
  function handleTextChange(e) {
    if (e.target.value.length <= 1) {
      setValue(e.target.value);
    }
    if (e.target.value.length === 1) {
      nextComponent.focus();
    }
  }
  return (
    <section className="codeenter">
      <h1 className="codeenter__title">Enter Four Digit Code</h1>
      <form className="codeenter__form">
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          onChange={handleTextChange}
          ref={(c) => setNextComponent(c)}
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          ref={(c) => setNextComponent(c)}
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          ref={(c) => setNextComponent(c)}
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
          className="codeenter__input"
          ref={(c) => setNextComponent(c)}
        />
      </form>
    </section>
  );
}
