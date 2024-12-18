import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((error) => {
      console.log('error', error)
    });

    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}


export default ProductListing
