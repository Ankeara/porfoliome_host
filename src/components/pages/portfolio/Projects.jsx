import { Figma } from 'lucide-react';
import { Github } from 'lucide-react';

const Projects = (props) => {
  return (
    <div className="project__items" >
        <div className="box__img">
          <img src={props.image} alt="" className="img__project" />
          <div className="icon_link">
            <a href={props.figma} className="link">
              <Figma />
            </a>
            <a href={props.github} className="link">
              <Github />
            </a>
          </div>
        </div>
        <span className="project__title">{props.title}</span>
    </div>
  );
};

export default Projects;
