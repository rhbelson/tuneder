import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import "./AreaChart.js";

export default class AChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: 800, height: 250 };
  }
  updateDimensions = () => {
    let rect = this.container.getBoundingClientRect();
    if (this.state.width !== rect.width || this.state.height !== rect.height) {
      this.setState({
        width: rect.width - 40,
        height: rect.height - 100
      });
    }
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions, false);
  }
  componentDidUpdate() {
    window.addEventListener("resize", this.updateDimensions, false);
  }

  render() {
    const { title, data, dataKey, stroke, fill } = this.props;
    return (
      <div className="container-chart">
        <div
          className="card"
          ref={container => {
            this.container = container;
          }}
        >
          <div className="card-header">
            <h5>{title ? title : "Your Secret Streams"}</h5>
          </div>

          <div className="card-body">
            <AreaChart
              data={data}
              syncId="anyId"
              width={this.state.width}
              height={this.state.height}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={dataKey ? dataKey : "Streams"}
                stroke={stroke ? stroke : "#8884d8"}
                fill={fill ? fill : "#8884d8"}
              />
            </AreaChart>
          </div>
        </div>
        {/*         

        <h5 style={{marginTop:"3%"}}>Your Revenue ($0.01s USD)</h5>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Revenue" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart> */}
      </div>
    );
  }
}
