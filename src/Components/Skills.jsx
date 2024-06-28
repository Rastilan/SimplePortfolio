import BLENDER from "./SVG/BLENDER";
import BOOTSTRAP from "./SVG/BOOTSTRAP";
import CSS3 from "./SVG/CSS3";
import FIREBASE from "./SVG/FIREBASE";
import GIT from "./SVG/GIT";
import HTML5 from "./SVG/HTML5";
import JS from "./SVG/JS";
import JSON from "./SVG/JSON";
import NODEJS from "./SVG/NODEJS";
import REACT from "./SVG/REACT";
import TAILWIND from "./SVG/TAILWIND";
import UNREAL from "./SVG/UNREAL";

const Skills = () => {
  return (
    <div>
      <div className="container rounded-t-lg mx-auto bg-sky-400 text-white font-semibold text-lg py-8 px-8 mt-4">
        <div>
          <p>Skills</p>
        </div>
      </div>
      <div className="container rounded-b-lg mx-auto bg-sky-600 text-white font-semibold text-lg px-4">
        <div className="flex flex-row justify-around py-4">
          <HTML5 />
          <CSS3 />
          <JS />
          <JSON />
          <NODEJS />
          <REACT />
          <UNREAL />
          <FIREBASE />
          <BLENDER />
          <BOOTSTRAP />
          <GIT />
          <TAILWIND />
        </div>
      </div>
    </div>
  );
};
export default Skills;
