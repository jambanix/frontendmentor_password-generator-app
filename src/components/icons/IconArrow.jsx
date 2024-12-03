const svg = (colourCode) => (
  <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={`${colourCode}`}
      d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
    />
  </svg>
);

export const IconArrow = ({ colour }) => {
  const colourCode = (colour) => {
    switch (colour) {
      case "neon-green":
        return "#a4ffaf";
      case "white":
        return "#ffffff";
      case "very-dark-grey":
        return "#18171f";
      default:
        return "#a4affaf";
    }
  };

  return <>{svg(colourCode(colour))}</>;
};
