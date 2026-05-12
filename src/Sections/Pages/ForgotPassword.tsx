import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/new-password");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        margin: "auto",
        backgroundColor: "#ffffff",
        borderRadius: 4,
        padding: 4,
        boxShadow: "0px 10px 40px rgba(0,0,0,0.15)",
      }}
    >
      <Stack spacing={2}>
        
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#101828",
          }}
        >
          Forgot Password
        </Typography>

      
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#667085",
          }}
        >
          No worries, we’ll send you reset instructions.
        </Typography>

       
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          type="email"
        />

        
        <Button
          variant="contained"
          fullWidth
          onClick={handleReset}
          sx={{
            mt: 1,
            py: 1.3,
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 2,
            backgroundColor: "#1E2A38",

            "&:hover": {
              backgroundColor: "#111927",
            },
          }}
        >
          Reset Password
        </Button>

       
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 1,
            color: "#667085",
          }}
        >
          Remember your password?
        </Typography>

        <Button
          variant="text"
          onClick={() => navigate("/login")}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            color: "#1976d2",

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Back to login
        </Button>
      </Stack>
    </Box>
  );
};

export default ForgotPassword;