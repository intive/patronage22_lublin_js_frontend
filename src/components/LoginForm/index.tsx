import { FormControl, FormLabel, FormHelperText, Input } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useRouter } from "next/router";

interface MyFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const userLogin = useSelector((state: any) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    dispatch(login(enteredEmail, enteredPassword));

    console.log("Submitted!");
  };

  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <section className="container">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
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
            <button>{loading ? "Loading..." : "Login"}</button>
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
