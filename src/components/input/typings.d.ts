import type { InputHTMLAttributes } from "react";

type InputSize = "s" | "m" | "l";

export interface InputProps extends InputHTMLAttributes {
  onChange?: (value?: string) => void;
  initValue?: string;
  value?: string;
  size?: InputSize;
  hasClear?: boolean;
  [key: string]: any;
}
