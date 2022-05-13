import React from "react";
import ReactDOM from "react-dom";

import { Color, Text } from "@ds/react";
import "@ds/scss/lib/Utilities.css";
import "@ds/scss/lib/Text.css";


ReactDOM.render(
  <>
    <Color hexCode="#000" />
    <Text size="xl">Test</Text>
  </>,
  document.querySelector("#root")
);
