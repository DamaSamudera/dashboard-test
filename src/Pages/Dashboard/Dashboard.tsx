import React from "react";
import { Col, Row } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import StatisticCard from "src/Components/StatisticCard/StatisticCard";
import GraphProfit from "src/Components/GraphProfit/GraphProfit";
import GraphProduct from "src/Components/GraphProduct/GraphProduct";
import "./Dashboard.scss";
import TopProduct from "src/Components/TopProduct/TopProduct";
import OrderHistory from "src/Components/OrderHistory/OrderHistory";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Row gutter={16}>
        <Col span={6}>
          <StatisticCard
            color="#3f8600"
            icon={<ArrowUpOutlined />}
            presicion={2}
            statisticVal={11.28}
            statisticTitle="923 sold"
            title="Total Sales"
            value="9,000"
          />
        </Col>
        <Col span={5}>
          <StatisticCard
            color="#cf1322"
            icon={<ArrowDownOutlined />}
            presicion={2}
            statisticVal={3.3}
            statisticTitle="300"
            title="Today's Sales"
            value="100"
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            color="#3f8600"
            icon={<ArrowUpOutlined />}
            presicion={2}
            statisticVal={13.3}
            statisticTitle="30 new member"
            title="New Member"
            value="230"
          />
        </Col>
        <Col span={7}>
          <StatisticCard
            color="#3f8600"
            icon={<ArrowUpOutlined />}
            presicion={2}
            statisticVal={30.3}
            statisticTitle="$ 3.000"
            title="Today's Profit"
            value="$ 8.000"
          />
        </Col>
        <Col span={12}>
          <GraphProfit />
        </Col>
        <Col span={12}>
          <GraphProduct />
        </Col>
        <Col span={16}>
          <TopProduct />
        </Col>
        <Col span={8}>
          <OrderHistory />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
