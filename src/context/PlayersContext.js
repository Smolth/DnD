import { useMemo } from 'react';
import { createDataContext } from './createDataContext';

const { Context: PlayersContext, useContext: usePlayersContext } =
  createDataContext('PlayersContext');

export function PlayersProvider({ children }) {
  const value = useMemo(() => {
    const players = [
        {
          id: 'thorin',
          playerName: 'Алексей',
          characterName: 'Торин Огнебород',
          alignment: 'Законно-добрый',
          class: 'Воин',
          race: 'Дварф',
          level: 5,
          portrait:
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
          backstory:
            'Наследник клана кузнецов, покинувший родину после падения отца в битве с драконом. Ищет чести и искупления.',
          stats: {
            strength: 18,
            dexterity: 10,
            constitution: 16,
            intelligence: 8,
            wisdom: 12,
            charisma: 10,
          },
          equipment: ['Боевой топор +1', 'Кольчуга', 'Щит клана Огнебород'],
          skills: ['Атлетика', 'Запугивание', 'История'],
          hp: 52,
          ac: 18,
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
