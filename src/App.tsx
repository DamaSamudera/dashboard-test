import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "src/Config/Router";
import { ConfigProvider } from "antd";
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#776B5D",
            borderRadius: 4,
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
