import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassword";

import CloseIcon from "@mui/icons-material/Cancel";

import * as Yup from "yup";
import { useFormik } from "formik";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [openSignup, setOpenSignup] = React.useState(false);
  const [openForgotPassword, setOpenForgotPassword] =
    React.useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(/@fcmb\.com$/, "Email must end with @fcmb.com")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Must contain lowercase letter")
      .matches(/[A-Z]/, "Must contain uppercase letter")
      .matches(/[0-9]/, "Must contain number")
      .matches(/[^a-zA-Z0-9]/, "Must contain special character")
      .required("Password is required"),

    rememberMe: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/dashboard");
    },
  });

  return (
    <>
      {/* LOGIN CARD (NO STAKING CONTEXT TRAPS) */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          width: 360,
          borderRadius: 4,
          border: "1px solid #D0D5DD",
          backgroundColor: "#fff",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => window.history.back()}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Welcome Back
        </Typography>

        <Typography variant="body2" sx={{ color: "#667085" }}>
          Please enter your details to login
        </Typography>

        <Typography variant="subtitle2">Email</Typography>
        <TextField
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email &&
            Boolean(formik.errors.email)
          }
          helperText={
            formik.touched.email && formik.errors.email
          }
          fullWidth
        />

        <Typography variant="subtitle2">Password</Typography>
        <TextField
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password &&
            Boolean(formik.errors.password)
          }
          helperText={
            formik.touched.password &&
            formik.errors.password
          }
          fullWidth
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
            }
            label="Remember me"
          />

          <Link
            component="button"
            type="button"
            onClick={() =>
              setOpenForgotPassword(true)
            }
            sx={{
              cursor: "pointer",
              color: "#1976d2",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Forgot password?
          </Link>
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1E2A38",
            height: 45,
            borderRadius: 2,
          }}
        >
          Login
        </Button>

        <Button
          onClick={() => setOpenSignup(true)}
          variant="outlined"
          sx={{ height: 45, borderRadius: 2 }}
        >
          Sign Up
        </Button>
      </Box>

      {/* SIGNUP DIALOG */}
      <Dialog
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <SignUpForm />
        </DialogContent>
      </Dialog>

      {/* FORGOT PASSWORD — FIXED LAYERING */}
      <Dialog
        open={openForgotPassword}
        onClose={() =>
          setOpenForgotPassword(false)
        }
        disablePortal
        keepMounted
        sx={{
          zIndex: 999999,
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor:
                "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              zIndex: 999998,
            },
          },
        }}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 999999,
          }}
        >
          <IconButton
            onClick={() =>
              setOpenForgotPassword(false)
            }
            sx={{
              position: "absolute",
              top: -12,
              right: -12,
              backgroundColor: "#fff",
              zIndex: 1000000,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <ForgotPassword />
        </Box>
      </Dialog>
    </>
  );
};

export default LoginForm;