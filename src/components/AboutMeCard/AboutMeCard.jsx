import photo from "../../images/about-me.jpg";
import "./AboutMeCard.css";
import { Link } from "react-router-dom";
const AboutMeCard = () => {
  return (
    <div className="about-me">
      <Link className="about-me__link" to="/about">
        <div className="about-me__container">
          <h1 className="about-me__title">About Me</h1>
          <img src={photo} alt="smiling young man" />
          <p className="about-me__text">
            I find life better, and I'm happier, when things are nice and
            simple.
          </p>
        </div>
      </Link>
    </div>
  );
};
export default AboutMeCard;
