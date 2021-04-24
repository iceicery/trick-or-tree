import './Compare.css';

export default function Compare({ twotrees }) {
  function getGeneColor(i) {
    switch (i) {
      case 0:
        return 'red';
      case 1:
        return 'orange';

      case 2:
        return 'blue';

      default:
        return 'green';
    }
  }

  return (
    <section className="compare">
      <h2 className="compare__title">{twotrees[0].name}</h2>
      <div>
        {twotrees[0].genes.map((gene, i) => (
          <div key={i} style={{ backGroundColor: getGeneColor(gene) }}></div>
        ))}
      </div>
      <h2 className="compare__title">{twotrees[1].name}</h2>
      <div>
        {twotrees[1].genes.map((gene, i) => (
          <div key={i} style={{ backGroundColor: getGeneColor(gene) }}></div>
        ))}
      </div>
    </section>
  );
}
