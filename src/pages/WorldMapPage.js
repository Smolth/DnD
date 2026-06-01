import { useWorldMap, useZones } from '../context';

export default function WorldMapPage() {
  const { worldMap } = useWorldMap();
  const { zones } = useZones();

  return (
    <div className="page world-map-page">
      <header className="page-header">
        <h1>{worldMap.title}</h1>
        <p className="page-header__lead">{worldMap.description}</p>
      </header>

      <div className="world-map-container">
        <img
          src={worldMap.image}
          alt="Карта Артена"
          className="world-map-image"
        />
      </div>

      <section className="panel">
        <h2>Здания</h2>
        <ol className="regions-list">
          {worldMap.buildings.map((r) => (
            <li key={r.id}>
              <strong>{r.name}</strong> — {r.address} - {r.description}
            </li>
          ))}
        </ol>
      </section>

      <section className="panel">
        <h2>Игровые зоны</h2>
        <div className="regions-list">
          {zones.map((r) => (
            <section className='zone' key={r.id}>
              <img src={r.image} alt={r.name} className="character-portrait" />
              <span><strong>{r.name}</strong> — {r.description}</span>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
