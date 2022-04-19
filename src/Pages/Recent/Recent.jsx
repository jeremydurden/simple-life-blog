import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import RecentArticle from "../../components/RecentArticle/RecentArticle";
import RecentArticleFeed from "../../components/RecentArticleFeed/RecentArticleFeed";
import RecentPostsCard from "../../components/RecentPostsCard/RecentPostsCard";

import "./Recent.css";

const Recent = () => {
  return (
    <div className="recent-page__container">
      <div className="recent-page__container--main">
        <RecentArticleFeed />
      </div>
      <div className="recent-page__container--side">
        <AboutMeCard />
        <RecentPostsCard />
      </div>
    </div>
  );
};
export default Recent;
