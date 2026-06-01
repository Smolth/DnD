import { Link, useParams } from 'react-router-dom';
import { usePlayers } from '../context';

const statLabels = {
  strength: 'Сила',
  dexterity: 'Ловкость',
  constitution: 'Телосложение',
  intelligence: 'Интеллект',
  wisdom: 'Мудрость',
  charisma: 'Харизма',
};

export default function PlayerDetailPage() {
  const { id } = useParams();
  const { getPlayerById } = usePlayers();
  const player = getPlayerById(id);

  if (!player) {
    return (
      <div className="page">
        <p className="empty-state">Игрок не найден.</p>
        <Link to="/players">← К списку игроков</Link>
      </div>
    );
  }

  return (
    <div className="page character-page">
      <nav className="breadcrumb">
        <Link to="/players">Игроки</Link>
        <span aria-hidden="true"> / </span>
        <span>{player.characterName}</span>
      </nav>

      <div className="character-layout">
        <aside className="character-aside">
          <img
            src={player.portrait}
            alt={player.characterName}
            className="character-portrait"
          />
          <p className="character-role">
            Игрок: <strong>{player.playerName}</strong>
          </p>
          <p className="character-meta">
            {player.race} · {player.class} · уровень {player.level}
          </p>
          {player.alignment && (
            <p className="character-meta">Мировоззрение: {player.alignment}</p>
          )}
          <p className="character-meta">
            HP {player.hp} · AC {player.ac}
          </p>
        </aside>
        <div className="character-main">
          <h1>{player.characterName}</h1>
          <p className="character-desc">{player.backstory}</p>

          <section className="panel panel--compact">
            <h2>Характеристики</h2>
            <dl className="stats-dl stats-dl--six">
              {Object.entries(player.stats).map(([key, value]) => (
                <div key={key}>
                  <dt>{statLabels[key] || key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="panel panel--compact">
            <h2>Снаряжение</h2>
            <ul className="simple-list">
              {player.equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel panel--compact">
            <h2>Навыки</h2>
            <ul className="simple-list simple-list--inline">
              {player.skills.map((skill) => (
                <li key={skill}>
                  <span className="badge">{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
