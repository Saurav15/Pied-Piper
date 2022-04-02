import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import { SignInSchema } from "../../validation/SigninSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userReducer";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignIn() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        className="card shadow-lg"
        style={{ marginTop: "10%" }}
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
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
                dispatch(login(true))
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
                  <label>Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control mb-4"
                  />
                  {errors.email && touched.email ? (
                    <p className="error_message">{errors.email}</p>
                  ) : null}

                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <p className="error_message">{errors.password}</p>
                  ) : null}
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="col-md-6"
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
    </ThemeProvider>
  );
            }
