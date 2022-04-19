import RecentPostsCard from "../../components/RecentPostsCard/RecentPostsCard";
import "./About.css";
import aboutMe from "../../images/about-me.jpg";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__container--feed">
        <img className="about__img" src={aboutMe} alt="smiling person" />
        <h1 className="about__feed--title">
          My name is John and living the simple life saved my life
        </h1>
        <p className="about__feed--text">
          <span className="about__feed--span">I used to be a pack rat.</span> I
          had so many things that I thought that I loved, but the truth was I
          couldn't even appreciate any of it because there was too much.
          <br></br>
          <br></br> Things were terrible. I had a job that I hated, a home that
          I didn't want to live in, and I couldn't hold a relationship.
        </p>
        <h2 className="about__feed--subtitle">How I turned things around</h2>
        <p className="about__feed--text">
          <span className="about__feed--span">
            I was on the verge of a breakdown when I got rid of everything.
          </span>{" "}
          I literally put 90% of my possessions in the garbage, sold my place
          and moved into a smaller apartment, and I quit my job. <br></br>
          <br></br> It wasn't easy at all, but everything around me was in such
          a bad place, I didn't know what else to do. And it worked.
        </p>
        <h2 className="about__feed--subtitle">Now I live the simple life</h2>
        <p className="about__feed--text">
          Now that I'm living a simple life, things are so much better. I'm less
          stressed, enjoy life and work more, and I have more free time to
          enjoy.<br></br>
          <br></br> With how much it turned my life around,{" "}
          <span className="about__feed--span">
            I felt like I had no choice but to start sharing how I did it
          </span>
          , and how others can benefit from living a simple life as well, which
          is why I started this site!
        </p>
      </div>
      <div className="container--sidebar">
        <RecentPostsCard />
      </div>
    </div>
  );
};
export default About;
