import { forwardRef } from "react";

export const CheckOption = forwardRef(({ label, checked, onChange }, ref) => {
  return (
    <div className="flex gap-3">
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={onChange}
        className="invert checked:accent-neon-green checked:invert-0"
        value={label}
      />
      <label htmlFor="">{label}</label>
    </div>
  );
});
