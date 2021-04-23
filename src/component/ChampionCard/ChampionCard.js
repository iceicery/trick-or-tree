import './ChampionCard.css';

export default function ChampionCard({
  img_url,
  name,
  subspecies,
  spread,
  description,
  location,
  circumference,
  height,
  total_points,
}) {
  return (
    <div className="championcard">
      <div>
        <h2 className="championcard__title">{name}</h2>
        <div className="championcard__container">
          <img src={img_url} alt={name} className="championcard__img" />

          <div className="championcard__info-box">
            <p className="championcard__info">
              County:<span>{location}</span>
            </p>
            <p className="championcard__info">
              Circumference:<span>{circumference}</span> in
            </p>
            <p className="championcard__info">
              Height:<span>{height}</span> ft
            </p>
            <p className="championcard__info">
              Spread:<span>{spread}</span> ft
            </p>
            <p className="championcard__info">
              Total Points:<span>{total_points}</span>
            </p>

            <p className="championcard__info">
              Subspecies:<span>{subspecies}</span>
            </p>
          </div>
        </div>
        <p className="championcard__description">{description}</p>
      </div>
      <div className="championcard__compare">
        <div
          style={{ height: `calc(${height} / 6 * 20px)` }}
          className="championcard__compare-tree"
        ></div>
        <div className="championcard__compare-kid"></div>
      </div>
    </div>
  );
}
