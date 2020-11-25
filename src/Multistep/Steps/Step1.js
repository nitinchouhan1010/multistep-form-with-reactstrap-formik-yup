import { ErrorMessage, Field } from "formik";
import React from "react";

const Step1 = () => {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" type="text" />
      <ErrorMessage name="firstName" component="div" className="text-danger" />
    </div>
  );
};

export default Step1;
