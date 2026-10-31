import ProjectGrids from "./portfolioGrids";
import projects from "./projectData";

function PortfolioComponent() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectGrids
          key={project.name}
          data={{
            image: project.images[0],
            title: project.name,
            desc: project.description,
            route: project.name.toLowerCase().replace(/\s+/g, "-"),
            github: "",
            livePrev: project.livePrev || "",
          }}
        />
      ))}
    </div>
  );
}

export default PortfolioComponent;
