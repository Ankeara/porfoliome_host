
const Projects = (props) => {
  return (
    <div className="project__items" >
        <img src={props.image} alt="" className="img__project" />
        <span className="project__title">{props.title}</span>
    </div>
  );
};

export default Projects;
