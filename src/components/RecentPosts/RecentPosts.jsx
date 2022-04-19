import "./RecentPosts.css";
import { Link } from "react-router-dom";

const RecentPosts = ({ photo, text }) => {
  return (
    <div className="recent-post__container">
      <Link to="/recent" className="recent-post__link">
        <img className="recent-post__img" src={photo} alt="" />
        <h2 className="recent-post__subtitle">{text}</h2>
      </Link>
    </div>
  );
};
export default RecentPosts;
