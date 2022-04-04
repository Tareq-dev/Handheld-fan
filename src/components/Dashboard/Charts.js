import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

class Charts extends React.Component {
  //Pie Data

  COLORS = ["#AF19FF", "#00C99F", "#FFBB28", "#FF8042", "#0076FE"];
  pieData = [
    {
      name: "Chrome",
      value: 68.85,
    },
    {
      name: "Firefox",
      value: 7.91,
    },
    {
      name: "Edge",
      value: 6.85,
    },
    {
      name: "Internet Explorer",
      value: 6.14,
    },
    {
      name: "Others",
      value: 10.25,
    },
  ];

  //Pie custom tooltip

  CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };
  render() {
    return (
      <div className="mx-8 py-14 flex justify-center">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <h3 className="mx-14 mt-5 mb-8 font-bold text-2xl text-blue-600">
              Monthly Usages
            </h3>
            <PieChart width={400} height={300}>
              <Pie
                data={this.pieData}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {this.pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={this.COLORS[index % this.COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<this.CustomTooltip />} />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
