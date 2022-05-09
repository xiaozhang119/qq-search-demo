import type { ReactNode, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLAttributes> {
  title?: ReactNode;
  children?: ReactNode;
  ghost?: boolean;
  className?: string;
  direction?: "row" | "column";
}
