import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Loggin() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="my-3">
      <div style={{ padding: 20 }}>
        <label htmlFor="email" style={{ display: "block" }}>
          email
        </label>
        <input
          className="w-75 rounded py-1 "
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password" style={{ display: "block" }}>
          password
        </label>
        <input
          className="w-75 rounded py-1 "
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}

        <label htmlFor="rememberMe" style={{ display: "block" }}>
          remember me
        </label>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          defaultChecked={formik.values.rememberMe}
          {...formik.getFieldProps("rememberMe")}
        />
        <br />

        <button className="bg-primary mx-0 my-2">submit</button>
      </div>
      {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
    </form>
  );
}

export default Loggin;
