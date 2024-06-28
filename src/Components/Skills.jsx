import BLENDER_SVG from "./SVG/BLENDER_SVG";
import BOOTSTRAP_SVG from "./SVG/BOOTSTRAP_SVG";
import CSS3_SVG from "./SVG/CSS3_SVG";
import FIREBASE_SVG from "./SVG/FIREBASE_SVG";
import GIT_SVG from "./SVG/GIT_SVG";
import HTML5_SVG from "./SVG/HTML5_SVG";
import JS_SVG from "./SVG/JS_SVG";
import JSON_SVG from "./SVG/JSON_SVG";
import NODEJS_SVG from "./SVG/NODEJS_SVG";
import REACT_SVG from "./SVG/REACT_SVG";
import TAILWIND_SVG from "./SVG/TAILWIND_SVG";
import UNREAL_SVG from "./SVG/UNREAL_SVG";

const Skills = () => {
  const setHeight = 80;
  const setWidth = 80;
  return (
    <div>
      <div className="container rounded-t-lg mx-auto bg-sky-400 text-white font-semibold text-lg py-8 px-8 mt-4">
        <div>
          <p>Skills</p>
        </div>
      </div>
      <div className="container rounded-b-lg mx-auto bg-sky-600 text-white font-semibold text-lg px-4">
        <div className="flex flex-row justify-around py-4">
          <HTML5_SVG width={setWidth} height={setHeight} />
          <CSS3_SVG width={setWidth} height={setHeight} />
          <JS_SVG width={setWidth} height={setHeight} />
          <JSON_SVG width={setWidth} height={setHeight} />
          <NODEJS_SVG width={setWidth} height={setHeight} />
          <REACT_SVG width={setWidth} height={setHeight} />
          <UNREAL_SVG width={setWidth} height={setHeight} />
          <FIREBASE_SVG width={setWidth} height={setHeight} />
          <BLENDER_SVG width={setWidth} height={setHeight} />
          <BOOTSTRAP_SVG width={setWidth} height={setHeight} />
          <GIT_SVG width={setWidth} height={setHeight} />
          <TAILWIND_SVG width={setWidth} height={setHeight} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
