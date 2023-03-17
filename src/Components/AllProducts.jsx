import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProduct } from "../Slices/ProductsSlice";
// import { Link } from "react-router-dom";
import { addBasket } from "../Slices/BasketSlice";
import { Button } from "antd";

const AllProducts = () => {
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.persistedReducer.basket.basket);

  useEffect(() => {
    axios
      .get("https://onlineshop-back.onrender.com/api/products")
      .then((res) => dispatch(getProduct(res.data)));
  }, []);

  return (
    <div className="mainmain">
      <div className="container-cart">
        {products.map((product) => (
          <div className="cart" key={product._id}>
            <img className="pics" src={product.image} alt={product.title} />
            <h1 className="productname">{product.title}</h1>
            <p className="price">{product.price} $</p>
            <Button
              onClick={() => {
                const count = 1;
                const totalPrice = product.price;
                const closeBtn = product.closeBtn;
                const copyProduct = {
                  ...product,
                  count,
                  totalPrice,
                  closeBtn,
                };

                dispatch(addBasket(copyProduct));

                console.log(copyProduct);
              }}
              disabled={
                [...basket].find((item) => item._id == product._id)
                  ? true
                  : false
              }
            >
              {[...basket].find((item) => item._id == product._id)
                ? "Added"
                : "Add"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
