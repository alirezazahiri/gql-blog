import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_AUTHOR_BY_SLUG } from "../../../gql/queries.gql";
import { Avatar, Container, Typography, Grid } from "@mui/material";
import sanitize from "sanitize-html";
import CardEL from "../../../common/CardEL";

const Author = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_BY_SLUG, {
    variables: {
      slug,
    },
  });

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>ERROR</h4>;

  const { author } = data;
  console.log(author);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variuant="h5" color="text.secondary" mt={2}>
            {author.proficiency}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {author.name}
          </Typography>
        </Grid>
        <Grid container mt={2} spacing={2}>
          {author.posts.map(({ id, title, slug, coverImage }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <CardEL title={title} slug={slug} coverImage={coverImage} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Author;
