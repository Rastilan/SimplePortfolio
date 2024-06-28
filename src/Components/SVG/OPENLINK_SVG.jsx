import PropTypes from "prop-types";

function OPENLINK_SVG({ width, height }) {
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="-10 -10 70 70"
        fill="#FFFFFF"
        className="hover:glow"
      >
        <path d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.59375 2 L 38.59375 10 C 39.292969 10.199219 39.800781 10.707031 40 11.40625 L 48 3.40625 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 0.898438 10 0 10.898438 0 12 L 0 48 C 0 49.101563 0.898438 50 2 50 L 38 50 C 39.101563 50 40 49.101563 40 48 L 40 12 C 40 11.800781 40.007813 11.699219 39.90625 11.5 L 27.09375 24.3125 C 26.894531 24.511719 26.605469 24.59375 26.40625 24.59375 C 26.105469 24.59375 25.886719 24.511719 25.6875 24.3125 C 25.289063 23.914063 25.289063 23.304688 25.6875 22.90625 L 38.5 10.09375 C 38.300781 9.992188 38.199219 10 38 10 Z"></path>
      </svg>
    </div>
  );
}

OPENLINK_SVG.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default OPENLINK_SVG;