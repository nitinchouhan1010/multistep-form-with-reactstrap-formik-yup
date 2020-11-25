import { ErrorMessage, Field } from "formik";
import React from "react";

const Step2 = () => {
  return (
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" type="text" />
      <ErrorMessage name="lastName" component="div" className="text-danger" />
    </div>
  );
};

export default Step2;
