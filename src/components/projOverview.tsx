type ProjectType = {
  image: string;
  title: string;
  desc: string;
  route: string;
  github: string;
  livePrev: string;
};

function ProjectOverview({ data }: { data: ProjectType }) {
  return (
    <div className="ProjOverview">
      <div className="projectIMG">
        <img src="" alt="" />
      </div>
      <div className="projDescription">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href="">Take a closer look</a>
    </div>
  );
}

export default ProjectOverview;
