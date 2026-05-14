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

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

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
      setOpen(true);
    },
  });

  return (
    <>
      <Box
        sx={{
          width: 400,
          maxHeight: "90vh",      
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",       
        }}
      >

        <Box
          sx={{
            px: 3,
            pt: 2.5,
            pb: 1.5,
            borderBottom: "1px solid #F2F4F7",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "28px",
              color: "#101828",
              pr: 4,
            }}
          >
            Get Started Today!
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              fontSize: "13px",
              lineHeight: "20px",
              color: "#667084",
              mt: 0.5,
            }}
          >
            Power your lending with verified data and smart APIs.
          </Typography>
        </Box>

     
        <Box
          sx={{
            overflowY: "auto",     
            px: 3,
            py: 2,
            flex: 1,
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": { background: "transparent" },
            "&::-webkit-scrollbar-thumb": {
              background: "#D0D5DD",
              borderRadius: "4px",
            },
          }}
        >
          <form onSubmit={formik.handleSubmit}>

          
            <Typography variant="subtitle2" sx={{ fontSize: "12px", mb: 0.25 }}>
              Full Name*
            </Typography>
            <TextField
              fullWidth
              size="small"
              margin="none"
              name="fullName"
              placeholder="Enter your name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              sx={{ mb: 1.5 }}
            />

            <Typography variant="subtitle2" sx={{ fontSize: "12px", mb: 0.25 }}>
              Company Name*
            </Typography>
            <TextField
              fullWidth
              size="small"
              margin="none"
              name="companyName"
              placeholder="Enter your company name"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
              sx={{ mb: 1.5 }}
            />

      
            <Typography variant="subtitle2" sx={{ fontSize: "12px", mb: 0.25 }}>
              Email*
            </Typography>
            <TextField
              fullWidth
              size="small"
              margin="none"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mb: 1.5 }}
            />

           
            <Typography variant="subtitle2" sx={{ fontSize: "12px", mb: 0.25 }}>
              Password*
            </Typography>
            <TextField
              fullWidth
              size="small"
              margin="none"
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
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 1 }}
            />

           
            <FormControlLabel
              sx={{ mt: 0.5, alignItems: "flex-start" }}
              control={
                <Checkbox
                  name="agree"
                  size="small"
                  checked={formik.values.agree}
                  onChange={formik.handleChange}
                  sx={{ pt: 0.5 }}
                />
              }
              label={
                <Typography variant="body2" sx={{ fontSize: "12px", color: "#344054" }}>
                  By continuing, you agree to our{" "}
                  <span style={{ color: "#331164", cursor: "pointer" }}>T&amp;C</span> and{" "}
                  <span style={{ color: "#331164", cursor: "pointer" }}>Privacy Policy</span>
                </Typography>
              }
            />

            {formik.touched.agree && formik.errors.agree && (
              <Typography color="error" variant="caption" display="block" sx={{ mb: 0.5 }}>
                {formik.errors.agree}
              </Typography>
            )}

        
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={!formik.isValid || !formik.dirty}
              sx={{
                mt: 1.5,
                backgroundColor: "#1E2A38",
                textTransform: "none",
                py: 1.2,
                borderRadius: 2,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Create Account
            </Button>

            <Divider sx={{ my: 2 }}>
              <Typography sx={{ fontSize: "12px", color: "#98A2B3", px: 1 }}>OR</Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                py: 1,
                borderRadius: 2,
                fontSize: "14px",
                borderColor: "#D0D5DD",
                color: "#344054",
                "&:hover": { borderColor: "#98A2B3", bgcolor: "#F9FAFB" },
              }}
            >
              Sign up with Google
            </Button>

            <Typography variant="body2" textAlign="center" sx={{ mt: 1.5, mb: 1, fontSize: "13px", color: "#667085" }}>
              Already have an account?{" "}
              <span style={{ color: "#331164", cursor: "pointer", fontWeight: 600 }}>
                Log In
              </span>
            </Typography>

          </form>
        </Box>
      </Box>

    
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

export default SignUpForm;