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

  function spasPlus(spas, label, bonus) {
    if (spas.includes(label)) return bonus
  }

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
          {player.alignment && (
            <p className="character-meta">Мировоззрение: {player.alignment}</p>
          )}
          <p className="character-meta">
            {player.race}
          </p>
          <p className="character-meta">
            {player.class} · уровень {player.level}
          </p>
          {player.speed && (
            <p className="character-meta">Скорость: {player.speed} футов</p>
          )}
          <p className="character-meta">
            HP: {player.hp} · Класс доспехов: {player.ac}
          </p>
          <p className="character-meta">
            Бонус мастерства: {player.bonus}
          </p>
           {player.influence && <p className="badge">Влияние в гильдии: {player.influence}</p>}
        </aside>

        <div className="character-main">
          <h1>{player.characterName}</h1>
          <div className="character-line character-block">
            <div className='actions character-line' style={{ padding: 0 }}>
              <span>x</span>
              <span>x</span>
            </div>
            <div className='actions character-line character-text'>
              <span>Здоровье: {player.hp}</span>
              <span>Кость хитов: {player.hc}</span>
              <span>Класс доспехов: {player.ac}</span>
              <span>Опыт: {player.xp}</span>
            </div>
            <div className='actions character-line'>
              <span>x</span>
              <span>x</span>
            </div>
          </div>

          <section className="panel--compact">
            <i className="character-desc">Возраст: {player.age}</i>
            <p className="character-desc"><strong>Языки:</strong> {player.lg}</p>
            <p className="character-desc">{player.backstory}</p>
          </section>

          <section className="panel panel--compact">
            <h2>Черты характера</h2>
            <ul className="simple-list simple-list--inline">
              <li key='characters'>
                <span>{player.features.characters}</span>
              </li>
              <li key='ideals'>
                <span><strong>Идеалы:</strong> {player.features.ideals}</span>
              </li>
              <li key='affections'>
                <span><strong>Привязанности:</strong> {player.features.affections}</span>
              </li>
              <li key='wickness'>
                <span><strong>Слабости:</strong> {player.features.wickness}</span>
              </li>
            </ul>
          </section>
          <section className='panel--compact'>
            <strong>Подкласс/Подтип</strong>
            <p className="character-desc">{player.classification}</p>
          </section>
          <section className="panel panel--compact">
            <h2>Характеристики</h2>
            <dl className="stats-dl stats-dl--six">
              {Object.entries(player.stats).map(([key, value]) => (
                <div key={key}>
                  <dt>{statLabels[key] || key}</dt>
                  <dd>{value}</dd>
                  <dt>{spasPlus(player.spas, statLabels[key], player.bonus)}</dt>
                </div>
              ))}
            </dl>
            <p >Пассивная мудрость (внимательность): {player.perception}</p>
          </section>

          <p className="panel--compact character-desc"><strong>Кошель:</strong> {player.money.g} зм, {player.money.s} см и {player.money.m} мм</p>

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

          <section className="panel panel--compact">
            <h2>Умения</h2>
            <ul className="simple-list">
              {player.spells.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel panel--compact">
            <h2>Владения</h2>
            <div className="simple-list">
              <span>{player.knowledge.ownership}</span>
              <span>{player.knowledge.weapon}</span>
              <span>{player.knowledge.armor}</span>
            </div>
          </section>

          <section className="panel panel--compact">
            <h2>Снаряжение</h2>
            <ul className="simple-list">
              {player.equipment.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel panel--compact">
            <h2>Атаки</h2>
            <dl className="attack-dl stats-dl--six">
              {player.attack.map(({ name, dmg, dmgtype }, i) => (
                <div key={i}>
                  <dt>{name}</dt>
                  <dd>{dmg}</dd>
                  <dt>{dmgtype}</dt>
                </div>
              ))}
            </dl>
          </section>

          <section className="panel panel--compact">
            <h2>Заклинания</h2>
            <ul className="simple-list">
              {player.magic.map((spell, i) => (
                <li key={i}>{spell}</li>
              ))}
            </ul>
          </section>

          <section className="panel panel--compact">
            <h2>Прочие особенности</h2>
            <ul className="simple-list">
              {player.etc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
