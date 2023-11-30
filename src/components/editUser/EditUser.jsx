import React, { useEffect } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/Action/actionUsers";
import * as Yup from "yup";

const EditUser = () => {
  const { contacts } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const item = contacts.find((item) => item.id == params.id);
    // console.log(item);
    setValues({
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      if (dispatch(editUser(values))) navigate("/");
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[0-9]+$/, "Must be a number")
        .required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      phone: Yup.string().required("Phone is required"),
    }),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = formik;

  return (
    <form onSubmit={handleSubmit} container>
      {/* <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ mt: 10, mx: "auto", width: 3 / 10 }}
      ></Box> */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: 1, mt: 10, width: 3 / 10, mx: "auto" }}
      >
        <Typography variant="h4" gutterBottom>
          Edit User
        </Typography>
        {/* id */}
        <TextField
          id="outlined-read-only-input"
          label="ID"
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
          sx={{ mt: 3, width: 1 }}
          name="id"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.id}
        />
        {/* name */}
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          sx={{ mt: 3, width: 1 }}
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        {/* email */}
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          sx={{ mt: 3, width: 1 }}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        {/* phone */}
        <TextField
          required
          id="outlined-required"
          label="Phone"
          defaultValue=""
          sx={{ mt: 3, width: 1 }}
          name="phone"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.phone}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
        <Stack spacing={2} direction="row" sx={{ mt: 3, width: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{ mr: 1 }}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </form>
    // </Box>
  );
};

export default EditUser;
