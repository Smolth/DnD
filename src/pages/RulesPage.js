import { useRules } from '../context';

export default function RulesPage() {
  const { rulesSummary } = useRules();

  return (
    <div className="page rules-page">
      <header className="page-header">
        <h1>{rulesSummary.title}</h1>
        <p className="page-header__lead">
          Краткая сводка для игроков и мастера. Полные правила — по PHB/DMG вашей редакции.
        </p>
      </header>

      <div className="rules-sections">
        {rulesSummary.sections.map((section) => (
          <section key={section.title} className="panel panel--compact">
            <h2>{section.title}</h2>
            <ul className="rules-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
