import { Field, Formik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Header from "../header/index";
import { SignUpSchema } from "../../validation/AddUserSchema";
import "./addEmployee.css";
import axios from "axios";

const baseUrl = "https://cf70-14-99-102-226.ngrok.io/developer";
const AddEmployee = () => {
  return (
    <>
      <Header />
      <div className="container col-md-4">
        <div className="mx-4 my-4 bg-grey font-weight-bold">
          <Container
            component="main"
            maxWidth="xs"
            className="card shadow-lg p-4 EmployeeBox"
          >
            <h3 className="font-weight-bold py-4 text-center">Add Employee</h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                number: "",
                address: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                try {
                  console.log(values);
                  axios.post(baseUrl, { values });
                } catch (error) {
                  console.log("Error...");
                }
              }}
            >
              {({ handleSubmit, setFieldValue, errors, touched }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <div className="form-group">
                        <i class="fas fa-user"></i>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                        />

                        {errors.name && touched.name ? (
                          <p className="error_message">{errors.name}</p>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <i class="fas fa-envelope"></i>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                          <p className="error_message">{errors.email}</p>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <i class="fas fa-mobile"></i>
                        <Field
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                        {errors.number && touched.number ? (
                          <p className="error_message">{errors.number}</p>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <i class="fas fa-house"></i>
                        <Field
                          as="textarea"
                          type="text"
                          name="address"
                          className="form-control pt-2"
                          placeholder="Address"
                        />
                        {errors.address && touched.address ? (
                          <p className="error_message">{errors.address}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="d-flex mb-3 justify-content-center">
                      <Button
                        className="employee-btn"
                        style={{ backgroundColor: "#00A0E2" }}
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button className="employee-btn btn-danger" type="reset">
                        Reset
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
