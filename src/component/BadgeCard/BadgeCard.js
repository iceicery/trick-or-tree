import './BadgeCard.css';
import close from '../../images/times-solid.svg';

export default function BadgeCard({ badge, toggleInfoOpen, infoOpen }) {
  return (
    <section className={infoOpen ? 'badgecard' : 'hidden'}>
      <button className="tips__button-close">
        <img
          src={close}
          alt="close"
          className="tips__button-img"
          onClick={toggleInfoOpen}
        />
      </button>
      <h2 className="badgecard__title">{badge.name}</h2>
      <img src={badge.image} alt={badge.name} className="badgecard__img" />
      <p className="badgecard__description">{badge.description}</p>
    </section>
  );
}
