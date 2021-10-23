import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";

import FormikField from "./FormikField";
import * as yup from "yup";
import SelectFormikFiels from "./SelectFormikFiels";
function Registration() {
  const dropDownOptions = [
    {
      key: "select an option",
      value: "",
    },
    { key: "male", value: "male" },
    { key: "female", value: "female" },
  ];
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
    hoppies: [""],
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    userName: yup.string().required("User name field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required").min(8),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "password must match"),
    active: yup.bool().required("field is required"),
    gender: yup.string().required("field is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(forimk) => {
        return (
          <Form>
            <div className="w-50 m-auto" style={{ padding: 20 }}>
              <FormikField label="username" name="userName" type="text" />
              <FormikField label="email" name="email" type="email" />
              <FormikField label="password" name="password" type="password" />
              <FormikField
                label="confirm password"
                name="confirmPassword"
                type="password"
              />
              <FormikField label="remmber me" name="active" type="checkbox" />
              <SelectFormikFiels
                lable="gender"
                name="gender"
                options={dropDownOptions}
              />
              <FieldArray name="hoppies">
                {({ remove, push }) => (
                  <div className="my-3">
                    {forimk.values.hoppies.length > 0 &&
                      forimk.values.hoppies.map((hopie, index) => (
                        <div className="row " key={index}>
                          <div className="col">
                            <label htmlFor={`hoppies.${index}`}>hopie</label>
                            <br />
                            <Field
                              name={`hoppies.${index}`}
                              type="text"
                              className="my-2"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary bg-danger"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary bg-success"
                      onClick={() => push("")}
                    >
                      Add Hopie
                    </button>
                  </div>
                )}
              </FieldArray>
              <button
                className="bg-primary px-5 py-2"
                style={{ display: "block" }}
              >
                submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Registration;
