import OPENLINK_SVG from "./SVG/OPENLINK_SVG";
import PropTypes from "prop-types";

const ProjectItem = ({
  width,
  height,
  openLinkW,
  openLinkH,
  projectName,
  description,
  link,
  techIcons,
  github,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <div className="flex flex-row">
          {techIcons.map((Icon, index) => (
            <div className="p-2" key={index}>
              <Icon width={width} height={height} />
            </div>
          ))}
          <div className="p-2">{projectName}</div>
        </div>
        <div className="px-2">{description}</div>
        <div className="text-left pl-2 weight-bold">
          <a href={github} className="text-white hover:text-white hover:glow">
            Project Github
          </a>
        </div>
      </div>
      <div className="flex p-3 self-auto">
        <a href={link}>
          <OPENLINK_SVG width={openLinkW} height={openLinkH} />
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  openLinkW: PropTypes.number.isRequired,
  openLinkH: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  techIcons: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectItem;
