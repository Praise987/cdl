import React from "react";
import {useState} from "react";
import { AppBar, Toolbar, Button, Box, Dialog } from "@mui/material";
import Silverleaf from "../assets/images/Silverleaf.png";
import LoginForm from "./Pages/Login";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoImage from "../../assets/images/VIDEO.png";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./Sections/Pages/SignUpForm.tsx";


const Navbar: React.FC = () => {
  const navigate = useNavigate(); 
   const [openLogin, setOpenLogin] = useState(false);

  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);
  return (
    <AppBar position="relative" elevation={0} sx={{width: "100%",  maxwidth: "100%", bgcolor: "#101828" }}>
      <Toolbar sx={{  position: "relative", top: 0, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", color: "inherit" }}>

        <Box
          component="img"
          src={Silverleaf}
          alt="Silverleaf Logo"
          sx={{width: 120, height: "80px", gap: "10px", top: "16px", right: "160px", bottom: "16px", left: "160px", objectFit: "contain",}}/>

        <Box
          sx={{
            position: "absolute",
            height: "19px",
            top: "31px",
            left: "575px",
            flow: "horizontal",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "40px",
          }}
        >
          <Button color="inherit" component="a" href="/products">
           Product
            </Button>
            <Button color="inherit" component="a" href="/pricing">
              Pricing
              </Button>
              <Button color="inherit" component="a" href="/api-docs" endIcon={<KeyboardArrowDownIcon />}>
   API Docs
</Button>
        </Box>

    
        <Box sx={{ display: "flex", width: "100%", flow: "horizontal", height: "48px", gap: "8px"}}>
          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
          <Button onClick={() => navigate("/GetStarted")}
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#333",
             
            }}
          >
            Get Started
          </Button>
        </Box>

          <Dialog open={openLogin} onClose={handleClose}>
        <LoginForm />
      </Dialog>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;