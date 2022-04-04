import React from "react";
import useChart from "../Hooks/useChart";

import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import Charts from "./Charts";

const Dashboard = () => {
  //custom hook
  const [charts] = useChart();

  return (
    <div className="py-14 flex justify-center overflow-hidden">
      <div className="grid md:grid-cols-2 gap-3">
        {/* ----------------- Line Chart ------------------ */}

        <div>
          <h3 className="text-center mt-5 mb-8 font-bold text-2xl text-blue-600">
            Monthly Sell Graph
          </h3>
          <LineChart
            className="mx-9"
            width={380}
            height={300}
            data={charts}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#0095FF" />
            <Line type="monotone" dataKey="revenue" stroke="#FF0000" />
            <Line type="monotone" dataKey="month" stroke="#04ae0d" />
            <Line type="monotone" dataKey="investment" stroke="#9908d7" />
          </LineChart>
        </div>
        {/* ----------------- Area Chart ------------------ */}
        <div>
          <h3 className="text-center mt-5 mb-8 font-bold text-2xl text-blue-600">
            Monthly Revenue Graph
          </h3>
          <AreaChart
            className="mx-10"
            width={370}
            height={300}
            data={charts}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#45e918" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#45e918" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f03892" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f03892" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#45e918"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#f03892"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        {/* ----------------- Pie Chart ------------------ */}
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
