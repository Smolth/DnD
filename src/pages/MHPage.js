import { Link } from 'react-router-dom';
import { useMasterCharacters } from '../context';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function MPPage() {
    const { masterCharacters: mp, getMasterCharacterByClass, getMasterCharacterByRole } = useMasterCharacters();
    const [search, setSearch] = useState('');
    const [characterList, setCharacterList] = useState(mp)

    const getGuildChars = () => {
        const charList = getMasterCharacterByRole('гильдии «Морская пума»');
        setCharacterList(charList);
        setSearch('');
    }
    const getBadChars = () => {
        const charList = getMasterCharacterByClass('Злодей');
        setCharacterList(charList);
        setSearch('');
    }
    const getByClass = (e) => {
        let stroke = e.target.value.trim();
         if (stroke === '') {
            setSearch(stroke);
            setCharacterList(mp)
            return
        }
        stroke = stroke[0]?.toUpperCase() + stroke?.slice(1)?.toLowerCase();
        setSearch(stroke);
        const charList = getMasterCharacterByClass(stroke);
        setCharacterList(charList);
    }
    const getAllChars = useCallback(() => {
        setCharacterList(mp);
        setSearch('');
    }, [mp]);

    return (
        <div className="page heros-page">
            <header className="page-header">
                <h1>Список персонажей мастера.</h1>
            </header>
            <div className='search'>
                <button id='goodchars' onClick={getGuildChars}>Вывести членов гильдии</button>
                <button id='badchars' onClick={getBadChars}>Вывести антогонистов</button>
                <input placeholder='Поиск по классу' value={search} onChange={(e) => getByClass(e)} />
                <span onClick={getAllChars}>x</span>
            </div>
            <ul className="heros-grid">
                {characterList.map((hero) => (
                    <Link to={`/master/${hero.id}`} className="npc-card" key={hero.id}>
                        <img src={hero.portrait} alt="" className="npc-card__img" />
                        <div>
                            <strong>{hero.name}</strong>
                            <span className="npc-card__role">{hero.role}</span>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
