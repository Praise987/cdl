import React from "react";
import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#101828",
        color: "#ffffff",
        px: { xs: 3, md: 10 },
        py: 6,
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#ffffff",
            lineHeight: "100%",
          }}
        >
          <Link href="#" underline="none" color="inherit">Home</Link>
          <Link href="#" underline="none" color="inherit">Products</Link>
          <Link href="#" underline="none" color="inherit">Pricing</Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="#" underline="none" color="inherit">API Docs</Link>
            <KeyboardArrowDownIcon fontSize="small" />
          </Box>
        </Box>

        
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "#A0AEC0" }}><TwitterIcon /></IconButton>
          <IconButton sx={{ color: "#A0AEC0" }}><LinkedInIcon /></IconButton>
          <IconButton sx={{ color: "#A0AEC0" }}><FacebookIcon /></IconButton>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#2D3748" }} />

      <Typography variant="body2" sx={{ mt: 4 }}>
        © 2025 Silverleaf. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;