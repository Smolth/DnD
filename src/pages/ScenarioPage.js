import { Link, useParams } from 'react-router-dom';
import { useScenarios, useZones } from '../context';
import ScenarioNpcList from '../components/scenario/ScenarioNpcList';
import { useState } from 'react';

export default function ScenarioPage() {
  const { slug } = useParams();
  const { getScenarioBySlug } = useScenarios();
  const { getZoneByName } = useZones()
  let scenario = getScenarioBySlug(slug);
  const [newText, setNewText] = useState(false);
  const [newAction, setNewAction] = useState('');
  const localScenario = localStorage.getItem(scenario.id);
  if (localScenario) {
    scenario = JSON.parse(localScenario);
  }

  function addAction(scene) {
    setNewText(!newText);
    if (newAction.length > 0) {
      saveAction(scene);
      localStorage.setItem(scenario.id, JSON.stringify(scenario));
    }
    setNewAction('');
  }

  function saveAction(sc) {
    sc.actions.push(newAction);
  }

  if (!scenario) {
    return (
      <div className="page">
        <p className="empty-state">Сценарий не найден.</p>
        <Link to="/">← На главную</Link>
      </div>
    );
  }

  const sortedScenes = [...scenario.scenes].sort((a, b) => a.order - b.order);
  //console.log(sortedScenes)

  return (
    <div className="page scenario-page">
      <nav className="breadcrumb">
        <Link to="/">Главная</Link>
        <span aria-hidden="true"> / </span>
        <span>{scenario.title}</span>
      </nav>

      <header className="scenario-header">
        <h1>{scenario.title}</h1>
        <p className="scenario-header__desc">{scenario.shortDescription}</p>
        <p className="scenario-header__desc right">{scenario.sender}</p>
      </header>

      <section className="panel">
        <h2>Последовательность сцен</h2>
        <ol className="scene-list">
          {sortedScenes.map((scene) => (
            <li key={scene.id} className="scene-item">
              <div className="scene-item__head">
                <span className="scene-item__order">Сцена {scene.order}</span>
                <h3>{scene.title}</h3>
              </div>
              <Link to={"/world-map/zone-" + getZoneByName(scene.zone)?.id}>
                <i className="scene-item__desc">{scene.zone}</i>
              </Link>
              <p className="scene-item__desc">{scene.description}</p>
              {scene.dialogues?.length > 0 && (
                <div className="dialogues">
                  <h4>Диалоги</h4>
                  {scene.dialogues.map((d, i) => (
                    <blockquote key={i} className="dialogue">
                      <cite>{d.speaker}</cite>
                      <p>{d.text}</p>
                    </blockquote>
                  ))}
                </div>
              )}
              {
                <article className="dialogues">
                  <h4>Действия игроков</h4>
                  <div className="player-actions">
                    {scene.actions.map((d, i) => (
                      <p key={i} className="scene-item__desc">
                        {d}
                      </p>
                    ))}
                  </div>
                  <div className='actions'>
                    {newText ?
                      <input value={newAction} onChange={(e) => setNewAction(e.target.value.trim())} className='new-action action-border' type='textarea' /> :
                      <div className='new-action'></div>
                    }
                    <button onClick={() => addAction(scene)} className='add-button'>
                      {!newText && <span>+</span>}
                      <span>Записать</span>
                    </button>
                  </div>
                </article>
              }
            </li>
          ))}
        </ol>
      </section>

      <ScenarioNpcList masterCharacterIds={scenario.masterCharacterIds} />

    </div>
  );
}
