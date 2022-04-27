import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

interface MyFormValues {
  name: string;
  email: string;
  password: string;
}

function RegisterForm() {
  const initialValuesForm: MyFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required("Name is required"),
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
        <h1>Register</h1>
        <FormControl>
          <FormLabel htmlFor="name">Your name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter name"
            {...getFieldProps("name")}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </FormControl>
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

        <FormControl className="actions">
          <Button type="submit">Register</Button>
        </FormControl>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default RegisterForm;
