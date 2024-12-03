import { useState } from "react";
import { IconArrow } from "./icons/IconArrow";


export const Button = ({className, onClick}) => {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <button className={className} onClick={onClick} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <p>GENERATE</p>
      {isHovering
      ? <IconArrow colour="neon-green"/>
      : <IconArrow colour="very-dark-grey"/>
      }
    </button>
  )
}