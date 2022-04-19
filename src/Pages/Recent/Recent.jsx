import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import RecentArticle from "../../components/RecentArticle/RecentArticle";
import RecentPostsCard from "../../components/RecentPostsCard/RecentPostsCard";

import data from "../../data/data";

import "./Recent.css";

const Recent = () => {
  const articles = data.map((article) => {
    return (
      <RecentArticle
        photo={article.photo}
        date={article.date}
        title={article.title}
        text={article.text}
        comments={article.comments}
        identifier={article.class}
      />
    );
  });

  return (
    <div className="recent-page__container">
      <div className="recent-page__container--main">{articles}</div>
      <div className="recent-page__container--side">
        <AboutMeCard />
        <RecentPostsCard />
      </div>
    </div>
  );
};
export default Recent;
