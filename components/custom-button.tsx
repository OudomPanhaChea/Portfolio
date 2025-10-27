import { cn } from "@/lib/utils";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function CustomButton({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  ...props
}: CustomButtonProps) {
  const baseStyles =
    "inline-flex hover:cursor-pointer items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "overflow-hidden border border-primary text-sm lg:text-base bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors",
    secondary: "bg-navy text-white hover:bg-navy-light",
    outline:
      "border-1 border-primary",
    ghost: "text-foreground hover:bg-background-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
