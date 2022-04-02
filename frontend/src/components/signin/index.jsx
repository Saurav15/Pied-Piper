/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import { SignInSchema } from "../../validation/SigninSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userReducer";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assests/images/logo.png";
const theme = createTheme();

export default function SignIn() {
  React.useEffect(() => {
    // Body Class for Page
    const body = document.querySelector("body");
    document.body.classList.add("login-page");
    return () => {
      body.classList.remove("login-page");
    };
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme} className="login">
      <div className="login-main">
        <div className="logo-wrap">
          <img src={logo} className="logo" />
        </div>
        <Container
          component="main"
          maxWidth="xs"
          className="card shadow-lg loginBox"
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                console.log(values);
                if (
                  values.email === "hhh@gmail.com" &&
                  values.password === "123456"
                ) {
                  dispatch(login(true));
                  navigate("/dashboard");

                  alert("Login Successful");
                } else {
                  alert("Please Enter Valid Email and Password");
                }
              }}
            >
              {({ handleSubmit, errors, touched }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <i class="fas fa-user"></i>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      {errors.email && touched.email ? (
                        <p className="error_message">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <i class="fas fa-key"></i>
                      <Field
                        type="password"
                        name="password"
                        className="form-control "
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <p className="error_message">{errors.password}</p>
                      ) : null}
                    </div>

                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <div className="text-center">
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="signin-btn"
                        sx={{ mt: 3, mb: 5 }}
                      >
                        Sign In
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
