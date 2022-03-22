import { FormControl, FormLabel, FormHelperText, Input } from "@mui/material";
import React, { useRef } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";

interface MyFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Submitted!");
  };

  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <section className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form onSubmit={submitHandler} className="form">
          <h1>Login</h1>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              inputRef={emailInputRef}
              required
            />
            <FormHelperText>
              We'll never share your email with anyone else.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              inputRef={passwordInputRef}
              required
            />
          </FormControl>

          <div className="actions">
            <button>Login</button>
          </div>
          <p>
            New Customer? <Link href="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </section>
  );
}

export default LoginForm;
