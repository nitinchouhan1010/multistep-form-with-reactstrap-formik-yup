import { ErrorMessage, Field } from "formik";
import React from "react";

const Step3 = () => {
  return (
    <div>
      <label htmlFor="email">Email Address</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" component="div" className="text-danger" />
    </div>
  );
};

export default Step3;
