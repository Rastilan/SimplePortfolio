import ProjectItem from "./ProjectItem";
import REACT_SVG from "./SVG/REACT_SVG";
import JS_SVG from "./SVG/JS_SVG";
import TAILWIND_SVG from "./SVG/TAILWIND_SVG";
import OPENLINK_SVG from "./SVG/OPENLINK_SVG";
import BLENDER_SVG from "./SVG/BLENDER_SVG";
import BOOTSTRAP_SVG from "./SVG/BOOTSTRAP_SVG";
import CSS3_SVG from "./SVG/CSS3_SVG";
import FIREBASE_SVG from "./SVG/FIREBASE_SVG";
import GIT_SVG from "./SVG/GIT_SVG";
import HTML5_SVG from "./SVG/HTML5_SVG";
import JSON_SVG from "./SVG/JSON_SVG";
import NODEJS_SVG from "./SVG/NODEJS_SVG";
import UNREAL_SVG from "./SVG/UNREAL_SVG";

const Projects = () => {
  const setWidth = 30;
  const setHeight = 30;
  const openLinkW = 60;
  const openLinkH = 60;

  return (
    <div>
      <div className="container rounded-t-lg mx-auto bg-red-600 text-white font-semibold text-lg py-8 px-8 mt-4">
        <div>
          <p>Projects</p>
        </div>
      </div>
      <div className="container rounded-b-lg mx-auto bg-red-800 text-white font-semibold text-lg">
        <ProjectItem
          width={setWidth}
          height={setHeight}
          openLinkW={openLinkW}
          openLinkH={openLinkH}
          projectName="Simple Portfolio"
          description="This simple portfolio made to showcase my skills and projects in a clean fashion."
          link="https://rastilan.github.io/SimplePortfolio/"
          github="https://github.com/Rastilan/SimplePortfolio"
          techIcons={[REACT_SVG, JS_SVG, TAILWIND_SVG]}
        />
        <ProjectItem
          width={setWidth}
          height={setHeight}
          openLinkW={openLinkW}
          openLinkH={openLinkH}
          projectName="Disney+ Clone"
          description="A Recreation of the Disney+ App."
          link="https://disneyplus-clone-630c7.firebaseapp.com/home"
          github="https://github.com/Rastilan/Disneyplus-Clone"
          techIcons={[REACT_SVG, JS_SVG, TAILWIND_SVG]}
        />
      </div>
    </div>
  );
};

export default Projects;
