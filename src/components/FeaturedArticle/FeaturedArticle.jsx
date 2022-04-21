import data from "../../data/data.js";
import "./FeaturedArticle.css";
const FeaturedArticle = () => {
  return (
    <div className="featured-article__container">
      <img className="featured-article__img" src={data[0].photo} alt="" />
      <p className="featured-article__date">
        {data[0].date} | {data[0].comments}
      </p>
      <h2 className="featured-article__title">{data[0].title}</h2>
      <p className="featured-article__text">
        {" "}
        <span className="featured-article__span">
          Life can get complicated really quickly
        </span>
        , but it doesn't have to be! There are many ways to simplify your life,{" "}
        <span className="featured-article__span--link">
          a few of which we've explored in the past
        </span>
        . This week we're taking a bit of a approach though, in how you can find
        simplicity in the life you already living.
      </p>
      <p className="featured-article__continue">continue reading</p>
    </div>
  );
};
export default FeaturedArticle;
