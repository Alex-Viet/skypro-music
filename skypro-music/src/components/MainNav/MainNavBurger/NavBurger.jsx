import '../MainNav.css';

export default function NavBurger({ toggleVisibility, handleKeyPress }) {
  return (
    <div
      className="nav__burger burger"
      role="button"
      tabIndex={0}
      onClick={toggleVisibility}
      onKeyDown={handleKeyPress}
    >
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  );
}
