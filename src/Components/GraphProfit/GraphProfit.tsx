import { Card } from "antd";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./GraphProfit.scss";

const GraphProfit = () => {
  const data = [
    {
      name: "Mon",
      sales: 4000,
      target: 2400,
      amt: 2400,
    },
    {
      name: "Tue",
      sales: 3000,
      target: 1398,
      amt: 2210,
    },
    {
      name: "Wed",
      sales: 2000,
      target: 9800,
      amt: 2290,
    },
    {
      name: "Thu",
      sales: 2780,
      target: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      sales: 1890,
      target: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      sales: 2390,
      target: 3800,
      amt: 2500,
    },
    {
      name: "Sun",
      sales: 3490,
      target: 4300,
      amt: 2100,
    },
  ];

  return (
    <Card className="graph-profit-container">
      <h3>Summary Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default GraphProfit;
