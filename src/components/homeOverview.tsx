import Me from "../imgs/mena.png";
// import Resume from "../imgs/techresume.pdf";

function HomeOverview() {
  return (
    <section className="hero section" id="home">
      <div className="hero-text">
        <span className="pill">
          <span>&#10036; Hi.</span>
        </span>
        <h1>I'm Mena Jackson, a full stack software engineer.</h1>
        <p className="lead">
          A teacher turned developer, building digital solutions that meet the
          needs of businesses and clients one line at a time.
        </p>
        <div className="btn-row">
          <a href="#portfolio" className="btn btn-dark">
            See My Work
          </a>
          {/* <a href={Resume} className="btn btn-light" download>
            Download Resume
          </a> */}
        </div>
      </div>
      <div className="hero-img">
        <img src={Me} alt="Mena Jackson" />
        <div className="status">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <defs>
              <path id="curve" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0" />
              <path id="curve2" d="M 60,60 m 45,0 a 45,45 0 1,1 -90,0" />
            </defs>
            <text className="status-text">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Open to work
              </textPath>
            </text>
            <text className="status-text">
              <textPath href="#curve2" startOffset="50%" textAnchor="middle">
                Open to work
              </textPath>
            </text>
            <circle cx="15" cy="60" r="4" className="dot-circle" />
            <circle cx="105" cy="60" r="4" className="dot-circle" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HomeOverview;
