import { Card } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./GraphProduct.scss";

const GraphProduct = () => {
  const data = [
    {
      name: "Bag",
      stock: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Glasess",
      stock: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "Shoes",
      stock: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      name: "T-Shirt",
      stock: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      name: "Pants",
      stock: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      name: "Belt",
      stock: 2390,
      sales: 3800,
      amt: 2500,
    }
  ];

  return (
    <Card className="graph-product-container">
      <h3>Summary Product</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="stock"
            fill="#CAA6A6"
            activeBar={<Rectangle fill="#CAA6A6" stroke="#FFE7E7" />}
          />
          <Bar
            dataKey="sales"
            fill="#944E63"
            activeBar={<Rectangle fill="#944E63" stroke="#FFE7E7" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default GraphProduct;
