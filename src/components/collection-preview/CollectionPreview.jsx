import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.css";
import { Grid, Stack } from "@mui/material";

function CollectionPreview({ title, items, routeName }) {
  const navigate = useNavigate();
  return (
    <Stack alignItems={"center"}>
      <h1
        className="collection-title"
        onClick={() => navigate(`/shop/${routeName}`)}
      >
        {" "}
        {title.toUpperCase()}{" "}
      </h1>
      <Grid
        container
        gap={2}
        sx={{ width: "100%", justifyContent: "space-evenly" }}
      >
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Grid>
    </Stack>
  );
}

export default CollectionPreview;
