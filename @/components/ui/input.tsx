import * as React from "react";
import { cn } from "@/components/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, description, ...props }, ref) => {
  return (
    // <div className="w-full">
    <>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {description && <p className="background text-xs text-muted-foreground">{description}</p>}
    </>
    // </div>
  );
});
Input.displayName = "Input";

export { Input };
