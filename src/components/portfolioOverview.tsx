import { Link } from "react-router-dom";
import projects from "./projectData";

const cardColors = [
  "var(--pastel-yellow)",
  "var(--pastel-orange)",
  "var(--pastel-peach)",
  "var(--pastel-cream)",
];

function PortfolioOverview() {
  return (
    <section className="section" id="portfolio">
      <span className="pill">&#10036; My Work</span>
      <h2>Check out some of the projects I've built.</h2>
      <div className="works">
        {projects.map((p, i) => (
          <Link
            to={`/portfolio/${p.name.split(" ")[0]}`}
            className="work-card"
            key={p.name}
            style={{ background: cardColors[i % cardColors.length] }}
          >
            <div className="work-img">
              <img src={p.images[0]} alt={p.name} />
            </div>
            <div className="work-info">
              <span className="tag">
                {p.type === "work" ? "Client work" : "Personal"}
              </span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <span className="work-link">Take a closer look →</span>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="center">
        <Link to="/portfolio" className="btn btn-dark">
          See All Work
        </Link>
      </div> */}
    </section>
  );
}

export default PortfolioOverview;
