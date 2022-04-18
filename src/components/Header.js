const Header = () => {
  return (
    <div className="container header__container">
      <div className="header__title--container">
        <h1 className="header__title">Living the Simple Life</h1>
        <p className="header__subtitle">A BLOG EXPLORING MINIMALISM IN LIFE</p>
      </div>
      <ul className="header__ul">
        <li className="header__list-item">
          <a href="#home" className="header__anchor">
            Home
          </a>
        </li>
        <li className="header__list-item">
          <a href="#about" className="header__anchor">
            About Me
          </a>
        </li>
        <li className="header__list-item">
          <a href="#recent" className="header__anchor">
            Recent Posts
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
