import './Tips.css';
import close from '../../images/times-solid.svg';

export default function Tips({ isTipsOpen, toggleTips }) {
  return (
    <section className={isTipsOpen ? 'tips' : 'hidden'}>
      <button className="tips__button-close" onClick={toggleTips}>
        <img src={close} alt="close" className="tips__button-img" />
      </button>
      <h1>Tips for Indentifing Trees</h1>
      <ul>
        <li>
          Always start at the beginning of the key and follow it step by step.
        </li>
        <li>
          Always read both choices, even if the first choice sounds correct. The
          second one may sound even better.
        </li>
        <li>
          If the choice between two statements is not clear, or you don’t have
          enough information to make the choice, follow both choices to their
          conclusions. Then, try to choose between the descriptions of the two
          resulting answers.
        </li>
        <li>
          When measurements are given, as in the size of the leaves, don’t
          guess. Use a ruler.
        </li>
        <li>
          Become familiar with the botanical terms used to describe trees.
        </li>
      </ul>
      <p>&copy; ALABAMA A&M AND AUBURN UNIVERSITIES</p>
    </section>
  );
}
