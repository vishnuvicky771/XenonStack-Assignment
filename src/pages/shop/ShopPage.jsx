import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPageContainer";
import { useDispatch, useSelector } from "react-redux";
import { CollectionsOverviewContainer } from "../../components/collection-overview/CollectionsContainer";
import { fetchCollectionsStart } from "../../redux/shop/ShopActions";
import { selectCollections } from "../../redux/shop/shopSelector";
import { Stack } from "@mui/material";

function ShopPage() {
  const dispatch = useDispatch();
  const collections = useSelector(selectCollections);
  useEffect(() => {
    if (!collections) {
      dispatch(fetchCollectionsStart());
    }
  }, [collections, dispatch]);

  return (
    <Stack pl={4} pr={4} pt={2} pb={2} gap={2}>
      <Routes>
        <Route path={`/`} element={<CollectionsOverviewContainer />} />
        <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
      </Routes>
    </Stack>
  );
}

export default ShopPage;
