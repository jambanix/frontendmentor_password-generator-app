import { forwardRef } from "react"

export const GeneratedPassword = forwardRef(({password}, ref) => {
  return (
    <section className="p-4 flex justify-between bg-dark-grey">
      <input type="text" disabled={true} className="flex-grow bg-dark-grey" ref={ref} value={password} placeholder="P4$5W0rD!"/>
      <img src="images/icon-copy.svg" alt="Copy to clipboard"/>
    </section>
  )
});