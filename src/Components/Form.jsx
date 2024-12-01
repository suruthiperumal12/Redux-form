import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
const [formData, setFormData] = useState({});

// Render function for input fields with Bootstrap styling
const renderInput = ({ input, meta, label, type }) => (
  <div className="mb-3">
    <label htmlFor={input.name} className="form-label">
      {label}
    </label>
    <input {...input} type={type} className="form-control" id={input.name} />
    {meta.touched && meta.error && (
      <div className="text-danger">{meta.error}</div>
    )}
  </div>
);

const MyForm = ({ handleSubmit }) => {
  const onSubmit = (formValues) => {
    console.log("Form Submitted: ", formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5">
      <Field name="name" component={renderInput} label="Name" type="text" />
      <Field name="email" component={renderInput} label="Email" type="email" />
      <Field
        name="password"
        component={renderInput}
        label="Password"
        type="password"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
      <h1>{formData.email}</h1>
    </form>
  );
};

// Validation for the form
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
};

export default reduxForm({
  form: "userForm", // Unique identifier for this form
  validate,
})(MyForm);
