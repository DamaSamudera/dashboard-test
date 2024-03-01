import { Card, Statistic } from "antd";
import { valueType } from "antd/es/statistic/utils";
import React, { ReactNode } from "react";
import "./StatisticCard.scss";

interface IStatisticCard {
  color: string;
  presicion: number;
  icon: ReactNode;
  statisticTitle?: string;
  statisticVal: valueType;
  title: string;
  value: string;
}

const StatisticCard: React.FC<IStatisticCard> = (props) => {
  const { color, icon, presicion, statisticVal, statisticTitle, title, value } =
    props;

  return (
    <Card className="card-statistic" bordered={false}>
      <h3>{title}</h3>
      <div className="card-statistic-item">
        <p>{value}</p>
        <Statistic
          title={statisticTitle}
          value={statisticVal}
          precision={presicion}
          valueStyle={{
            color: color,
            fontSize: "1rem",
          }}
          prefix={icon}
          suffix="%"
        />
      </div>
    </Card>
  );
};

export default StatisticCard;
