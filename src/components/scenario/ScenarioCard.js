import { Link } from 'react-router-dom';

export default function ScenarioCard({ scenario }) {
  return (
    <article className="scenario-card">
      <Link to={`/scenario/${scenario.slug}`} className="scenario-card__link">
        <div className="scenario-card__image-wrap">
          <img src={scenario.coverImage} alt="" className="scenario-card__image" />
        </div>
        <div className="scenario-card__body">
          <h2 className="scenario-card__title">{scenario.title}</h2>
          <p className="scenario-card__desc">{scenario.shortDescription}</p>
        </div>
      </Link>
    </article>
  );
}
