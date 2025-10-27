import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function CustomInput({
  label,
  error,
  className,
  ...props
}: CustomInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-foreground">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          "placeholder:text-foreground-secondary",
          "transition-all duration-200",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
