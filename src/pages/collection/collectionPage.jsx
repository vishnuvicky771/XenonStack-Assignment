import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import "./collectionPage.css";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shopActionTypes } from "../../redux/shop/shopActionTypes";
import { Grid, Stack } from "@mui/material";

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const dispatch = useDispatch();
  let title = null,
    items = null;
  if (collection) {
    title = collection.title;
    items = collection.items;
  }

  useEffect(() => {
    if (!collection) {
      dispatch({ type: shopActionTypes.FETCH_COLLECTIONS_START });
    }
  }, []);
  return (
    <Stack pl={4} pr={4} pt={2} pb={2}>
      <h2 className="collectionpage-title">{title}</h2>
      <Grid
        container
        gap={2}
        sx={{ width: "100%", justifyContent: "space-evenly" }}
      >
        {items ? (
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        ) : (
          <></>
        )}
      </Grid>
    </Stack>
  );
}

export default CollectionPage;
