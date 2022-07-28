import React from "react";
import { useQuery } from "@apollo/client/react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../gql/queries.gql";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>ERROR</h4>;

  const { authors } = data;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index < authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
