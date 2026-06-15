import { useParams } from 'react-router-dom';
import { useWorldMap, useZones } from '../context';
import { useEffect } from 'react';
//import 'leaflet/dist/leaflet.css';

export default function WorldMapPage() {
  const { worldMap } = useWorldMap();
  const { zones } = useZones();
  const { link } = useParams()

  const scrollToDescription = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.style.transition = 'background-color 0.5s';
      element.style.backgroundColor = '#fff3cd';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 1500);
    }
  };

  useEffect(() => {
    if (link) {
     console.log(link)
      setTimeout(() => {
        scrollToDescription(link);
      }, 100);
    }
  }, [])

  return (
    <div className="page world-map-page">
      <header className="page-header">
        <h1>{worldMap.title}</h1>
        <p className="page-header__lead">{worldMap.description}</p>
      </header>

      <div className="world-map-container">
        <img
          src={worldMap.image}
          alt="Карта королевства"
          className="world-map-image"
        />
        <img
          src={worldMap.city}
          alt="Карта Артена"
          className="world-map-image"
        />

        {worldMap.buildings.map((building) => (
          building.coords && (
            <button
              key={building.id}
              className="map-marker"
              style={{
                left: `${building.coords[0]}%`,
                top: `${building.coords[1]}%`
              }}
              onClick={() => scrollToDescription(`building-${building.id}`)}
              title={building.name}
            >
              <span className="marker-dot">{building.id}</span>
              <span className="marker-label">{building.name}</span>
            </button>
          )
        ))}
      </div>

      <section className="panel">
        <h2>Здания</h2>
        <ol className="regions-list">
          {worldMap.buildings.map((r) => (
            <li key={r.id} id={`building-${r.id}`}>
              <strong>{r.name}</strong> {'(' + r.open + ')'} — {r.description}
            </li>
          ))}
        </ol>
      </section>

      <section className="panel">
        <h2>Игровые зоны</h2>
        <div className="regions-list">
          {zones.map((r) => (
            <section className='zone' key={r.id} id={`zone-${r.id}`}>
              <img src={r.image} alt={r.name} className="character-portrait" />
              <span><strong>{r.name}</strong> — {r.description}</span>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
