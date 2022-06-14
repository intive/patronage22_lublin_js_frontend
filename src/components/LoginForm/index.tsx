import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import MainButton from "../MainButton";

interface MyFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const initialValuesForm: MyFormValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const userLogin = useSelector((state: any) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

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
      dispatch(login(values.email, values.password));
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

        <FormControl>
          <MainButton onClick={handleSubmit} type="submit">{loading ? "Loading..." : "LOGIN"}</MainButton>
        </FormControl>
        {error && <p className="error">{error}</p>}
        {loading && <p>Loading...</p>}
        <p>
          New Customer? <Link href="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
