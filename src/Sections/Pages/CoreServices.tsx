import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FeatureIcon from "../../assets/images/FeatureIcon.png";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

const CoreServices: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ px: 10, py: 12,  flow: "vertical", bgcolor: "#ffffff" }}>
      
     
      <Box sx={{ mb: 8, height: "282px", gap: "48px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: "Inter", fontSize: "36px", lineHeight: "44px", paragraphSpacing: "36px", letterSpacing: "-2%", color: "#101828", mb: 2 }}
        >
          Core Services
        </Typography>

        <Typography sx={{ color: "#667085", maxWidth: "500px", fontFamily: "Inter", fontName: "Text/Normal", fontSize: "20px", lineHeight: "30px", paragraphSpacing: "20px" }}>
          Explore our range of reliable and efficient services designed to meet your needs
        </Typography>
      </Box>

      
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        
        <Box sx={{ position: "relative", width: "100%", height: "567.02px" }}>
          
      <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 80,
    width: "270px",
    height: "246px",
    p: 3,
    bgcolor: "#fff",
    borderRadius: 3,
    transform: "rotate(-30deg)",
    border: "1px solid #e6e6e9",
  }}
>
  
  <Box sx={{ transform: "rotate(30deg)", left: "80px", top: "40px", position: "absolute" }}>
    <Box sx={{ mb: 2 }}>
      <img src={FeatureIcon} alt="icon" width={40} />
    </Box>

    <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "Inter", lineHeight: "30px", paragraphSpacing: "20px", letterSpacing: "0%" }}>
      SilverQual
    </Typography>

    <Typography sx={{ color: "#101828", fontSize: 14 }}>
      Loan Prequalification
    </Typography>
  </Box>
</Box>

         
          <Box
            sx={{
              position: "absolute",
              top: "321px",
              left: "100px",
              bottom: "160px",
              width: "270px",
              height: "265px",
              gap: "24px",
              p: 3,
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
               border: "1px solid #e6e6e9"
            }}
          >
            <Box sx={{ mb: 2 }}>
              <img src={FeatureIcon} alt="icon" width={40} />
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "Inter", lineHeight: "30px", paragraphSpacing: "20px", letterSpacing: "0%" }}>SilverLoan</Typography>
            <Typography sx={{ color: "#798294", fontSize: "16", fontWeight: 500 }}>
              Loan booking engine.
            </Typography>
          </Box>

          
          <Box
            sx={{
              position: "absolute",
              top: "186px",
              left: "314px",
               width: "270px",
              height: "265px",
              gap: "24px",
              p: 3,
              bgcolor: "#fff",
              borderRadius: 3,
               border: "1px solid #e6e6e9"
            }}
          >
            <Box sx={{ mb: 2 }}>
              <img src={FeatureIcon} alt="icon" width={40} />
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "Inter", lineHeight: "30px", paragraphSpacing: "20px", letterSpacing: "0%"  }}>
              Wallet Billing Refund
            </Typography>

              
            <Typography sx={{ color: "#101828", fontSize: 14, mt: 1 }}>
              Prefund » Use &» Track
            </Typography>
          </Box>
        </Box>

       
        <Box sx={{ width: "100%", height: "567.02px", position: "relative" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#101828", mb: 3 }}
          >
            Your Lending Simplified
          </Typography>

          <Typography sx={{ color: "#667085", mb: 4, lineHeight: 1.6 }}>
            From verifying data to booking loans and managing disbursements, our APIs do the heavy lifting so you can focus on growing your lending business.
          </Typography>

          <Button  onClick={() => navigate("/GetStarted")}
            variant="contained"
            sx={{
              bgcolor: "#101828",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CoreServices;