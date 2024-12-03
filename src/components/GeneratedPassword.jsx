import { forwardRef } from "react"
import { IconClipboard } from "./icons/IconClipboard";

export const GeneratedPassword = forwardRef(({password, className, clipboardOnClick}, ref) => {
  return (
    <section className={`${className}`}>
      <input type="text" disabled={true} className="flex-grow bg-dark-grey" ref={ref} value={password} placeholder="P4$5W0rD!"/>
      <IconClipboard onClick={clipboardOnClick} />
    </section>
  )
});