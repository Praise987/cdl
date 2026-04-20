import React, { useState } from "react";
import {Box, TextField, Button, Typography, FormControlLabel, Checkbox, Link, Dialog, DialogContent, IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";
import CancelIcon from "@mui/icons-material/Cancel";
import {navigate} from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
    navigate("/forgot-password")
  };

  const handleForgotPassword = () => {
    setOpenSignup(false);
    navigate("/forgot-password");
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
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
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Welcome Back
        </Typography>

        <Typography variant="body2" color="#667085" sx={{ opacity: 0.6 }}>
          Please enter your details to login
        </Typography>

        <Typography variant="subtitle2">Email</Typography>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email"
          required
        />

        <Typography variant="subtitle2">Password</Typography>
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Please enter your password"
          required
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
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember for 30 days"
          />

          <Link
            component="button"
           sx={{ cursor: "pointer", color: "#1976d2" }} onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </Link>
        </Box>

        <Button
          type="submit"
          variant="contained"
          onClick={() => navigate("/Dashboard")}
          sx={{ backgroundColor: "#1E2A38" }}
        >
          Login
        </Button>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", opacity: 0.6 }}
        >
          OR
        </Typography>

        <Button
          onClick={handleOpenSignup}
          variant="contained"
          sx={{ backgroundColor: "#12EA" }}
        >
          Sign Up
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
              color: "#000000",
              zIndex: 10
            }}
          >
            <CancelIcon />
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