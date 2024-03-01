import React from "react";
import { Layout, Menu } from "antd";
import { BarChartOutlined, SkinOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface ISider {
  collapsed: boolean;
  setPath: Function;
}

const Sider: React.FC<ISider> = (props) => {
  const { collapsed, setPath } = props;
  const navigate = useNavigate();

  const menuList = [
    {
      key: "0",
      icon: <BarChartOutlined />,
      label: "Dashboard",
    },
    {
      key: "1",
      icon: <SkinOutlined />,
      label: "Product",
    },
  ];

  const handleMenu = (key: string) => {
    navigate(`/${key === "0" ? "" : menuList[Number(key)].label}`);
    setPath(menuList[Number(key)].label);
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <span className="logo-wrap">
        <img src="/Nesara.Png" alt="logo" />
        {!collapsed && <p>NESARA</p>}
      </span>
      <Menu
        onClick={(e) => handleMenu(e.key)}
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={menuList}
      />
    </Layout.Sider>
  );
};

export default Sider;
