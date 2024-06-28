import DISCORD_SVG from "./SVG/DISCORD_SVG";
import EMAIL_SVG from "./SVG/EMAIL_SVG";
import GITHUB_SVG from "./SVG/GITHUB_SVG";

const Social = () => {
  const setHeight = 80;
  const setWidth = 80;
  return (
    <div>
      <div className="container rounded-t-lg mx-auto bg-violet-600 text-white font-semibold text-lg py-8 px-8 mt-4">
        <div>
          <p>
            I build Full stack web applications and am looking to make it my
            career full time.
          </p>
          <p className="text-sm">Coding on and off for over 15 years</p>
        </div>
      </div>
      <div className="container rounded-b-lg mx-auto bg-violet-800 text-white font-semibold text-lg px-4">
        <div className="flex flex-row justify-around">
          <GITHUB_SVG width={setWidth} height={setHeight} />
          <DISCORD_SVG width={setWidth} height={setHeight} />
          <EMAIL_SVG width={setWidth} height={setHeight} />
        </div>
      </div>
    </div>
  );
};

export default Social;
