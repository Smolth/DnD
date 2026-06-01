import ScenarioCard from './ScenarioCard';

export default function ScenarioRankSection({ label, scenarios }) {
  return (
    <section className="rank-section">
      <h2 className="rank-section__title">{label}</h2>
      {scenarios.length > 0 ? (
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      ) : (
        <p className="rank-section__empty">В этой категории пока нет сценариев.</p>
      )}
    </section>
  );
}
