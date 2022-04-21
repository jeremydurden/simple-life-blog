import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import FeaturedArticle from "../../components/FeaturedArticle/FeaturedArticle";
import RecentArticleFeed from "../../components/RecentArticleFeed/RecentArticleFeed";
import RecentPostsCard from "../../components/RecentPostsCard/RecentPostsCard";

import "./Home.css";
const Home = () => {
  return (
    <div className="home__container--main">
      <div className="home__article-feed">
        <FeaturedArticle />
        <RecentArticleFeed />
      </div>
      <div>
        <AboutMeCard />
        <RecentPostsCard />
      </div>
    </div>
  );
};
export default Home;
