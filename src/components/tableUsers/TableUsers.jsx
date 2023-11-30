import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../redux/Action/actionUsers";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const TableUsers = () => {
  const { contacts, statusSearch, newContacts } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errorText, setErrorText] = useState("");
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      // console.log("values");
      console.log(values);
      if (dispatch(addUser(values))) {
        handleClose();
      }
      // try {
      //   if (dispatch(editUser(values))) {
      //     navigate("/");
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    },

    validationSchema: Yup.object({
      id: Yup.string()
        .matches(/^[0-9]+$/, "Must be a number")
        .required("Id is required"),
      name: Yup.string().required("Name is required"),
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

  const renderLstUsers = (item) => {
    return item.map((row, index) => (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">
          <NavLink to={`/edit/${row.id}`}>
            <Button variant="outlined" sx={{ mr: 1 }}>
              <EditIcon />
            </Button>
          </NavLink>

          <Button
            variant="outlined"
            onClick={() => {
              dispatch(deleteUser(row.id));
            }}
          >
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Box
      sx={{
        mt: 5,
        mx: "auto",
        width: 9 / 10,
        height: "auto",
      }}
    >
      <Button
        variant="outlined"
        endIcon={<AddCircleOutlineOutlinedIcon />}
        sx={{ mb: 2 }}
        onClick={handleOpen}
      >
        Add Contact
      </Button>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit} container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 1,
              mt: 10,
              width: 3 / 10,
              mx: "auto",
              bgcolor: "background.paper",
              border: 0,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Add Contact
            </Typography>
            {/* id */}
            <TextField
              label="ID"
              sx={{ mt: 3, width: 1 }}
              name="id"
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                const findId = contacts.findIndex(
                  (item) => item.id == e.target.value
                );
                if (findId !== -1) {
                  setErrorText("ID already exists");
                  console.log("ID already exists");
                } else {
                  setErrorText("");
                }
              }}
              value={values?.id}
              error={Boolean(touched.id && errors.id) || Boolean(errorText)}
              helperText={touched.id && (errors.id || errorText)}
            />
            {/* name */}
            <TextField
              required
              label="Name"
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
              label="Email"
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
              label="Phone"
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
                  onClick={() => handleClose()}
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
      </Modal>
      {/* data table contact */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Option </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableCell align="center" colSpan={6}>
                  Contact Not Found
                </TableCell> */}
          <TableBody>
            {statusSearch
              ? renderLstUsers(newContacts)
              : renderLstUsers(contacts)}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableUsers;
