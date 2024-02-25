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
import { useState } from "react";
import Copyrights from "../Components/navbar/Copyrights";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { canUserLogin } from "../features/authentication/authActions";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { setUser } from "../features/authentication/authSlice";
import { jwtDecode } from "jwt-decode";

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
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [open, setOpen] = useState(false);
  const [FaildLogin, setFaildLogin] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setCookie = (payload) => {
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "user=" + JSON.stringify(payload) + ";" + expires + ";path=/";
  };

  // https://blog.logrocket.com/guide-adding-google-login-react-app/
  const responseMessage = (response) => {
    const data = jwtDecode(response.credential);
    const user = {
      name: data.name,
      firstname: data.given_name,
      lastname: data.family_name,
      email: data.email,
      avatar: data.picture,
      isAdmin: false,
      googleAcount: true,
    };
    dispatch(setUser(user));
    setCookie(user);
    navigate("/home");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  // Login
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    dispatch(canUserLogin(login)).then((user) => {
      if (
        user.payload.email === login.email &&
        user.payload.password === login.password
      ) {
        if (login.rememberMe) {
          setCookie(user.payload);
        }
        setFaildLogin(false);
        navigate("/home");
      } else {
        setFaildLogin(true);
      }
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
            <Button onClick={() => console.log(user)}>Get User</Button>
            <GoogleLogin
              useOneTap
              onSuccess={responseMessage}
              onError={errorMessage}
            />
            <Button
              onClick={() => {
                googleLogout();
                dispatch(setUser({ user: {} }));
                setCookie("{ user: {} }");
                navigate("/");
              }}
            >
              LogOut
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
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
