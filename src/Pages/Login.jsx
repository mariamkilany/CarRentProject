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
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Copyrights from "../Components/navbar/Copyrights";
import { Backdrop, CircularProgress } from "@mui/material";
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const defaultTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 25,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [open, setOpen] = useState(false);
  const [FaildLogin, setFaildLogin] = useState(false);

  // Login
  const UsersApi = "https://65d24788987977636bfc333b.mockapi.io/api/users";
  const handleSubmit = (event) => {
    setOpen(true);
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // setLogin({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   rememberMe: data.get("rememberMe"),
    // });
    axios
      .get(`${UsersApi}?email=${login.email}&password=${login.password}`)
      .then((res) => {
        console.log(res.data[0]);
        if (
          res.data[0].email === login.email &&
          res.data[0].password === login.password
        ) {
          console.log("Logged-In With", res.data[0].email);
          setFaildLogin(false);
        } else {
          console.log("Wrong Email or Password");
          setFaildLogin(true);
        }
      })
      .catch((err) => {
        console.log(err.data);
        setFaildLogin(true);
      });
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  const handleChange = (event) => {
    if (event.target.name === "rememberMe") {
      setLogin({ ...login, [event.target.name]: event.target.checked });
    } else {
      setLogin({ ...login, [event.target.name]: event.target.value });
    }
  };

  useEffect(() => {
    console.log(login);
    console.log(FaildLogin);
  }, [login, FaildLogin]);

  const isFormValid = () => {
    return login.email && login.password;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={FaildLogin}
              helperText={
                FaildLogin ? "Incorrect Email" : "Please Enter Your Email"
              }
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              error={FaildLogin}
              helperText={
                FaildLogin ? "Incorrect Password" : "Please Enter Your Password"
              }
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  color="primary"
                  onChange={handleChange}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={!isFormValid()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyrights sx={{ mt: 8, mb: 4 }} />
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
