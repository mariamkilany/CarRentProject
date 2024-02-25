import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PersonIcon from "@mui/icons-material/Person";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCarAction,
  getAllCarAction,
} from "../../../features/car/carActions";
import { useEffect } from "react";
import CloudinaryButton from "../../cloudinaryButton/CloudinaryButton";

export default function BasicModal() {
  const theme = useTheme();

  const style = (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "98%",
    bgcolor: "background.paper",
    boxShadow: 24,

    p: 5,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "80%",
      overflowY: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "90%",
      overflowY: "auto",
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const carInfo = useSelector((state) => state.car.car);
  const disaptch = useDispatch();

  useEffect(() => {
    disaptch(getAllCarAction());
  }, []);

  const id = carInfo.length > 0 ? parseInt(carInfo[carInfo.length - 1].id) : 0;

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (!inputValues.name.trim()) {
      errors.name = "Name is required";
    }
    if (!inputValues.type.trim()) {
      errors.type = "Type is required";
    }
    if (!inputValues.gasoline) {
      errors.gasoline = "gasoline is required";
    }

    if (!inputValues.steering) {
      errors.steering = " Steering Type is required";
    }
    if (
      !inputValues.chairCapacity ||
      inputValues.chairCapacity <= 0 ||
      inputValues.chairCapacity >= 11
    ) {
      errors.chairCapacity = "Capacity should be between 1 and 10";
    }

    if (!inputValues.price || inputValues.price <= 0) {
      errors.price = "Price is required and must be greater than 0";
    }
    if (!inputValues.carDesc) {
      errors.carDesc = "Description is required ";
    }
    return errors;
  };

  const [formData, setformData] = useState({
    id: "",
    name: "",
    type: "",
    steering: "",
    gasoline: "",
    chairCapacity: "",
    price: "",
    carDesc: "",
    image: "",
    transactions: [],
    reviews: [],
  });

  const handleChange = (e) => {
    const newId = id + 1;
    const chnagedId = newId.toString();

    if (e.target.name === "chairCapacity" || e.target.name === "price") {
      if (e.target.value !== "" && !/^[0-9]+$/.test(e.target.value)) {
        return;
      }
    }

    setformData((oldData) => ({
      ...oldData,
      id: chnagedId,
      [e.target.name]: e.target.value,
    }));
    const newErrors = validateValues({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: newErrors[e.target.name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateValues(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      disaptch(addCarAction(formData));
      setOpen(false);
      setformData({
        id: "",
        name: "",
        type: "",
        steering: "",
        gasoline: "",
        chairCapacity: "",
        price: "",
        carDesc: "",
        image: "",
      });
      setSubmitting(true);
    } else {
      setSubmitting(false);
    }
  };
  const handleImageUpload = (url) => {
    setformData((prev) => ({ ...prev, image: url }));
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "var(--clr-m)",
          color: "white",
          "&:hover": {
            color: "white",
            backgroundColor: " var(--clr-m-900)",
            border: "1px solid var(--clr-m)",
          },
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <AddIcon /> Add New
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style(theme)}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ color: "var(--clr-m)", fontWeight: "bold" }}
          >
            Add New Car
            <hr></hr>
          </Typography>
          <Stack direction={"row"} gap={2} my={1} alignItems={"end"}>
            <img
              borderRadius={2}
              width={"200px"}
              height={"100px"}
              boxShadow={1}
              my={2}
              src={formData.image}
            />
            <Box>
              <CloudinaryButton onImageUpload={handleImageUpload} />
            </Box>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5"> Car Name </Typography>
                <TextField
                  fullWidth
                  name="name"
                  InputProps={{
                    sx: { fontSize: "1.5rem" }, // Adjust the font size as needed
                  }}
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                {errors.name && (
                  <p className="error" style={{ color: "red" }}>
                    Name Field is required
                  </p>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h5"> Type </Typography>
                <TextField
                  fullWidth
                  name="type"
                  InputProps={{
                    sx: { fontSize: "1.5rem" }, // Adjust the font size as needed
                  }}
                  onChange={handleChange}
                  value={formData.type}
                  required
                />
                {errors.type && (
                  <p className="error" style={{ color: "red" }}>
                    Type Field is required
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5"> Steering type </Typography>
                <FormControl fullWidth>
                  <Select
                    name="steering"
                    sx={{
                      fontSize: "1.5rem", // Adjust the font size of the Select component
                      "& .MuiMenuItem-root": {
                        fontSize: "1.5rem", // Adjust the font size of the menu items
                      },
                    }}
                    onChange={handleChange}
                    value={formData?.steering}
                    required
                  >
                    <MenuItem value="manual">Manual</MenuItem>
                    <MenuItem value="automatic">Automatic</MenuItem>
                  </Select>
                  {errors.steering && (
                    <p className="error" style={{ color: "red" }}>
                      Steering Type is required
                    </p>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <Typography variant="h5"> Gasoline </Typography>
                  <Select
                    name="gasoline"
                    sx={{
                      fontSize: "1.5rem", // Adjust the font size of the Select component
                      "& .MuiMenuItem-root": {
                        fontSize: "1.5rem", // Adjust the font size of the menu items
                      },
                    }}
                    onChange={handleChange}
                    value={formData?.gasoline}
                    required
                  >
                    <MenuItem value="80">80L</MenuItem>
                    <MenuItem value="90">90L</MenuItem>
                    <MenuItem value="92">92L</MenuItem>
                    <MenuItem value="95">95L</MenuItem>
                    <MenuItem value="Gas">Gas</MenuItem>
                  </Select>
                  {errors.gasoline && (
                    <p className="error" style={{ color: "red" }}>
                      Gasoline Field is required
                    </p>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-capacity">
                    Capacity
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-capacity"
                    startAdornment={
                      <InputAdornment position="start">
                        {" "}
                        <PersonIcon />{" "}
                      </InputAdornment>
                    }
                    label="capacity"
                    name="chairCapacity"
                    sx={{ fontSize: "1.5rem" }}
                    onChange={handleChange}
                    value={formData.chairCapacity}
                    required
                  />
                  {errors.chairCapacity && (
                    <p className="error" style={{ color: "red" }}>
                      chairCapacity must not exceed 10 <br></br>
                      chairCapacity is required
                    </p>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-price">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-price"
                    startAdornment={
                      <InputAdornment position="start">EGP</InputAdornment>
                    }
                    name="price"
                    label="price"
                    sx={{ fontSize: "1.5rem" }}
                    onChange={handleChange}
                    value={formData.price}
                    required
                  />
                  {errors.price && (
                    <p className="error" style={{ color: "red" }}>
                      Price should be number <br></br>
                      Price is required
                    </p>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="h5">Description</Typography>
                <TextField
                  fullWidth
                  id="filled-multiline-static"
                  name="carDesc"
                  multiline
                  required
                  rows={4}
                  InputProps={{
                    sx: { fontSize: "1.5rem" }, // Adjust the font size as needed
                  }}
                  value={formData.carDesc}
                  onChange={handleChange}
                />
                {errors.carDesc && (
                  <p className="error" style={{ color: "red" }}>
                    Description is requied
                  </p>
                )}
              </Grid>
            </Grid>
            <Stack direction="row" justifyContent="flex-end" spacing={2} p={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "var(--clr-m)",
                  color: "white",
                  padding: "8px 30px",
                  width: "20%",
                  marginRight: "25px",
                  "&:hover": {
                    color: "white",
                    backgroundColor: " var(--clr-m-900)",
                    border: "1px solid var(--clr-m)",
                  },
                  fontSize: "1.5rem",
                }}
              >
                Add
              </Button>
              <Button
                onClick={handleClose}
                aria-label="close"
                sx={{
                  backgroundColor: "var(--clr-e-600)",
                  color: "white",
                  padding: "8px 30px",
                  width: "20%",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "var(--clr-e-800)",
                    border: "1px solid var(--clr-e-800)",
                  },
                  fontSize: "1.5rem",
                }}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
