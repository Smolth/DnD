import { useScenarios } from '../context';
import ScenarioRankSection from '../components/scenario/ScenarioRankSection';

export default function HomePage() {
  const { ranks, getScenariosByRank } = useScenarios();

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Сценарии кампании</h1>
      </section>

      <div className="rank-sections">
        {ranks.map(({ id, label }) => (
          <ScenarioRankSection
            key={id}
            label={label}
            scenarios={getScenariosByRank(id)}
          />
        ))}
      </div>
    </div>
  );
}
