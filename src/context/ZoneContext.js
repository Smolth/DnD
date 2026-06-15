import { useMemo } from 'react';
import { createDataContext } from './createDataContext';
import { artPath, mapPath } from '../utils/staticAssets';

const { Context: ZonesContext, useContext: useZonesContext } =
    createDataContext('ZonesContext');

export function ZonesProvider({ children }) {
    const value = useMemo(() => {
        const zones = [
            {
                id: 'tea',
                name: 'Чайная',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop',
                description:
                    'Здесь были 3 и 4 жертвы.',
            },
            {
                id: 'dollhouse',
                name: 'Кукольный дом Ферни',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop',
                description:
                    'Место, куда граф велит свозить женщин. Его охраняет специальный стражник.',
            },
            {
                id: 'books',
                name: 'Книжная лавка',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop',
                description:
                    'Здесь продаются карты.',

            },
            {
                id: 'weapon',
                name: 'Оружейная лавка',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                description:
                    'Здесь можно купить оружие.',

            },
            {
                id: 'clothes',
                name: 'Ателье',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Здесь можно заказать наряд на бал.',

            },
            {
                id: 'theate',
                name: 'Театр',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Пока не нужен.',

            },
            {
                id: 'port',
                name: 'Артенский порт',
                type: 'Район',
                image:
                    mapPath('port.png'),
                description:
                    'Сюда искатели приключений приходят переместиться или получить информацию о перемещениях.',

            },
            {
                id: 'square',
                name: 'Городская площадь',
                type: 'Район',
                image:
                    mapPath('square.png'),
                description:
                    'Здесь можно прогуляться.',

            },
            {
                id: 'checkpoint',
                name: 'Главный пропускной пункт',
                type: 'Здание',
                image:
                    mapPath('checkpoint.jpg'),
                description:
                    'Место проверки посетителей города у главного входа в город.',

            },
            {
                id: 'bar',
                name: 'Бар «Летящий левиафан»',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Если нужно покутить. Приезжие здесь обедают.',

            },
            {
                id: 'hotel',
                name: 'Гостевой дом «Ювра»',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Барон Дейли остановился в гостевом доме',

            },
            {
                id: 'barracks',
                name: 'Казармы',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Лэртон часто тренирует рыцарей в казарме. Также здесь живут большинство стражников.',

            },
            {
                id: 'guild',
                name: 'Гильдия «Морская пума»',
                type: 'Здание',
                image:
                    mapPath('guild.png'),
                description:
                    'Главный сбор всех искателей приключений.',

            },
            {
                id: 'ferma',
                name: 'Фермерские угодья «Артен»',
                type: 'Район',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Поля, посадки и пастбища Артена.',

            },
            {
                id: 'martin',
                name: 'Дом градоначальника Мартина',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Место, куда граждане Артена приходят с прошениями и жалобами.',

            },
            {
                id: 'ferni',
                name: 'Особняк графа Ферни',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Место проведения бала.',

            },
            {
                id: 'grem',
                name: 'Особняк барона Грэм',
                type: 'Здание',
                image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f48?w=600&h=400&fit=crop',
                description:
                    'Место, откуда исчезла пятая жертва.',

            },
            {
                id: 'forest',
                name: 'Ортенский лес',
                type: 'Лес',
                image:
                    mapPath('forest.jpeg'),
                description:
                    'Местный густой лес с хвойными и лиственными деревьями. Проверки Мудрости (Выживание) для навигации. Здесь появился опасный Гризли.',

            },
            {
                id: 'sea',
                name: 'Шарское море',
                type: 'Водоём',
                image:
                    mapPath('sea.jpg'),
                description:
                    'Море, соединяющее Артен и земли герцога Полен.',

            },
            {
                id: 'cirikh',
                name: 'Судно Цириха',
                type: 'Судно',
                image:
                    artPath('ship.jpg'),
                description:
                    'Небольшое судно, преодолевающее Шарское море, принадлежит штурману Цириху.',

            },
            {
                id: 'darina',
                name: 'Дарина',
                type: 'Город',
                image:
                    mapPath('darina.png'),
                description:
                    'Небольшой портовый городок на землях графа Полена.',

            },
            {
                id: 'trey',
                name: 'Трэй',
                type: 'Город',
                image:
                    mapPath('trey.png'),
                description:
                    'Транспортный узел королевства.',

            },
            {
                id: 'ternitca',
                name: 'Терница',
                type: 'Город',
                image:
                    mapPath('ternitca.jpg'),
                description:
                    'Небольшой городок, собирающий в себе обывателей разных рас.',

            },
            {
                id: 'ulir-forest',
                name: 'Улирийская пустошь (бывш. лес)',
                type: 'Пустошь',
                image:
                    mapPath('ulir-forest.jpeg'),
                description:
                    'Пустошь, образовавшаяся в результате сожжения леса эльфов, находится в 2 км от города Улир.',

            },
            {
                id: 'ulir',
                name: 'Улир',
                type: 'Город',
                image:
                    mapPath('ulir.png'),
                description:
                    'Город на пересечении железных путей - Улир.',
            },
            {
                id: 'shatro',
                name: 'Шатро',
                type: 'Город',
                image:
                    mapPath('shatro.jpg'),
                description:
                    'Бывший сожжёным город Сатиров.',
            },
            {
                id: 'martok-guild',
                name: 'Гильдия «Марток»',
                type: 'Здание',
                image:
                    mapPath('ulir.png'),
                description:
                    'Гильдия в Улире.',
            },
            {
                id: 'sword-guild',
                name: 'Гильдия «Бирюзовый меч»',
                type: 'Здание',
                image:
                    mapPath('sword.png'),
                description:
                    'Гильдия в Тернице.',
            },
        ]

        return {
            zones,
            getZoneById: (id) => zones.find((s) => s.id === id),
            getZoneByName: (name) => zones.find((s) => s.name.includes(name)),
        };
    }, []);

    return (
        <ZonesContext.Provider value={value}>{children}</ZonesContext.Provider>
    );
}

export function useZones() {
    return useZonesContext();
}
