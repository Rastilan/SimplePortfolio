import JS_SVG from "./SVG/JS_SVG";
import OPENLINK_SVG from "./SVG/OPENLINK_SVG";
import REACT_SVG from "./SVG/REACT_SVG";
import TAILWIND_SVG from "./SVG/TAILWIND_SVG";

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
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row">
              <div className="p-2">
                <REACT_SVG width={setWidth} height={setHeight} />
              </div>
              <div className="p-2">
                <JS_SVG width={setWidth} height={setHeight} />
              </div>
              <div className="p-2">
                <TAILWIND_SVG width={setWidth} height={setHeight} />
              </div>
              <div className="p-2">Simple Portfolio</div>
            </div>
            <div className="p-2">
              This simple portfolio made to showcase my skills and projects in a
              clean fashion.
            </div>
          </div>
          <div className="flex p-3 self-auto">
            <a href="https://rastilan.github.io/SimplePortfolio/">
              <OPENLINK_SVG width={openLinkW} height={openLinkH} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
