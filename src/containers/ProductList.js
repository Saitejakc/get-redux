import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);
  return (
    <div>
      <h1>ProductList</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductList;
// className="ui grid container"
