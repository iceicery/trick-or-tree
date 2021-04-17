import './ChampionCard.css';

export default function ChampionCard({
  img_url,
  name,
  family,
  sname,
  kingdom,
  Life,
  description,
  location,
  circumference,
  height,
}) {
  return (
    <div className="championcard">
      <div>
        <h2 className="championcard__title">{name}</h2>
        <div className="championcard__container">
          <img src={img_url} alt={name} className="championcard__img" />

          <div className="championcard__info-box">
            <p className="championcard__info">
              Location:<span>{location}</span>
            </p>
            <p className="championcard__info">
              Circumference:<span>{circumference}</span>ft
            </p>
            <p className="championcard__info">
              Height:<span>{height}</span>ft
            </p>
            <p className="championcard__info">
              Family:<span>{family}</span>
            </p>
            <p className="championcard__info">
              Scienctific name:
              <br />
              <span>{sname}</span>
            </p>
            <p className="championcard__info">
              Kingdom:<span>{kingdom}</span>
            </p>
            <p className="championcard__info">
              Life expectancy:
              <br />
              <span>{Life}</span>
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
