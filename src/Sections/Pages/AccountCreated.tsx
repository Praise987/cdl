import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FeaturedIcon6 from "../../assets/images/FeaturedIcon6.png";

const AccountCreated: React.FC = () => {
  const navigate = useNavigate();

  return (
    
    
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 500,
        bgcolor: "#ffffff",
        textAlign: "center",
        zindex: 20000,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Account Created Successfully!
      </Typography>

      <Typography variant="body1">
        Your account has been successfully created.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{
          mt: 4,
          bgcolor: "#1e2a38",
          "&:hover": {
            bgcolor: "#16202b",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default AccountCreated;