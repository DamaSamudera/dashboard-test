import React from "react";
import { Layout } from "antd";

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <Layout.Footer className="app-footer">
      ©{new Date().getFullYear()} Created by Dama Samudera
    </Layout.Footer>
  );
};

export default Footer;
