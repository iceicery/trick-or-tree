import { useState, React } from 'react';
import './CodeEnter.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import map from '../../images/map-marked.svg';
import Tips from '../Tips/Tips';
import home from '../../images/home-w.svg';
import award from '../../images/award.svg';
import redo from '../../images/redo.svg';
import { Link } from 'react-router-dom';
import { treepins } from '../../data/TreeHuntMap';
const ssnAry = [];
treepins.map((item) => ssnAry.push(item.code));

export default function CodeEnter({ isTipsOpen, toggleTips, handleTree }) {
  const numOfFields = 4;
  const [ssnValues, setValue] = useState([]);

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  const isValid = ssnAry.some((item) => arrayEquals(item, ssnValues));

  function handleChange(e) {
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
    setValue([...ssnValues, value]);
  }

  function handleReset(event) {
    event.preventDefault();
    setValue([]);
    [1, 2, 3, 4].map(
      (i) => (document.querySelector(`input[name=ssn-${i}]`).value = '')
    );
  }

  function handleGo() {
    const oneTree = treepins.filter((treepin) =>
      arrayEquals(treepin.code, ssnValues)
    );
    handleTree(oneTree[0]);
  }

  return (
    <section className="codeenter">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <Link to="/" className="codeenter__button-home">
        <img src={home} alt="go home" className="championmap__button-img" />
      </Link>
      <h2 className="codeenter__title">
        <span className="codeenter__cap">Welcome! </span>Get ready to indentify
        the tree! Click lightbulb to get tips.
      </h2>
      <button className="coddenter__button-tip" onClick={toggleTips}>
        <img
          src={lightbulb}
          alt="got to tips"
          className="coddenter__button-img"
        />
      </button>
      <h2 className="codeenter__title">Get tree hunt map.</h2>
      <Link to="/treehunt-map" className="coddenter__button-tip">
        <img
          src={map}
          alt="go to tree hunt map"
          className="coddenter__button-img-l"
        />
      </Link>
      <h2 className="codeenter__title">See badges you earned</h2>
      <Link to="/badge" className="coddenter__button-tip">
        <img
          src={award}
          alt="go to tree hunt map"
          className="coddenter__button-img-l"
        />
      </Link>
      <h2 className="codeenter__title">Enter Four Digit Code</h2>
      <form className="codeenter__form">
        <div className="codeenter__input-box">
          <input
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
            name="ssn-4"
            maxLength={1}
            size="1"
            min="0"
            max="9"
            pattern="[0-9]{1}"
            className="codeenter__input"
            onChange={handleChange}
          />
          <button className="codeenter__button-redo" onClick={handleReset}>
            <img src={redo} alt="reset the code" style={{ width: 20 }} />
          </button>
        </div>
        <div className="codeenter__go-box">
          <Link to="/TreeHunt">
            <button
              className="codeenter__button"
              disabled={!isValid}
              onClick={handleGo}
            >
              GO
            </button>
          </Link>
          <div className={isValid ? 'hidden' : 'codeenter__error'}>
            <div className="codeenter__arrow-up"></div>
            Enter Valid Code.
          </div>
        </div>
      </form>
    </section>
  );
}
