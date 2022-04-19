import "./RecentPosts.css";

const RecentPosts = ({ photo, text }) => {
  return (
    <div className="recent-post__container">
      <img className="recent-post__img" src={photo} alt="" />
      <h2 className="recent-post__subtitle">{text}</h2>
    </div>
  );
};
export default RecentPosts;
