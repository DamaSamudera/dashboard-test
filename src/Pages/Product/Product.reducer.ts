import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import axios from "axios";

interface product {
  isLoadingProduct: boolean;
  data: IProduct[];
  isError: boolean;
}

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number,
    count: number
  }
}

const initialState: product = {
  isLoadingProduct: false,
  data: [],
  isError: false,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.isLoadingProduct = true;
    })
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      if (payload) {
        state.data = payload;
      }
      state.isLoadingProduct = false;
    })
    builder.addCase(getProductList.rejected, (state) => {
      state.isError = true;
    })
  }
})

export const getProductList = createAsyncThunk(
  'product/getList',
  async (payload?: { limit: number },) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${payload?.limit}`)
      return data;
    } catch (error: any) {
      notification.error({
        message: 'Error',
        description: error.response.data,
      });
    }
  }
);

export default productSlice.reducer;
