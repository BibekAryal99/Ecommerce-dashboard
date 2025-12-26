import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

export function buttonVariants() {
  // This is a placeholder function to satisfy imports
  return "";
}
