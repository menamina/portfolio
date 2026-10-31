import { Link } from "react-router-dom";
import Me from "../imgs/mena.png";
import Resume from "../imgs/techresume.pdf";
import projects from "./projectData";

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const services = [
  {
    title: "Frontend",
    desc: "Responsive, accessible interfaces with React, TypeScript, TanStack Query and Material-UI/Tailwind.",
    color: "var(--lavender)",
  },
  {
    title: "Backend & APIs",
    desc: "RESTful services with Node.js, Express and FastAPI/Pydantic that scale with the product.",
    color: "var(--blue)",
  },
  {
    title: "Databases",
    desc: "Relational schemas, Prisma ORM and tuned SQL queries for reporting and compliance.",
    color: "var(--pink)",
  },
  {
    title: "Auth & Deployment",
    desc: "Azure AD SSO, OAuth 2.0, JWT, role-based access and CI/CD with GitHub Actions.",
    color: "var(--green)",
  },
];

const experience = [
  {
    role: "Full Stack Software Engineer (Remote)",
    place: "Digital Aid Seattle",
    when: "Current",
  },
  {
    role: "Self-taught Web Developer",
    place: "HTML/CSS → full stack",
    when: "Since 2025",
  },
  {
    role: "Teacher",
    place: "Education",
    when: "Before tech",
  },
];

const tools = [
  "React",
  "TypeScript",
  "TanStack Query",
  "Material-UI",
  "Node.js",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Azure AD",
  "GitHub Actions",
  "Vite",
];

const cardColors = [
  "var(--lavender)",
  "var(--pink)",
  "var(--blue)",
  "var(--green)",
];

function Home() {
  return (
    <main className="home">
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

      {/* Services */}
      <section className="section" id="services">
        <span className="pill">What I Do</span>
        <h2>I build full-stack products from the database up to the UI.</h2>
        <div className="services">
          {services.map((s) => (
            <div
              className="service-card"
              style={{ background: s.color }}
              key={s.title}
            >
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div>
          <span className="pill">About</span>
          <h2>More about me</h2>
          <p>
            Over a year ago a friend introduced me to web development. What
            started as a just-for-fun HTML/CSS tutorial turned into a joy of
            building websites, and then a career change.
          </p>
          <p>
            Today I'm a Full Stack Software Engineer at Digital Aid Seattle,
            working with project managers and developers to deliver digital
            solutions for non-profits. I love figuring out how to meet the needs
            of a business while keeping end users happy.
          </p>
          <Link to="/about" className="btn btn-dark">
            More About Me
          </Link>
        </div>
        <div className="timeline">
          <h3>My experience</h3>
          {experience.map((e) => (
            <div className="timeline-item" key={e.role}>
              <div>
                <p className="role">{e.role}</p>
                <p className="place">{e.place}</p>
              </div>
              <span className="when">{e.when}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="section" id="portfolio">
        <span className="pill">My Work</span>
        <h2>Check out some of the projects I've built.</h2>
        <div className="works">
          {projects.map((p, i) => (
            <Link
              to={`/portfolio/${slug(p.name)}`}
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
        <div className="center">
          <Link to="/portfolio" className="btn btn-dark">
            See All Work
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className="section tools-section">
        <p className="tools-title">Tools:</p>
        <div className="tools">
          {tools.map((t, i) => (
            <div className="toolContainer">
              <div
                className="tool"
                style={
                  {
                    "--hover-color": cardColors[i % cardColors.length],
                  } as React.CSSProperties
                }
              >
                <span className="toolUsed" key={t}>
                  {t}
                </span>
              </div>
              <span> &#10036;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <span className="pill pill-light">Contact</span>
        <div className="btn-row center">
          <a href="mailto:dayjacs03@gmail.com" className="btn btn-white">
            dayjacs03@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/damenajackson/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/menamina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
