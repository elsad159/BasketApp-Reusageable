import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { counterMinus, counterPlus } from "../Slices/BasketSlice";
import CloseIcon from "@mui/icons-material/Close";

const Basket = () => {
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const dis = useDispatch();

  return (
    <div className="mainmain">
      {basket.map((addedProduct) => (
        <div className="basketCart">
          <div className="nameOfAddedProduct">
            <img
              className="pics"
              src={addedProduct.image}
              alt={addedProduct.title}
            />
            <h1>{addedProduct.title}</h1>
          </div>
          <div className="counter">
            <Button
              aria-label="decrement value"
              onClick={() => dis(counterMinus(addedProduct._id))}
            >
              -
            </Button>
            <p className="zero">{addedProduct.count}</p>
            <Button
              aria-label="Increment value"
              onClick={() => dis(counterPlus(addedProduct._id))}
            >
              +
            </Button>
          </div>
          <div className="price">
            <span>{addedProduct.totalPrice} $</span>
          </div>
          <div className="closeIcon">
            <CloseIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
