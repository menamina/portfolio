const services = [
  {
    title: "Frontend",
    desc: "Responsive, accessible interfaces with React, TypeScript, TanStack Query and Material-UI/Tailwind.",
    color: "var(--pastel-yellow)",
  },
  {
    title: "Backend & APIs",
    desc: "RESTful services with Node.js, Express and FastAPI/Pydantic that scale with the product.",
    color: "var(--pastel-orange)",
  },
  {
    title: "Databases",
    desc: "Relational schemas, Prisma ORM and tuned SQL queries for reporting and compliance.",
    color: "var(--pastel-peach)",
  },
  {
    title: "Auth & Deployment",
    desc: "Azure AD SSO, OAuth 2.0, JWT, role-based access and CI/CD with GitHub Actions.",
    color: "var(--pastel-cream)",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <span className="pill">&#10036; What I Do</span>
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
  );
}

export default Services;
