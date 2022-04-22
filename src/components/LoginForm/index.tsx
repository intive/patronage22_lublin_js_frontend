import { FormControl, FormLabel, FormHelperText, Input } from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";

interface MyFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const initialValuesForm: MyFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialValuesForm,
    onSubmit(values) {
      const payload = { ...values };
      console.log(payload);
    },
    validationSchema,
  });

  const { handleSubmit, getFieldProps, errors } = formik;

  return (
    <section className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Login</h1>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            {...getFieldProps("email")}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <FormHelperText>
            We'll never share your email with anyone else.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...getFieldProps("password")}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </FormControl>

        <div className="actions">
          <button>Login</button>
        </div>
        <p>
          New Customer? <Link href="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
