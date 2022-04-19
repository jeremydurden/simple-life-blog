import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="container header__container">
        <div className="header__title--container">
          <h1 className="header__title">Living the Simple Life</h1>
          <p className="header__subtitle">
            A BLOG EXPLORING MINIMALISM IN LIFE
          </p>
        </div>
        <ul className="header__ul">
          <li className="header__list-item">
            <Link className="header__link" to="/home">
              Home
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/about">
              About Me
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/recent">
              Recent Posts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
