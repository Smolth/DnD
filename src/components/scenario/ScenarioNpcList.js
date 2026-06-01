import { Link } from 'react-router-dom';
import { useMasterCharacters } from '../../context';

export default function ScenarioNpcList({ masterCharacterIds }) {
  const { getMasterCharacterById } = useMasterCharacters();

  const masterChars = masterCharacterIds
    .map(getMasterCharacterById)
    .filter(Boolean);

  return (
    <section className="panel">
      <h2>Персонажи мастера</h2>
      <ul className="npc-grid">
        {masterChars.map((npc) => (
          <li key={npc.id}>
            <Link to={`/master/${npc.id}`} className="npc-card">
              <img src={npc.portrait} alt="" className="npc-card__img" />
              <div>
                <strong>{npc.name}</strong>
                <span className="npc-card__role">{npc.role}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
