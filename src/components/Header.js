import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/npc', label: 'МП'},
  { to: '/world-map', label: 'Карта мира' },
  { to: '/rules', label: 'Правила' },
  { to: '/players', label: 'Игроки' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__brand">
          <span>DnD</span>
        </NavLink>
        <nav className="header__nav" aria-label="Основная навигация">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
