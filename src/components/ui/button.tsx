import React from "react";
import { cn } from "@/lib/utils"; // Optional utility to merge class names

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant = "default", size = "default", ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl";

    const variants = {
      default:
        "bg-[#164897] text-white hover:bg-[#123a7a] focus:ring-[#123a7a]",
      outline:
        "border-2 border-[#164897] text-[#164897] hover:bg-[#164897] hover:text-white focus:ring-[#123a7a]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-2 text-base",
      lg: "px-6 py-2 text-lg rounded-2xl shadow-md",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
