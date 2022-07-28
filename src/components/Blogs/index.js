import React from "react";
import { GET_BLOGS_INFO } from "../../gql/queries.gql";
import { useQuery } from "@apollo/client/react";
import { Grid } from "@mui/material";
import CardEL from "../../common/CardEL";
import Loader from "../../common/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;
  if (error) return <h4>ERROR</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
