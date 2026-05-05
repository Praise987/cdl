import React from "react";
import {Box, TextField, Button, Typography, FormControlLabel, Checkbox, Link, Dialog, DialogContent, IconButton,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignupForm";
import CloseIcon from "@mui/icons-material/Cancel";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [openSignup, setOpenSignup] = React.useState(false);

  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(/@fcmb\.com$/, "Email must end with @fcmb.com")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[^a-zA-Z0-9]/, "Must contain at least one special character")
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
  
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          width: 360,
          borderRadius: 8,
          border: "1px solid #D0D5DD",
        }}
      >

         <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>

        <Typography variant="h5" sx={{ fontWeight: "800" }}>
          Welcome Back
        </Typography>

        <Typography variant="body2" color="#667085" sx={{ opacity: 0.6 }}>
          Please enter your details to login
        </Typography>

        
        <Typography variant="subtitle2">Email</Typography>
        <TextField
          name="email"
          type="email"
          placeholder="Please enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        
        <Typography variant="subtitle2">Password</Typography>
        <TextField
          name="password"
          type="password"
          placeholder="Please enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
            label="Remember for 30 days"
          />

          <Link
            component="button"
            sx={{ cursor: "pointer", color: "#1976d2" }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </Link>
        </Box>

        
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#1E2A38" }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.6 }}>
          OR
        </Typography>

        <Button
          onClick={handleOpenSignup}
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#101828",
            border: "1px solid #E5E7EB",
          }}
        >
          Sign Up with Google
        </Button>
      </Box>

      
      <Dialog open={openSignup} onClose={handleCloseSignup}>
        <Box sx={{ position: "relative", padding: 2 }}>
          <IconButton
            onClick={handleCloseSignup}
            sx={{
              position: "absolute",
              width: "21px",
              height: "21px",
              top: "1.5px",
              left: "1.5px",
              color: "#101828",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent>
            <SignupForm />
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default LoginForm;