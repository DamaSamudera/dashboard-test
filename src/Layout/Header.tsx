import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Layout,
  List,
  Popover,
  Row,
  Space,
  Tooltip,
} from "antd";
import {
  BellFilled,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface IHeader {
  collapsed: boolean;
  setCollapsed: Function;
  path: string;
}

const Header: React.FC<IHeader> = (props) => {
  const [open, setOpen] = useState(false);
  const { collapsed, setCollapsed, path } = props;

  const breadcrumbItem = [
    { href: "/", title: <HomeOutlined /> },
    { title: path },
  ];

  const data = [
    { title: "Product 1" },
    { title: "Product 2" },
    { title: "Product 3" },
    { title: "Product 4" },
  ];

  const notifList = (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={item.title}
            description="Product Notification"
          />
        </List.Item>
      )}
    />
  );

  return (
    <Layout.Header className="app-header">
      <Row justify="space-between">
        <Space size="middle">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Breadcrumb items={breadcrumbItem} />
        </Space>
        <Space size="large" wrap className="header-info">
          <Popover
            content={notifList}
            title="Notification"
            trigger="click"
            open={open}
            onOpenChange={(e) => setOpen(e)}
          >
            <Badge size="small" count={5}>
              <BellFilled className="header-icon" />
            </Badge>
          </Popover>
          <Avatar
            icon={<UserOutlined />}
            size={"small"}
            style={{ marginBottom: "0.5rem" }}
          />
          <Tooltip placement="bottom" title="Logout">
            <LogoutOutlined className="header-icon" />
          </Tooltip>
        </Space>
      </Row>
    </Layout.Header>
  );
};

export default Header;
