import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          وبلاگ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
