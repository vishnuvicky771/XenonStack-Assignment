import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { Stack } from "@mui/material";

function CollectionsOverview() {
  const collectionData = useSelector(selectCollectionsForPreview);
  return (
    <Stack pl={4} pr={4} pt={2} pb={2} gap={2}>
      {collectionData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Stack>
  );
}

export default CollectionsOverview;
