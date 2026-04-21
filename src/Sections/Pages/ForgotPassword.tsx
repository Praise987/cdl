import React from "react";
import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/new-password");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9fafb",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              color: "#101828",
            }}
          >
            Forgot Password
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "#667085" }}
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
              py: 1.2,
              textTransform: "none",
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            Reset Password
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 1 }}
          >
            Remember your password?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: 500,
              }}
            >
              Back to login
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ForgotPassword;