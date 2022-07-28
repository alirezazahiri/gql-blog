import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_BLOG_BY_SLUG } from "../../../gql/queries.gql";
import { Avatar, Container, Typography, Grid, Box } from "@mui/material";
import sanitize from "sanitize-html";
import Loader from "../../../common/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG_BY_SLUG, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h4>ERROR</h4>;

  const {
    post: { title, author, content, coverImage },
  } = data;
  
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverImage.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ marginLeft: "10px", width: 80, height: 80 }}
          />
          <Box component="div" display="flex" flexDirection="column">
            <Typography component="h5" variant="p" color="text.primary">
              {author.name}
            </Typography>
            <Typography component="h5" variant="p" color="text.secondary">
              {author.proficiency}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitize(content.html) }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
