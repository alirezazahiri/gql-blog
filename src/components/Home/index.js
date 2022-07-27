import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import Authors from "../Authors";
import Blogs from "../Blogs";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            بلاگ ها
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
