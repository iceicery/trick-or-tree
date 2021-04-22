import './Badge.css';
import badge1 from '../../images/badgeBB.png';
import badge2 from '../../images/badgeG.png';
import badge3 from '../../images/badgeO.png';
import badge4 from '../../images/badgeY.png';
import home from '../../images/home.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Badge({ badges }) {
  useEffect(() => {
    localStorage.setItem('badgeCard', JSON.stringify(badges));
  }, [badges]);
  function getBadgeImg(i) {
    switch (i % 4) {
      case 0:
        return badge1;
      case 1:
        return badge2;

      case 2:
        return badge3;

      default:
        return badge4;
    }
  }
  return (
    <section className="badge">
      <Link to="/" className="badge__button-home">
        <img src={home} alt="go home" className="championmap__button-img" />
      </Link>
      <h2>You Earned {badges.length} Badges!</h2>
      <Link to="/code-enter">
        <button className="badge__button">More tree hunt</button>
      </Link>
      <ul className="badge__list">
        {badges.map((badge, i) => (
          <li className="badge__list-item" key={i}>
            <img className="badge__list-out" src={getBadgeImg(i)} alt="badge" />
            <img
              className="badge__list-in"
              src={badge.image}
              alt={badge.name}
            />
            <p className="badge__list-name">{badge.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
