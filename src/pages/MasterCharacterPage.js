import { Link, useParams } from 'react-router-dom';
import { useMasterCharacters } from '../context';

const abilityLabels = {
  strength: 'Сила',
  dexterity: 'Ловкость',
  constitution: 'Телосложение',
  intelligence: 'Интеллект',
  wisdom: 'Мудрость',
  charisma: 'Харизма',
};

const combatLabels = {
  speed: 'Скорость',
  hits: 'Хиты',
  armor: 'Класс брони',
};

const abilityKeys = Object.keys(abilityLabels);
const combatKeys = Object.keys(combatLabels);

function StatGrid({ entries, labels }) {
  if (!entries.length) return null;

  return (
    <dl className="stats-dl">
      {entries.map(([key, value]) => (
        <div key={key}>
          <dt>{labels[key] || key}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function kTable(id, appearance) {
  if (!appearance) return null;
  if (id === 'lady' || id === 'man') {
    const variants = appearance.split(". ");
    return (
      <section className="panel panel--compact">
        <table>
          <thead>
            <tr>
              <td>k{variants.length}</td>
              <td>Персонаж</td>
            </tr>
          </thead>
          <tbody>{variants.map((mh, i) => (
            <tr>
              <td>{i}</td>
              <td>{mh}</td>
            </tr>
          ))
          }</tbody>
        </table>
      </section>
    )
  } else {
    return (
      <section className="panel panel--compact">
        <h2>Внешность</h2>
        <p className="character-desc character-desc--block">{appearance}</p>
      </section>
    );
  }
}

export default function MasterCharacterPage() {
  const { id } = useParams();
  const { getMasterCharacterById } = useMasterCharacters();
  const character = getMasterCharacterById(id);

  if (!character) {
    return (
      <div className="page">
        <p className="empty-state">Персонаж не найден.</p>
        <Link to="/">← На главную</Link>
      </div>
    );
  }

  const statEntries = character.stats ? Object.entries(character.stats) : [];
  const abilityStats = statEntries.filter(([key]) => abilityKeys.includes(key));
  const combatStats = statEntries.filter(([key]) => combatKeys.includes(key));
  const skillEntries =
    character.skills && typeof character.skills === 'object'
      ? Object.entries(character.skills)
      : [];
  const attacks = Array.isArray(character.attack) ? character.attack : [];

  return (
    <div className="page character-page">
      <nav className="breadcrumb">
        <Link to="/">Главная</Link>
        <span aria-hidden="true"> / </span>
        <span>{character.name}</span>
      </nav>

      <div className="character-layout">
        <aside className="character-aside">
          <img
            src={character.portrait}
            alt={character.name}
            className="character-portrait"
          />
          <p className="character-role">{character.role}</p>
          {character.class != null && character.class !== '' && (
            <p className="character-meta">Класс: {character.class}</p>
          )}
          <p className="character-meta">Бонус мастерства: {character.bonus}</p>
          <p className="character-meta">Уровень: {character.level}</p>
          {character.age != null && character.age !== '' && (
            <p className="character-meta">Возраст: {character.age}</p>
          )}
          {character.alignment && (
            <p className="character-meta">Мировоззрение: {character.alignment}</p>
          )}
          <p className="character-meta">Языки: {character.lg}</p>
          <p className="character-meta">Пассивное восприятие: {character.perception}</p>
          {combatStats.length > 0 && (
            <div className="character-meta character-meta--combat">
              {combatStats.map(([key, value]) => (
                <span key={key}>
                  {combatLabels[key]}: {value}
                </span>
              ))}
            </div>
          )}
        </aside>

        <div className="character-main">
          <h1>{character.name}</h1>

          {kTable(character.id, character.appearance)}

          {character.description && (
            <section className="panel panel--compact">
              <h2>Описание</h2>
              <p className="character-desc character-desc--block">{character.description}</p>
            </section>
          )}

          {abilityStats.length > 0 && (
            <section className="panel panel--compact">
              <h2>Характеристики</h2>
              <StatGrid entries={abilityStats} labels={abilityLabels} />
            </section>
          )}

          {skillEntries.length > 0 && (
            <section className="panel panel--compact">
              <h2>Навыки</h2>
              <ul className="skills-list">
                {skillEntries.map(([name, bonus]) => (
                  <li key={name}>
                    <span className="skills-list__name">{name}</span>
                    <span className="skills-list__bonus">{bonus}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {attacks.length > 0 && (
            <section className="panel panel--compact">
              <h2>Атаки</h2>
              <ul className="attack-list">
                {attacks.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </section>
          )}

          {character.features?.length > 0 && (
            <section className="panel panel--compact">
              <h2>Особенности</h2>
              <ul className="features-list">
                {character.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
