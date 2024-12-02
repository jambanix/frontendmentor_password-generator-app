import { forwardRef } from "react"

export const GeneratedPassword = forwardRef(({password, className}, ref) => {
  return (
    <section className={`${className}`}>
      <input type="text" disabled={true} className="flex-grow bg-dark-grey" ref={ref} value={password} placeholder="P4$5W0rD!"/>
      <img src="images/icon-copy.svg" alt="Copy to clipboard"/>
    </section>
  )
});