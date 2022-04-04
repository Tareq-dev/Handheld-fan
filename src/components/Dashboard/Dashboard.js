import React from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

class LineRechartComponent extends React.Component {
  //Line Data

  data = [
    {
      month: "Nov 21",
      Sell: 15432,
      Profit: 10342,
    },
    {
      month: "Dec 21",
      Sell: 13742,
      Profit: 12246,
    },
    {
      month: "jan 22",
      Sell: 14565,
      Profit: 13556,
    },
    {
      month: "Feb 22",
      Sell: 19654,
      Profit: 20465,
    },
    {
      month: "Mar 22",
      Sell: 25765,
      Profit: 30553,
    },
  ];

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
      <div className="py-14 flex justify-center">
        <div className="grid md:grid-cols-2 gap-6">
          {/* ----------------- Line Chart ------------------ */}
          <div>
            <h3 className="text-center mt-5 mb-8 font-bold text-3xl text-blue-600">
              Monthly Sell Graph
            </h3>
            <LineChart
              className=""
              width={400}
              height={300}
              data={this.data}
              margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sell" stroke="#0095FF" />
              <Line type="monotone" dataKey="Profit" stroke="#FF0000" />
            </LineChart>
          </div>

          {/* ----------------- Pie Chart ------------------ */}

          <div>
            <h3 className="text-center mt-5 mb-8 font-bold text-3xl text-blue-600">
              Monthly Browser Usages
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

export default LineRechartComponent;
