import React from "react";
import ReactDOM from "react-dom";

import { Color, Text, Margin, Select } from "@ds/react";
import "@ds/scss/lib/Utilities.css";
import "@ds/scss/lib/Text.css";
import "@ds/scss/lib/Margin.css";
import "@ds/scss/lib/Select.css";


const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <>
    <Color hexCode="#000" />
    <Margin left={true} space="xxl">
      Samer
    </Margin>
    <Text size="xl">Test</Text>
    <div style={{ padding: "40px" }}>
      <Select options={options} />
    </div>
    ,
  </>,
  document.querySelector("#root")
);
