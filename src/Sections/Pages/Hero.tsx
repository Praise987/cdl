import React, { useState } from "react";
import {Box, Typography, Button, AppBar, Toolbar, Dialog,} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import LandingPage from "../../assets/images/LandingPage.svg";
import VideoImage from "../../assets/images/VIDEO.png";
import Group12 from "../../assets/images/Group12.png";
import Group43 from "../../assets/images/Group43.png";
import Group46 from "../../assets/images/Group46.png";
import Silverleaf from "../../assets/images/Silverleaf.png";
import LoginForm from "../../Sections/Pages/Login.tsx";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <AppBar
        position="relative"
        elevation={0}
        sx={{ width: "100%", bgcolor: "#101828" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Silverleaf}
            alt="Logo"
            sx={{ width: 120, height: 80, objectFit: "contain" }}
          />

          <Box sx={{ display: "flex", gap: 4 }}>
            <Button color="inherit" href="/products">
              Product
            </Button>
            <Button color="inherit" href="/pricing">
              Pricing
            </Button>
            <Button
              color="inherit"
              href="/api-docs"
              endIcon={<KeyboardArrowDownIcon />}
            >
              API Docs
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit" onClick={() => setOpenLogin(true)}>
              Login
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/GetStarted")}
              sx={{ bgcolor: "#fff", color: "#333" }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <LoginForm />
      </Dialog>

      <Box
        component="img"
        src={LandingPage}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "200px",
          px: 10,
        }}
      >
        <Box sx={{ color: "#fff", maxWidth: "600px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 48 }}>
            Smarter Loans
          </Typography>

          <Typography sx={{ fontWeight: 700, fontSize: 48 }}>
            Decisions made Simple
          </Typography>

          <Typography sx={{ mt: 1, fontSize: 16 }}>
            Powering smarter loan decisions with verified data & API driven
            infrastructure
          </Typography>

          <Button
            onClick={() => navigate("/GetStarted")}
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#fff",
              color: "#101828",
              textTransform: "none",
            }}
          >
            Get Started
          </Button>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={VideoImage}
            sx={{
              width: 498,
              height: 366,
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 50,
              height: 50,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.1)",
              },
            }}
          >
            <PlayArrowIcon sx={{ color: "#101828" }} />
          </Box>

          <Box
            component="img"
            src={Group12}
            sx={{ position: "absolute", top: 20, left: 10, width: 281 }}
          />

          <Box
            component="img"
            src={Group43}
            sx={{ position: "absolute", top: 60, right: 180, width: 109 }}
          />

          <Box
            component="img"
            src={Group46}
            sx={{ position: "absolute", top: 80, right: 10, width: 281 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
