import React from "react";
import Color, { ColorProps } from "./Color";
import { Story } from "@storybook/react";

import { Spacing } from "@ds/foundation";

// css
import "@ds/scss/lib/Utilities.css";

export default {
  title: "Atoms/Color",
  argTypes: {
    hexCode: {
      description: "Color code.",
    },
    width: {
      description: "width",
      options: Spacing,
      control: {
        type: "select",
      },
    },
    height: {
      description: "heigth",
      options: Spacing,
      control: {
        type: "select",
      },
    },
  },
  args: {
    hexCode: "pink",
    width: "xxxl",
    height: "xxxl",
  },
};

export const base: Story<ColorProps> = (args) => <Color {...args} />;

