import { useParams } from "react-router-dom";
import projects from "./projectData";
import ImgCarousel from "./imgCarousel";
import ButtonOutline from "./buttonOutline";

function ProjectPage() {
  const { name } = useParams();
  const project = projects.find(
    (p) => p.name.split(" ")[0].toLowerCase() === name?.toLowerCase(),
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="projectContainer">
      <div className="projectOverview">
        <div>
          <div className="left">
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
            {project.livePrev && (
              <ButtonOutline text="Live Preview" url={project.livePrev} />
            )}
            <div>
              <div>
                <h2>Purpose</h2>
                <p>{project.about}</p>
              </div>
              <div>
                <h3>
                  {project.type === "work" ? "Hand off date:" : "End date:"}
                </h3>
                <div>{project.date}</div>
              </div>
            </div>
          </div>

          <div className="right">
            <div style={{ paddingTop: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Summary:</p>
              <ul
                style={{
                  listStyleType: "none",
                }}
              >
                {project.summary.map((item, index) => (
                  <li key={index}>☆ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="projectPageCarousel">
        <ImgCarousel imgs={project.images} />
      </div>
    </div>
  );
}

export default ProjectPage;
