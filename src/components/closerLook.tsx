import { useParams } from "react-router-dom";
import projects from "./closerLookProjectData";
import ImgCarousel from "./imgCarousel";

function CloserLookAtProject() {
  const { name } = useParams();
  const project = projects.find(
    (p) => p.name.split("")[0].toLowerCase() === name?.toLowerCase(),
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div>
        <h1>{project.name}</h1>
        <h3>{project.description}</h3>
      </div>

      {project.livePrev && (
        <div>
          <button>Live Preview</button>
        </div>
      )}

      <div>
        <h2>About the project</h2>
        <p>{project.about}</p>
      </div>

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

      <div>
        <div>{project.type === "work" ? "Hand off date:" : "End date:"}</div>
        <div>{project.date}</div>
      </div>

      <ImgCarousel imgs={project.images} />
    </div>
  );
}

export default CloserLookAtProject;
