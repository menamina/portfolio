import Me from "../imgs/mena.png";
import Resume from "../imgs/techresume.pdf";

function HomeOverview() {
  return (
    <section className="hero section" id="home">
      <div className="hero-text">
        <span className="pill">Hello!</span>
        <h1>I'm Mena Jackson, a full stack software engineer.</h1>
        <p className="lead">
          A teacher turned developer, building tools that meet the needs of
          businesses and clients.
        </p>
        <div className="btn-row">
          <a href="#portfolio" className="btn btn-dark">
            See My Work
          </a>
          <a href={Resume} className="btn btn-light" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={Me} alt="Mena Jackson" />
        <span className="status">● Open to work</span>
      </div>
    </section>
  );
}

export default HomeOverview;
