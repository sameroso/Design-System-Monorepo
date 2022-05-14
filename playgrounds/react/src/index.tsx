import React from "react";
import ReactDOM from "react-dom";

import { Color, Text, Margin } from "@ds/react";
import "@ds/scss/lib/Utilities.css";
import "@ds/scss/lib/Text.css";
import "@ds/scss/lib/Margin.css";


ReactDOM.render(
  <>
    <Color hexCode="#000" />
    <Margin left={true} space="xxl">
      Samer
    </Margin>
    <Text size="xl">Test</Text>
  </>,
  document.querySelector("#root")
);
