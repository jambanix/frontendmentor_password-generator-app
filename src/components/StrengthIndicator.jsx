import { strengthQuantifiers } from "../lib/password"

export const StrengthIndicator = ({ strength }) => {

  const strengthQuantifier = strengthQuantifiers[strength];
  const colourClass = () => {
    switch (strengthQuantifier) {
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
  }
  
  return (
    <div className="flex gap-2">
      <p>{strength}</p>
      <div className="flex gap-1">
        {Object.values(strengthQuantifiers).slice(1).map((quantifier, index) => (
          <div key={index} className={`w-1 h-3 ${colourClass()}`}></div>
        ))
      }
      </div>
    </div>
  )
}