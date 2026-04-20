import React, { useState } from "react";
import {Box, Typography,TextField, Button,Checkbox,FormControlLabel,Divider,IconButton,InputAdornment,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SocialIcon from "../../assets/images/SocialIcon.png";
import LandingPage from "../../assets/images/LandingPage.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";


const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={LandingPage}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

    
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />

    
      <Box
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "rgba(255,255,255,0.95)",
          zIndex: 2000,
          position: "relative",
          backdropFilter: "blur(8px)",
        }}
      >
        
        <IconButton
          onClick={() => console.log("Close form")}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 3,
          }}
        >
          <CancelIcon />
        </IconButton>

        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Get Started Today!
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Power your lending with verified data and smart APIs.
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Full Name*
        </Typography>
        <TextField fullWidth margin="dense" placeholder="Enter your name" />

        <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 2 }}>
          Company Name*
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          placeholder="Enter your company name"
        />

        <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 2 }}>
          Email*
        </Typography>
        <TextField fullWidth margin="dense" placeholder="Enter your email" />

        <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 2 }}>
          Password*
        </Typography>

        <TextField
          fullWidth
          margin="dense"
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((p) => !p)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="caption" color="text.secondary">
          Must be at least 8 characters.
        </Typography>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography variant="caption">
              By continuing, you agree to our T&C and Privacy Policy
            </Typography>
          }
          sx={{ mt: 1 }}
        />

        <Button onClick={() => navigate("/account-created")} 
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            bgcolor: "#0f172a",
            "&:hover": { bgcolor: "#020617" },
          }}
        >
          Create Account
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <Box
              component="img"
              src={SocialIcon}
              alt="Google icon"
              sx={{ width: 18, height: 18 }}
            />
          }
          sx={{
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Sign up with Google
        </Button>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 2 }}
          color="text.secondary"
        >
          Already have an account?{" "}
          <span style={{ color: "#000", fontWeight: 500, cursor: "pointer" }}>
            Log in
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupForm;