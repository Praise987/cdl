import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false); // ✅ Dialog state

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    companyName: Yup.string().required("Company name is required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(/@fcmb\.com$/, "Email must end with @fcmb.com")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[a-z]/, "Must contain lowercase")
      .matches(/[A-Z]/, "Must contain uppercase")
      .matches(/[0-9]/, "Must contain number")
      .matches(/[^a-zA-Z0-9]/, "Must contain special character")
      .required("Password is required"),
    agree: Yup.boolean().oneOf([true], "You must accept terms"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      password: "",
      agree: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);

      // ✅ Open success dialog instead of navigating
      setOpen(true);
    },
  });

  return (
    <>
      <Box
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          mb={1}
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "30px",
            lineHeight: "38px",
            color: "#101828",
          }}
        >
          Get Started Today!
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#667084",
          }}
        >
          Power your lending with verified data and smart APIs.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Typography variant="subtitle2">Full Name*</Typography>
          <TextField
            fullWidth
            margin="dense"
            name="fullName"
            placeholder="Enter your name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

          <Typography variant="subtitle2">Company Name*</Typography>
          <TextField
            fullWidth
            margin="dense"
            name="companyName"
            placeholder="Enter your company name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.companyName &&
              Boolean(formik.errors.companyName)
            }
            helperText={
              formik.touched.companyName && formik.errors.companyName
            }
          />

          <Typography variant="subtitle2">Email*</Typography>
          <TextField
            fullWidth
            margin="dense"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Typography variant="subtitle2">Password*</Typography>
          <TextField
            fullWidth
            margin="dense"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password
                ? formik.errors.password
                : "Must be at least 8 characters."
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
              />
            }
            label={
              <Typography variant="body2">
                By continuing, you agree to our{" "}
                <span style={{ color: "#331164" }}>T&C</span> and{" "}
                <span style={{ color: "#331164" }}>
                  Privacy Policy
                </span>
              </Typography>
            }
          />

          {formik.touched.agree && formik.errors.agree && (
            <Typography color="error" variant="caption">
              {formik.errors.agree}
            </Typography>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={!formik.isValid || !formik.dirty}
            sx={{
              mt: 2,
              backgroundColor: "#1E2A38",
              textTransform: "none",
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Create Account
          </Button>

          <Box sx={{ my: 3, display: "flex", alignItems: "center" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2 }}>OR</Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              textTransform: "none",
              py: 1.2,
              borderRadius: 2,
            }}
          >
            Sign up with Google
          </Button>

          <Typography variant="body2" textAlign="center" mt={2}>
            Already have an account?{" "}
            <span style={{ color: "#331164", cursor: "pointer" }}>
              Log In
            </span>
          </Typography>
        </form>
      </Box>

      {/* ✅ SUCCESS DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <Typography variant="h5" mb={2}>
            Account Created Successfully!
          </Typography>

          <Typography mb={3}>
            Your account has been successfully created.
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{ backgroundColor: "#1E2A38" }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignupForm;