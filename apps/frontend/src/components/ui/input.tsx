import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="font-['Space_Grotesk'] text-[13px] font-medium text-[#1B1C18]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`h-11 w-full rounded-md border bg-white px-4 font-['Space_Grotesk'] text-[13px] text-[#1B1C18] placeholder-[#747878] shadow-xs outline-none transition focus:border-[#1B1C18] ${
            error ? "border-[#EF4444]" : "border-[#E9E8E1]"
          } ${className}`}
          {...props}
        />
        {error && <span className="font-['Space_Grotesk'] text-[11px] text-[#EF4444]">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";