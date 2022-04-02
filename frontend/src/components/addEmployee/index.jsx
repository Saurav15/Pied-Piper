import { Field, Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../header/index"
import { SignUpSchema } from "../../validation/AddUserSchema";

const AddEmployee = () => {
  return (
    <>
    <Header />
      <div className="container ">
        <div className="mt-5 ml-5 pl-3 bg-grey font-weight-bold mt-2 p-3">
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              address: "",
              skills: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              // dispatch(
              //     updateVal({
              //         name: 'pied',
              //         email: 'pied@gmail.com',
              //         number: '4988560030',
              //         address: 'Ahmedabad',
              //         skills: 'backend, frontend ',
              //     }),
              // );
              // navigate('/signin'),
              //     dispatch(() => {
              //         login(true);
              //     });
            }}
          >
            {({ handleSubmit, setFieldValue, errors, touched }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <p className="font-weight-bold h2 py-4">Add Employee</p>
                    <div className="form-group">
                      <label>Name</label>
                      <Field type="text" name="name" className="form-control" />

                      {errors.name && touched.name ? (
                        <p className="error_message">{errors.name}</p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                      />
                      {errors.email && touched.email ? (
                        <p className="error_message">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label>PhoneNo</label>
                      <Field
                        type="tel"
                        name="number"
                        className="form-control"
                      />
                      {errors.number && touched.number ? (
                        <p className="error_message">{errors.number}</p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <Field
                        as="textarea"
                        type="text"
                        name="address"
                        className="form-control"
                      />
                      {errors.address && touched.address ? (
                        <p className="error_message">{errors.address}</p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label>Skills</label>
                      <Field
                        type="text"
                        name="skills"
                        className="form-control"
                      />
                      {errors.skills && touched.skills ? (
                        <p className="error_message">{errors.skills}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="d-flex">
                    <Button className="btn btn-primary" type="submit">
                      Submit
                    </Button>
                    <Button className="btn btn-danger" type="reset">
                      Reset
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
