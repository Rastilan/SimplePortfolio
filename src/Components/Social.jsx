import Discord from "./SVG/Discord";
import Email from "./SVG/Email";
import Github from "./SVG/Github";

const Social = () => {
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
          <Github />
          <Discord />
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Social;
