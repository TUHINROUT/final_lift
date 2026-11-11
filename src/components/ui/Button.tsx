import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline";
  children: ReactNode;
}

export default function Button({ variant = "gold", children, className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-transform duration-200 hover:scale-[1.03]";
  const styles = variant === "gold" ? "btn-gold" : "btn-outline";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
