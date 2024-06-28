export default function Email() {
  return (
    <a href="mailto:christopherbhall@live.com">
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
        width="80"
        height="80"
        viewBox="0 0 68 68"
        fill="none"
        className="hover:glow"
      >
        <rect
          x="2"
          y="12"
          width="60"
          height="40"
          rx="5"
          ry="5"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <polyline
          points="1,16 33,33 61,16"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </a>
  );
}
