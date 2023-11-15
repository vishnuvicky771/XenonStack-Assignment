import React from "react";
import "./MenuItem.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Grid, Typography, Box } from "@mui/material";

function withRouter(Component) {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component navigate={navigate} location={location} {...props} />;
  };
  return Wrapper;
}

function MenuItem({ title, imageUrl, size, navigate, linkUrl, location, idx }) {
  return (
    <Grid
      item
      lg={4}
      md={5}
      sm={5.5}
      xs={12}
      sx={{
        maxWidth: "600px !important",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          "&:hover": {
            transform: "scale(1.2)",
            transition: `transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          },
          position: "relative",
        }}
        component={"img"}
        src={imageUrl}
      />
      <Stack
        sx={{
          alignItems: "center",
          position: "absolute",
          margin: "auto",
          zIndex: 2,
          background: "white",
          opacity: 0.8,
          cursor: "pointer",
        }}
        onClick={() => navigate(`${location.pathname}${linkUrl}`)}
        p={2}
      >
        <Typography
          fontFamily={"Open Sans Condensed"}
          fontWeight={800}
          fontSize={24}
        >
          {title}
        </Typography>
        <Typography
          fontWeight={500}
          fontFamily={"Open Sans Condensed"}
          fontSize={22}
        >
          SHOP NOW
        </Typography>
      </Stack>
    </Grid>
  );
}

export default withRouter(MenuItem);
