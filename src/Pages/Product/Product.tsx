import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/Config/Store";
import { IProduct, getProductList } from "./Product.reducer";
import { Button, Image, Rate, Table, TableColumnsType, Tag } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import "./Product.scss";

const Product: React.FC = () => {
  const { data, isLoadingProduct } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();
  const [dataList, setDataList] = useState<IProduct[]>([]);
  
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
      sorter: true,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (item, record) => (
        <Rate
          character={<HeartOutlined />}
          defaultValue={record.rating.rate}
          allowHalf
        />
      ),
      sorter: true,
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

  useEffect(() => {
    dispatch(getProductList({ limit: 5 }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setDataList(data);
    }
  }, [data]);

  return (
    <div>
      <h1>Product</h1>
      <Table columns={columns} dataSource={dataList} loading={isLoadingProduct} />
    </div>
  );
};

export default Product;
