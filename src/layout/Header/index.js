import { AppBar, Typography, Toolbar, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            وبلاگ
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
