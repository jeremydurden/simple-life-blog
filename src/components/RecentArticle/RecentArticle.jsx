import "./RecentArticle.css";

const RecentArticle = ({ photo, date, title, text, comments }) => {
  return (
    <div className="recent-article__container">
      <div className="recent-article__image-side">
        <img src={photo} alt="" className="recent-article__img" />
        <p className="recent-article__date">
          {date} | {comments} comments
        </p>
      </div>
      <div className="recent-article__text-side">
        <h2 className="recent-article__title">{title}</h2>
        <p className="recent-article__text">{text}</p>
        <p>continue reading</p>
      </div>
    </div>
  );
};
export default RecentArticle;
