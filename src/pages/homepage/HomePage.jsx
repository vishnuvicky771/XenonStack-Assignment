import React from "react";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu";
import { HomePageContainer } from "./HomePageStyles";
import { Stack } from "@mui/material";

function HomePage() {
  return (
    <Stack width={"100vw"} sx={{ overflowX: "hidden" }}>
      <DirectoryMenu />
    </Stack>
  );
}

export default HomePage;
