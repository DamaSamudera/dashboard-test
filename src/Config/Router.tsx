import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { useState } from "react";
import Header from "src/Layout/Header";
import Sider from "src/Layout/Sider";
import Footer from "src/Layout/Footer";

// Content Pages
import Dashboard from "src/Pages/Dashboard/Dashboard";
import NotFound from "src/Pages/NotFound/NotFound";
import Product from "src/Pages/Product/Product";

const Router = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [path, setPath] = useState('Dashboard');

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} setPath={setPath} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} path={path} />
        <Layout.Content className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Router;
