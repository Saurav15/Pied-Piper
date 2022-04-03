import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PrimarySearchAppBar from "../header";

import css from "./addskills.module.css";
function AddSkills({ setLogin }) {
  const onSubmit = (values) => {};
  const initialValues = {
    projectName: "",
    projectAbstract: "",
    startingDate: "",
    duration: "",
  };

  const validationSchema = Yup.object({
    projectName: Yup.string().required("Required"),
    projectAbstract: Yup.string().required("Required"),
    startingDate: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
  });
  return (
    <>
      <PrimarySearchAppBar />
      <div>
        <h3 className="my-4 font-weight-bold .display-4 text-center">
          Employee Skills
        </h3>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="row justify-content-md-center">
                <div className="col-5 justify-content-md-center">
                  <div className="card p-3 mb-2">
                    <h5>Name:</h5>

                    <div className="row">
                      <div className="col col-md-4">
                        {" "}
                        <div className="useritem ">Aditya Shah</div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card p-3 mb-2">
                    <h5>Email:</h5>

                    <div className="row">
                      <div className="col col-md-4">
                        {" "}
                        <div className="useritem ">
                          something@gmail.com
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 d-flex flex-column">
                    <label htmlFor="experience">Experience(in years):</label>
                    <br />
                    <Field
                      type="number"
                      id="experience"
                      name="experience"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="experience"
                      render={(msg) => (
                        <div className={css["error"]}>{msg}</div>
                      )}
                    />
                  </div>

                  <br />
                  <div className="card p-3 mb-2">
                    <h5>Skills:</h5>

                    <div className="d-flex flex-column">
                      {/* <label htmlFor="skills">Skills:</label> */}
                      <br />
                      <Field
                        as="select"
                        id="Skills"
                        name="Skills"
                        className="form-control"
                      >
                        <option value="angularJs" label="angularJs">
                          Angular js
                        </option>
                        <option value="vueJs" label="vueJs">
                          Vue js
                        </option>
                        <option value="reactJs" label="reactJs">
                          React js
                        </option>
                      </Field>
                      <ErrorMessage
                        name="Skills"
                        render={(msg) => (
                          <div className={css["error"]}>{msg}</div>
                        )}
                      />
                    </div>

                    <div className="d-flex flex-column">
                      <label htmlFor="Name">Proficiency:</label>
                      <br />
                      <Field
                        as="select"
                        id="Name"
                        name="Name"
                        className="form-control"
                      >
                        <option value="beginner" label="beginner">
                          Beginner
                        </option>
                        <option value="intermediate" label="intermediate">
                          Intermediate
                        </option>
                        <option value="advance" label="advance">
                          Advance
                        </option>
                      </Field>
                      <ErrorMessage
                        name="Name"
                        render={(msg) => (
                          <div className={css["error"]}>{msg}</div>
                        )}
                      />
                    </div>
                  </div>

                  <button
                    className={`btn btn-sm mt-3 ${css["custom-btn"]}`}
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-sm btn-danger mt-3 ml-3 reset"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default AddSkills;
