import RecentArticle from "../RecentArticle/RecentArticle";

import data from "../../data/data.js";

const RecentArticleFeed = () => {
  console.log(data, "data");
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

  return articles;
};
export default RecentArticleFeed;
