import { Button, Card, Image, Rate, Table, TableColumnsType, Tag } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import "./TopProduct.scss";
import { IProduct, getProductList } from "src/Pages/Product/Product.reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/Config/Store";

interface ITopProduct {}

const TopProduct: React.FC<ITopProduct> = (props) => {
  const columns: TableColumnsType<IProduct> = [
    {
      title: "",
      width: 100,
      dataIndex: "image",
      key: "image",
      render: (item) => <Image src={item} />,
      fixed: "left",
    },
    {
      title: "Product Name",
      width: 180,
      dataIndex: "title",
      key: "title",
      fixed: "left",
    },
    {
      title: "Category",
      width: 130,
      dataIndex: "category",
      key: "category",
      render: (item) => <Tag color="success">{item}</Tag>,
      sorter: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (item) => <p>$ {item.toLocaleString("us-US")}</p>,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (item, record) => (
        <Rate
          character={<HeartOutlined />}
          disabled
          defaultValue={record.rating.rate}
          allowHalf
        />
      ),
      sorter: (a, b) => a.rating.rate - b.rating.rate,
      width: 200,
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: () => <Button>action</Button>,
    },
  ];

  const { data, isLoadingProduct } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList({ limit: 5 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="top-product-container">
      <h3>Top 5 Product</h3>
      <Table
        className="table-product"
        columns={columns}
        loading={isLoadingProduct}
        dataSource={data}
        scroll={{ x: 800 }}
        pagination={false}
      />
    </Card>
  );
};

export default TopProduct;
