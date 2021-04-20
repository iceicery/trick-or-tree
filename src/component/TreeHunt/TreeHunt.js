import './TreeHunt.css';
import lightbulb from '../../images/lightbulb-solid.svg';
import Tips from '../Tips/Tips';
import Selection from '../Selection/Selection';
import { leafType, leafEdge } from '../../data/LeafClass';

export default function TreeHunt({ toggleTips, isTipsOpen }) {
  return (
    <section className="treehunt">
      <Tips toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
      <div className="treehunt__title-box">
        <h2 className="treehunt__title">Pick the best one</h2>
        <button className="coddenter__button-tip" onClick={toggleTips}>
          <img src={lightbulb} alt="tips" className="coddenter__button-img" />
        </button>
      </div>
      <Selection title={leafType.title} choices={leafType.choices} n={4} />
      <Selection title={leafEdge.title} choices={leafEdge.choices} n={6} />
    </section>
  );
}
