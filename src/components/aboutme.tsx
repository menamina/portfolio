import { Link } from "react-router-dom";

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

function About() {
  return (
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
  );
}

export default About;
