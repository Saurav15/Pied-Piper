import * as Yup from "yup";

export const SignInSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
});
