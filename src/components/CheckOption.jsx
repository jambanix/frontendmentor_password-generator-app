import { forwardRef } from "react";

export const CheckOption = forwardRef(({label, checked, onChange}, ref) => {
  return (
    <div className="flex gap-3">
      <input type="checkbox" ref={ref} checked={checked} onChange={onChange} className="accent-neon-green" value={label}/>
      <label htmlFor="">{label}</label>
    </div>
    
  )
});