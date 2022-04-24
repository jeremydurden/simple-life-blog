import RecentPosts from "../RecentPosts/RecentPosts.jsx";
import "./RecentPostsCard.css";

import food from "../../images/food.jpg";
import deco from "../../images/deco.jpg";
import work from "../../images/work.jpg";

import { useLocation } from "react-router-dom";

const RecentPostsCard = () => {
  const location = useLocation();
  const show = location.pathname === "/recent";

  return (
    <div
      className={`recent-posts__container ${
        show ? "recent-posts__container--hide" : ""
      }`}
    >
      <h1 className="recent-posts__title">Recent Posts</h1>
      <RecentPosts photo={food} text="Keep cooking simple" />

      <RecentPosts photo={work} text="Simplicity and Work" />

      <RecentPosts photo={deco} text="Simple decorations" />
    </div>
  );
};
export default RecentPostsCard;
