import './TreeHunt.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import map from '../../images/map-marked.svg';
import Tips from '../Tips/Tips';
import smooth from '../../images/smooth-leaf.PNG';
import Selection from '../Selection/Selection';
import TreeHuntMap from '../TreeHuntMap/TreeHuntMap';

const leafTypes = {
  title: 'Leaf Type',
  choices: [
    {
      image: smooth,
      description: 'Smooth',
    },
    {
      image: smooth,
      description: 'Smooth',
    },
    {
      image: smooth,
      description: 'Smooth',
    },
    {
      image: smooth,
      description: 'Smooth',
    },
  ],
};

export default function TreeHunt({
  toggleTips,
  isTipsOpen,
  toggleMap,
  isMapOpen,
}) {
  return (
    <section className="treehunt">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <TreeHuntMap toggleMap={toggleMap} isMapOpen={isMapOpen} />
      <div className="treehunt__title-box">
        <h2 className="treehunt__title">Pick the best one</h2>
        <button className="coddenter__button-tip" onClick={toggleTips}>
          <img src={lightbulb} alt="tips" className="coddenter__button-img" />
        </button>
        <button className="coddenter__button-tip" onClick={toggleMap}>
          <img
            src={map}
            alt="go to tree hunt map"
            className="coddenter__button-img-l"
          />
        </button>
      </div>
      <Selection title={leafTypes.title} choices={leafTypes.choices} />
    </section>
  );
}
