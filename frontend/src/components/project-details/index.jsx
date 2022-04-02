import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import * as Yup from "yup";

// import { setUsers } from "../redux/actions/action-creator";
import css from "./project-details.module.css";
import Projectdetails from "../../asset/Projectdetails.png";
function ProjectDetails({ setLogin }) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const onSubmit = (values) => {
    // const imageBlob = URL.createObjectURL(values.photo);
    // values.photo = imageBlob;
    // console.log(imageBlob);
    // setLogin(true);
    // dispatch(setUsers(values));
    // navigate("/home");
  };
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
    <div>
      <h3 className="my-4 font-weight-bold .display-4 text-center">
        Project Details:
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
                <div className="mb-2 d-flex flex-column">
                  <label htmlFor="projectName">Project Name:</label>
                  <br />
                  <Field
                    type="text-area"
                    id="projectName"
                    name="projectName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="projectName"
                    render={(msg) => <div className={css["error"]}>{msg}</div>}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="projectAbstract">Project Abstract</label>
                  <br />
                  <Field
                    as="textarea"
                    id="projectAbstract"
                    name="projectAbstract"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="projectAbstract"
                    render={(msg) => <div className={css["error"]}>{msg}</div>}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="startingDate">Tentative starting date:</label>
                  <br />
                  <Field
                    type="date"
                    id="startingDate"
                    name="startingDate"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="startingDate"
                    render={(msg) => <div className={css["error"]}>{msg}</div>}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="duration">Duration:</label>
                  <br />
                  <Field
                    type="number"
                    id="duration"
                    name="duration"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="duration"
                    render={(msg) => <div className={css["error"]}>{msg}</div>}
                  />
                </div>
                <br />
                <div className="card p-3 mb-2">
                  <h5>Candidates selected:</h5>

                  <div className="row">
                    <div className="col col-md-4">
                      {" "}
                      <div className="useritem ">Aditya Shah</div> </div>
                    <div className="col col-md-4">Hardik Sorathiya</div>
                  </div>
                </div>

                <button
                  className={`btn btn-sm mt-3 ${css["custom-btn"]}`}
                  type="submit"
                >
                  Confirm Request
                </button>
                <button
                  className="btn btn-sm btn-danger mt-3 ml-3 reset"
                  type="reset"
                >
                  Reset
                </button>
              </div>
              <div className="">
                <img src={Projectdetails} alt="" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default ProjectDetails;
