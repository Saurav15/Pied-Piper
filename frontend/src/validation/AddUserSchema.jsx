import * as Yup from 'yup';
import 'yup-phone';

export const SignUpSchema = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is Required'),
    email: Yup.string().email('Email is invalid').required('Email is Required'),
    number: Yup.string().required("Enter Valid Indian Phone Number").phone("IN", true,'Enter Valid Indian Phone Number'),
    address: Yup.string().max(150, 'Must be 150 characters or less')
    .min(10,"Must be 15 characters or More")
    .required('Address is Required'),
});