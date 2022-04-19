import RecentArticleFeed from "../../components/RecentArticleFeed/RecentArticleFeed";
import RecentPostsCard from "../../components/RecentPostsCard/RecentPostsCard";

import "./Home.css";
const Home = () => {
  return (
    <div className="home__container--main">
      <div>
        <RecentArticleFeed />
      </div>
      <div>
        <RecentPostsCard />
      </div>
    </div>
  );
};
export default Home;
