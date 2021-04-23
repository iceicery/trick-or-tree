import './Result.css';
import close from '../../images/times-solid.svg';

export default function Result({
  text,
  plant,
  image,
  alt,
  children,
  toggleResultOpen,
  isResultOpen,
}) {
  return (
    <div className={isResultOpen ? 'result' : 'hidden'}>
      <button className="tips__button-close">
        <img
          src={close}
          alt="close"
          className="tips__button-img"
          onClick={toggleResultOpen}
        />
      </button>
      <img src={image} alt={alt} className="result__img" />
      <h2 className="result__text">{text}</h2>
      <h2 className="result__name">{plant}</h2>
      {children}
    </div>
  );
}
