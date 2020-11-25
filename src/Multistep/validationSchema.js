import * as Yup from "yup";

export default [
  Yup.object({
    firstName: Yup.string().required("Required")
  }),
  Yup.object({
    lastName: Yup.string().required("Required")
  }),
  Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
  })
];
