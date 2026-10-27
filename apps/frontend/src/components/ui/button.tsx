import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", loading, children, className = "", disabled, ...props }, ref) => {
    const baseStyles = "flex h-11 w-full items-center justify-center gap-2 rounded-md font-['Space_Grotesk'] text-[13px] font-semibold shadow-xs transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";
    const variants = {
      primary: "bg-[#1B1C18] text-white hover:bg-[#3A3B37]",
      secondary: "border border-[#E9E8E1] bg-[#F5F3EC] text-[#1B1C18] hover:bg-[#E9E8E1]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {loading && <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";