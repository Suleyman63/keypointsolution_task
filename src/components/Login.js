import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import "./Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

function Login() {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .min(6, "Should be 6 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),

    password: Yup.string()
      .min(6, "Should be 6 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),
  });

  const focusDiv = useRef();

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  }, [focusDiv]);
  return (
    <Grid>
      <Paper elevation={10} className="login-form">
        <Grid align="center">
          <Avatar color="secondary">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6" color="secondary" className="mt-5 fw-bold">
            LOGIN
          </Typography>
        </Grid>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(value) => {
            toast.success("login is successfully", { position: "top-center" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                className="mt-4"
                label="Email"
                name="email"
                placeholder="Enter email"
                fullWidth
                ref={focusDiv}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                as={TextField}
                className="mt-4"
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <Button
                className="mt-4 fw-bold"
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                SUBMIT
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Login;
