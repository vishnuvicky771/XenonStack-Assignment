import React from "react";
import "./CollectionItem.css";
import CustomButton from "../custom-button/CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { Grid } from "@mui/material";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = item;
  const handleOnMouseEnter = (event) => {
    const target = event.target.children[0];
    if (target) {
      target.style.display = "flex";
    }
  };

  const handleOnMouseLeave = (event) => {
    const target = event.target.children[0];
    if (target) target.style.display = "none";
  };

  const handleCartMouseEnter = (event) => {
    const target = event.target;
    if (target) {
      target.style.backgroundColor = "black";
      target.style.color = "white";
      target.style.border = "2px solid black";
    }
  };

  const handleCartMouseLeave = (event) => {
    const target = event.target;
    if (target) {
      target.style.backgroundColor = "white";
      target.style.color = "black";
    }
  };

  return (
    <Grid item xs={2} sx={{ position: "relative" }} minWidth={"300px"}>
      <div
        className="collection-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div
          className="add-to-cart"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
        >
          <CustomButton
            type="button"
            size="button-large"
            inverted={true}
            onClick={() => dispatch(addItem(item))}
          >
            ADD TO CART
          </CustomButton>
        </div>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{"$" + price}</span>
      </div>
    </Grid>
  );
}

export default CollectionItem;
