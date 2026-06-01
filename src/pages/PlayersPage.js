import { Link } from 'react-router-dom';
import { usePlayers } from '../context';

export default function PlayersPage() {
  const { players } = usePlayers();

  return (
    <div className="page players-page">
      <header className="page-header">
        <h1>Игроки компании</h1>
        <p className="page-header__lead">
          Зарегистрированные участники и их персонажи.
        </p>
      </header>

      <ul className="players-grid">
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`} className="player-card">
              <img src={player.portrait} alt="" className="player-card__img" />
              <div className="player-card__body">
                <span className="player-card__user">{player.playerName}</span>
                <h2>{player.characterName}</h2>
                <p>
                  {player.race} · {player.class} · ур. {player.level}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
