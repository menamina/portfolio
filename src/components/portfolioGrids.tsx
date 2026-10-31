import { Link } from "react-router-dom";

type ProjectType = {
  image: string;
  title: string;
  desc: string;
  route: string;
  github: string;
  livePrev: string;
};

function ProjectGrids({ data }: { data: ProjectType }) {
  return (
    <div className="ProjOverview">
      <div className="projectIMG">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="projDescription">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
      <Link to={`/portfolio/${data.route}`}>Take a closer look</Link>
    </div>
  );
}

export default ProjectGrids;
