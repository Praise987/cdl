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
        color: "#A0AEC0",
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
          flow: "vertical"
        }}
      >
      

          
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#" underline="none" color="inherit">
              Home
            </Link>
            <Link href="#" underline="none" color="inherit">
              Products
            </Link>
            <Link href="#" underline="none" color="inherit">
              Pricing
            </Link>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="#" underline="none" color="inherit">
                API Docs
              </Link>
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>
        </Box>


      
      <Box
        sx={{left: "45%", display: "flex", gap: 6, justifyContent: "center", mt: 4, top: "50%", position: "relative" }}>
          <IconButton sx={{ color: "#A0AEC0" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#A0AEC0" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: "#A0AEC0" }}>
            <FacebookIcon />
          </IconButton>
        </Box>
      

      
      <Divider sx={{ my: 4, borderColor: "#2D3748" }} />

      
      <Typography variant="body2">
        (c) 2025 Silverleaf. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;