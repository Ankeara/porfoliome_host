import { Figma, Github, Link2 } from 'lucide-react';

const Projects = (props) => {
  return (
    <div className="project__items">
      <div className="box__img">
        <img src={props.image} alt="" className="img__project" />
        <div className="icon_link">
          {props.figma !== "#" && (
            <a href={props.figma} className="link">
              <Figma />
            </a>
          )}
          {props.github !== "#" && (
            <a href={props.github} className="link">
              <Github />
            </a>
          )}
          {props.website !== "#" && (
            <a href={props.website} className="link">
              <Link2 />
            </a>
          )}
        </div>
      </div>
      <span className="project__title">{props.title}</span>
    </div>
  );
};

export default Projects;
