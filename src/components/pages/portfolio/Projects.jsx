import { Figma } from 'lucide-react';
import { Github } from 'lucide-react';

const Projects = (props) => {
  return (
    <div className="project__items" >
      <a href="">
        <img src={props.image} alt="" className="img__project" />
    </a>
        <span className="project__title">{props.title}</span>
<div className="icon_link">
  <div className="link">
    <Figma />
  </div>
  <div className="link">
    <Github />
  </div>
</div>
    </div>
  );
};

export default Projects;
