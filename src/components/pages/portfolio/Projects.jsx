import { Link } from 'react-router-dom';

const Projects = (props) => {
  return (
    <div className="project__items" >
      <Link>
        <img src={props.image} alt="" className="img__project" />
    </Link>
        <span className="project__title">{props.title}</span>
    </div>
  );
};

export default Projects;
