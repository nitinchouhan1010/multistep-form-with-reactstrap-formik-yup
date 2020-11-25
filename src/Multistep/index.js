import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Progress } from "reactstrap";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import validationSchema from "./validationSchema";
const steps = ["Step 1", "Step 2", "Step 3"];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return <div>Not Found</div>;
  }
}

const MultiStepDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div>
      {console.log(activeStep)}
      {activeStep === steps.length ? (
        <Step4 />
      ) : (
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {_renderStepContent(activeStep)}
              <div className="mt-3">
                {activeStep !== 0 && (
                  <Button onClick={_handleBack} className="mr-3">
                    Back
                  </Button>
                )}
                <Button disabled={isSubmitting} type="submit">
                  {isLastStep ? "Finish" : "Next"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default MultiStepDemo;
