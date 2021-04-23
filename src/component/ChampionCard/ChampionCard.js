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
              County:<span> {location}</span>
              <br />
              Subspecies:<span> {subspecies}</span>
              <br />
              Circumference:<span> {circumference}</span> in
              <br />
              Height:<span> {height}</span> ft
              <br />
              Spread:<span> {spread}</span> ft
              <br />
              Total Point:<span> {total_points}</span>
              <br />
              compare with the champion:
            </p>
            <div className="championcard__point-compare">
              <div
                style={{ width: `calc(${total_points} / 479 * 100px)` }}
                className="championcard__point-comare-in"
              ></div>
            </div>
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
