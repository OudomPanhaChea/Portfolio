import { cn } from "@/lib/utils";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function CustomCard({
  children,
  className,
  hover = false,
}: CustomCardProps) {
  return (
    <div
      className={cn(
        "bg-background border border-border rounded-xl p-6",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
