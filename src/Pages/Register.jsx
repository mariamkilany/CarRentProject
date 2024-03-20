import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyrights from "../Components/navbar/Copyrights";
import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../features/authentication/authActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../features/authentication/authSlice";

const defaultTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 25,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function Register() {
  const [open, setOpen] = useState(false);
  const [FaildRegister, setFaildRegister] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    password: "",
    agree: false,
  });
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setCookie = (payload) => {
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "user=" + JSON.stringify(payload) + ";" + expires + ";path=/";
  };

  const UsersApi = "https://65d24788987977636bfc333b.mockapi.io/api/users";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true);
    setNewUser(newUser);
    const response = await axios({
      method: "get",
      url: `${UsersApi}`,
    });
    const isUserAlreadyRegistered = response.data.filter(
      (user) => user.email === newUser.email
    )[0];
    console.log("isUserAlreadyRegistered: ", !!isUserAlreadyRegistered);

    if (!isUserAlreadyRegistered) {
      dispatch(RegisterUser(newUser));
      dispatch(setUser(newUser));
      setFaildRegister(false);
      setCookie({
        ...newUser,
        name: newUser.firstName + " " + newUser.lastName,
      });
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setFaildRegister(true);
      console.log("Email Already Register");
    }

    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const isFormValid = () => {
    return (
      newUser.firstName &&
      newUser.lastName &&
      newUser.jobTitle &&
      newUser.email &&
      newUser.password &&
      newUser.agree
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="jobTitle"
                  label="jobTitle"
                  name="jobTitle"
                  autoComplete="jobTitle"
                  value={newUser.jobTitle}
                  onChange={(e) =>
                    setNewUser({ ...newUser, jobTitle: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={FaildRegister}
                  helperText={
                    FaildRegister
                      ? "Email is Already Registered Before"
                      : "Please Enter Your Email"
                  }
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={newUser.agree}
                      name="agree"
                      color="primary"
                      onChange={(e) =>
                        setNewUser({
                          ...newUser,
                          agree: e.target.checked,
                        })
                      }
                    />
                  }
                  label="I Agree To The Guide Line Rules."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              disabled={!isFormValid()}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyrights sx={{ mt: 5 }} />
        <Backdrop
          open={open}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>{" "}
      </Container>
    </ThemeProvider>
  );
}
