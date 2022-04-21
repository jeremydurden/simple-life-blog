import RecentPosts from "../RecentPosts/RecentPosts.jsx";
import "./RecentPostsCard.css";

import food from "../../images/food.jpg";
import deco from "../../images/deco.jpg";
import work from "../../images/work.jpg";

const RecentPostsCard = () => {
  return (
    <div className="recent-posts__container">
      <h1 className="recent-posts__title">Recent Posts</h1>
      <RecentPosts photo={food} text="Keep cooking simple" />

      <RecentPosts photo={work} text="Simplicity and Work" />

      <RecentPosts photo={deco} text="Simple decorations" />
    </div>
  );
};
export default RecentPostsCard;
