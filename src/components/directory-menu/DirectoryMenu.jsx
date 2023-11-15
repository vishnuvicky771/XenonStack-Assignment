import React, { useEffect } from "react";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectoryData } from "../../redux/directory/directorySelector";
import { useSelector } from "react-redux";
import "./DirectoryMenu.css";
import { Grid, Stack } from "@mui/material";

function DirectoryMenu() {
  const data = useSelector(selectDirectoryData);
  useEffect(() => {}, [data]);

  return (
    <Stack pl={4} pr={4} pt={2} pb={2}>
      <Grid
        container
        p={0}
        columnGap={2}
        rowGap={2}
        overflow={"hidden"}
        sx={{ justifyContent: "space-evenly" }}
      >
        {data.map(({ id, ...otherProps }, idx) => (
          <MenuItem key={id} {...otherProps} idx={idx} />
        ))}
      </Grid>
    </Stack>
  );
}

export default DirectoryMenu;
