import { getStrengthDescription } from "../lib/password";

export const StrengthIndicator = ({ strength }) => {
  const strengthDescription = getStrengthDescription(strength);
  const colourClass = () => {
    switch (strength) {
      case 1:
        return "bg-red";
      case 2:
        return "bg-orange";
      case 3:
        return "bg-yellow";
      case 4:
        return "bg-neon-green";
      default:
        return "bg-transparent";
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <p className="uppercase text-almost-white">
        {strengthDescription !== "none" ? strengthDescription : ""}
      </p>
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4].map((level) => {
          return level <= strength ? (
            <div
              key={level}
              className={`w-[10px] h-[28px] ${colourClass()}`}
            ></div>
          ) : (
            <div
              key={level}
              className="w-[10px] h-[28px] bg-very-dark-grey border border-almost-white"
            ></div>
          );
        })}
      </div>
    </div>
  );
};
