import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Dialog,
  DialogContent,
} from "@mui/material";

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
import SignUpForm from "../../Sections/Pages/SignUpForm.tsx";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      
      <Box
        component="img"
        src={LandingPage}
        alt="Background"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

    
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "#101828",
          zIndex: 10,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 4, md: 6 },
            py: 1,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
       
          <Box
            component="img"
            src={Silverleaf}
            alt="Logo"
            sx={{
              width: 120,
              height: 80,
              objectFit: "contain",
            }}
          />

          
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 4 },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
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

         
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              color="inherit"
              onClick={() => setOpenLogin(true)}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={() => setOpenSignup(true)}
              sx={{
                bgcolor: "#fff",
                color: "#101828",
                "&:hover": {
                  bgcolor: "#f2f2f2",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

     
      <Dialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            overflow: "hidden",
          }}
        >
          <LoginForm />
        </DialogContent>
      </Dialog>

 
      <Dialog
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            overflow: "hidden",
          }}
        >
          <SignUpForm />
        </DialogContent>
      </Dialog>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          pt: { xs: 8, md: 14 },
          pb: 8,
        }}
      >
      
        <Box
          sx={{
            color: "#fff",
            width: "100%",
            maxWidth: "600px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 38, sm: 48, md: 58 },
              lineHeight: 1.1,
            }}
          >
            Smarter Loans
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 38, sm: 48, md: 58 },
              lineHeight: 1.1,
            }}
          >
            Decisions made Simple
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: 15, sm: 16 },
              color: "#D0D5DD",
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Powering smarter loan decisions with verified data &
            API-driven infrastructure
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpenSignup(true)}
            sx={{
              mt: 4,
              bgcolor: "#fff",
              color: "#101828",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              "&:hover": {
                bgcolor: "#f2f2f2",
              },
            }}
          >
            Get Started
          </Button>
        </Box>

       
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            display: "flex",
            justifyContent: "center",
          }}
        >
       
          <Box
            component="img"
            src={VideoImage}
            alt="Video"
            sx={{
              width: "100%",
              maxWidth: 498,
              height: "auto",
              borderRadius: 3,
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          />

          {/* Play Button */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <PlayArrowIcon sx={{ color: "#101828" }} />
          </Box>

          {/* Decorative Images */}
          <Box
            component="img"
            src={Group12}
            alt=""
            sx={{
              position: "absolute",
              top: -10,
              left: 0,
              width: { xs: 160, md: 220 },
              maxWidth: "40%",
            }}
          />

          <Box
            component="img"
            src={Group43}
            alt=""
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              width: { xs: 50, md: 70 },
              height: { xs: 50, md: 70 },
              zIndex: -1,
            }}
          />

          <Box
            component="img"
            src={Group46}
            alt=""
            sx={{
              position: "absolute",
              bottom: -20,
              right: 0,
              width: { xs: 160, md: 220 },
              maxWidth: "40%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;