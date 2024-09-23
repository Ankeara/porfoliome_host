import { Figma } from 'lucide-react';
import { Github } from 'lucide-react';

const Projects = (props) => {
  return (
    <div className="project__items" >
        <img src={props.image} alt="" className="img__project" />
        <span className="project__title">{props.title}</span>
      <div className="icon_link">
        <a href={props.figma} className="link">
          <Figma />
        </a>
        <a href={props.github} className="link">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Projects;
