import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-accent-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-blue-glow",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-accent-purple/60 hover:bg-white/[0.07]",
  ghost: "text-slate-300 hover:text-white"
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
