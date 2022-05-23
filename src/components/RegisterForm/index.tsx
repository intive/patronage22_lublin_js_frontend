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
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { useRouter } from "next/router";
import MainButton from "../MainButton";

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

  const dispatch = useDispatch();
  const router = useRouter();

  const userRegister = useSelector((state: any) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

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
      dispatch(register(values.name, values.email, values.password));
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
        <FormControl>
          <MainButton  onClick={handleSubmit} type="submit">{loading ? "Loading..." : "REGISTER"}</MainButton>
        </FormControl>
        {error && <p className="error">{error}</p>}
        {loading && <p>Loading...</p>}
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default RegisterForm;
