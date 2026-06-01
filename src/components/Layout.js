import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>P. S. Не забудьте про печеньки</p>
      </footer>
    </div>
  );
}
