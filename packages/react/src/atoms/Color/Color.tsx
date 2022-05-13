import React from "react";
import { Spacing } from "@ds/foundation";

export interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}: ColorProps) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};

export default Color;
