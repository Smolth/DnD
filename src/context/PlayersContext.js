import { useMemo } from 'react';
import { createDataContext } from './createDataContext';
import { portraitPath } from '../utils/staticAssets';

const { Context: PlayersContext, useContext: usePlayersContext } =
  createDataContext('PlayersContext');

export function PlayersProvider({ children }) {
  const value = useMemo(() => {
    const players = [
      {
        id: 'leankosh',
        playerName: 'Евгения',
        characterName: "Леан’Кош",
        alignment: 'Упорядоченно-нейтральное',
        class: 'Хранитель рун',
        race: 'Калаштар',
        level: 2,
        age: '?',
        lg: "Общий, Куори, Воровской, Небесный, Инфернальный и язык Бездны",
        bonus: "+2",
        perception: 13,
        portrait:
          portraitPath('morisa.jpg'),
        backstory:
          'Чужеземец',
          influence: '0',
        stats: {
          strength: 12,
          dexterity: 14,
          constitution: 10,
          intelligence: 13,
          wisdom: 16,
          charisma: 10,
        },
        equipment: [
          '2 серпа (1к4)', 'Посох (1к6 или 1к8)',
          'Набор учёного', 'Инструменты каллиграфа', 'Инструменты картографа',
          'Капкан', 'Трофей с убитого животного',
          'Кожаный доспех (начертана Рокато)', 'Комплект дорожной одежды',
          'Карта полученного груза', 'Послание волшебника башни ученику',
          'Письмо хозяину таверны «Золотой корень города Луандри»'
        ],
        knowledge: {
          ownership: 'Инструменты каллиграфа и Инструменты картографа, Цимбалы',
          weapon: 'Простое оружие, боевые молоты, древковое',
          armor: 'Лёгкие доспехи, средние доспехи, щиты'
        },
        money: { g: 18, s: 3, m: 0 },
        spas: ['Сила', 'Телосложение'],
        skills: ['Атлетика', 'Запугивание', 'История'],
        hp: 9,
        hc: '1k8',
        ac: 13,
        xp: 0,
        speed: 30,
        features: {
          characters: 'Однажды я пробежала 40 километров без остановки, чтобы предупредить свой клан о приближающейся орде орков. Если понадобится, я повторю это.',
          ideals: 'Процветание',
          affections: 'Моя семья, клан или племя — самые важные вещи в моей жизни, даже когда они далеко от меня',
          wickness: 'Я помню все полученные оскорбления и таю злобу на всех обидчиков'
        },
        attack: [{
          name: 'Посох',
          dmg: '(1к6 или 1к8) + 1',
          dmgtype: 'дробящий'
        },
        {
          name: 'Серп',
          dmg: '(1к4) + 1',
          dmgtype: 'рубящий'
        }],
        spells: [
          'Странник', 'Знание рун', 'Полиглот',
          'Связь разумов (телепатия)', 'Отдалённый от снов'
        ],
        magic: [
          'КДААВ - Инфернальный (Кровь)', 'ЛАДЬЯ - Воровской (Дубинка)', 'ДИВЕЙЮР - Инфернальный (Отчаяние)',
          'РОКАТО - Воровской (Доспех)', 'ФУРИ - Инфернальный (Огонь)', 'ЗТУЖКС - Язык Бездны (Форма)'
        ],
        classification: 'Диалект: Инфернальный',
        etc: ['Особенность поведения: Я использую логику снов для решения ситуаций']
      },
      {
        id: 'lyra',
        playerName: 'Мария',
        characterName: 'Лира Звёздный Шёпот',
        alignment: 'Хаотично-нейтральный',
        class: 'Волшебница',
        race: 'Тифлинг',
        level: 5,
        portrait:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
        backstory:
          'Бежала из академии магии после запрета исследовать планарные разломы. Её рога светятся при полной луне.',
        stats: {
          strength: 8,
          dexterity: 14,
          constitution: 12,
          intelligence: 18,
          wisdom: 10,
          charisma: 14,
        },
        equipment: ['Посох фокусировки', 'Книга заклинаний', 'Компоненты'],
        skills: ['Магия', 'История', 'Расследование'],
        hp: 28,
        ac: 13,
      },
      {
        id: 'finn',
        playerName: 'Дмитрий',
        characterName: 'Финн Ловкий Пёс',
        alignment: 'Хаотично-нейтральный',
        class: 'Плут',
        race: 'Полурослик',
        level: 5,
        portrait:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
        backstory:
          'Бывший уличный вор, нанятый гильдией для «деликатных» поручений. Верит только золоту и своей команде.',
        stats: {
          strength: 8,
          dexterity: 18,
          constitution: 12,
          intelligence: 14,
          wisdom: 10,
          charisma: 16,
        },
        equipment: ['Кинжалы +1', 'Кожаный доспех', 'Набор взломщика'],
        skills: ['Скрытность', 'Ловкость рук', 'Обман'],
        hp: 32,
        ac: 15,
      },
      {
        id: 'seren',
        playerName: 'Елена',
        characterName: 'Серен Лунная Молитва',
        alignment: 'Законно-добрый',
        class: 'Жрец',
        race: 'Человек',
        level: 5,
        portrait:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
        backstory:
          'Жрица храма Светлой Луны. Получила видение о надвигающемся затмении и собрала отряд искателей.',
        stats: {
          strength: 10,
          dexterity: 10,
          constitution: 14,
          intelligence: 12,
          wisdom: 18,
          charisma: 14,
        },
        equipment: ['Булава', 'Кольчужная рубаха', 'Символ веры'],
        skills: ['Медицина', 'Религия', 'Убеждение'],
        hp: 38,
        ac: 16,
      },
    ];

    const normalizedPlayers = players.map((player) => ({
      ...player,
      alignment: player.alignment ?? 'Нейтральное',
    }));

    return {
      players: normalizedPlayers,
      getPlayerById: (id) => normalizedPlayers.find((p) => p.id === id),
    };
  }, []);

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
}

export function usePlayers() {
  return usePlayersContext();
}
