import './Tips.css';

export default function Tips() {
  return (
    <section className="tips">
      <h1>Tips for Indentifing Trees</h1>
      <ul>
        <li>
          Always start at the beginning of the key and follow it step by step.
          Each choice will refer you to the next step, which may be a number,
          another section in the key, or the conclusion or species. It is a good
          practice to write down your order of progress, such as 1 - 2 - 4. This
          will make it easier for you to find and correct mistakes
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
          Always look at several samples when keying a specimen. Key
          characteristics, especially leaves, can vary even on the same tree.
        </li>
        <li>
          When measurements are given, as in the size of the leaves, don’t
          guess. Use a ruler.
        </li>
        <li>
          Become familiar with the botanical terms used to describe trees. Terms
          used in this key are illustrated on pages 10 through 13.
        </li>
      </ul>
      <p>RESOUR from ALABAMA A&M AND AUBURN UNIVERSITIES</p>
    </section>
  );
}
