import type { ReactNode, HTMLAttributes } from "react";

export interface SpinProps extends HTMLAttributes<HTMLAttributes> {
  visible?: boolean;
  children?: ReactNode;
}
