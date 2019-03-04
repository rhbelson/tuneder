import React from "react";
import { Chart } from "react-charts";
 
const AreaChart = (
  // A react-chart hyper-responsively and continuusly fills the available
  // space of its parent element automatically
  <div
    style={{
      width: "400px",
      height: "300px"
    }}
  >
    <Chart
      series={{ type: 'area' }}
      data={[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
  </div>
);

export default AreaChart;