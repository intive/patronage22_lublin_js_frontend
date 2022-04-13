import { FormControl, FormLabel, FormHelperText, Input } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { Formik, Form, useFormik } from "formik";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
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
      console.log(payload);
      dispatch(login(values.email, values.password));
    },
    validationSchema,
  });

  const { handleSubmit, getFieldProps, errors } = formik;

  return (
    <section className="container">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

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
            {...getFieldProps("password")}
            placeholder="Password"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </FormControl>

        <div className="actions">
          <button>{loading ? "Loading..." : "Login"}</button>
        </div>
        <p>
          New Customer? <Link href="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
