import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CREATE_COMMENT } from "../../../gql/mutations.gql";

const CommentForm = ({ slug }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [createComment, { loading, error, called }] = useMutation(
    CREATE_COMMENT,
    {
      variables: {
        ...formData,
        slug,
      },
    }
  );

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = () => {
    const { name, email, text } = formData;
    if (name && email && text) {
      createComment();
    } else
      toast.warn("لطفا تمام فیلد ها را پر کنید", {
        position: "top-center",
      });
  };

  useEffect(() => {
    if (called && !loading && !error) {
      toast.success("کامنت با موفقیت ارسال شد", {
        position: "top-center",
      });
    } else if (called && error) {
      toast.error("ارسال کامنت با خطا مواجه شد", {
        position: "top-center",
      });
    }
  }, [error, loading, called]);

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          variant="outlined"
          label="نام کاربری"
          name="name"
          sx={{ width: "100%" }}
          value={formData.name}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          variant="outlined"
          label="ایمیل"
          name="email"
          sx={{ width: "100%" }}
          value={formData.email}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          variant="outlined"
          label="متن"
          name="text"
          sx={{ width: "100%" }}
          value={formData.text}
          onChange={changeHandler}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained" onClick={clickHandler} disabled={loading}>
          {loading ? "در حال ارسال..." : "ارسال"}
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
