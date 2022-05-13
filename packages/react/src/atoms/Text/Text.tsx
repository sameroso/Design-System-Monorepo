import React from "react";
import { FontSize } from "@ds/foundation";

export interface TextProps {
  size?: keyof typeof FontSize;
  children: React.ReactNode | React.ReactNode[];
}

const Text = ({ size = FontSize.base, children }: TextProps) => {
  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
