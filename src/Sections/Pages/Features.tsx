import React from "react";
import { Box, Typography } from "@mui/material";
import FeaturedIcon3 from "../../assets/images/FeaturedIcon3.png";
import FeaturedIcon4 from "../../assets/images/FeaturedIcon4.png";
import FeaturedIcon5 from "../../assets/images/FeaturedIcon5.png";
import MockupWrap from "../../assets/images/MockupWrap.png";

const Features: React.FC = () => {
  return (
    <Box sx={{ pb: 26 }}>
      <Box sx={{ px: 8, py: 10, bgcolor: "#fff", width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: "Inter",
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "-2%",
            flow: "vertical",
            left: "32px",
            right: "32px",
            gap: "32px",
            color: "#101828",
          }}
        >
          How it works
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#667085",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            mb: 6,
          }}
        >
          Its simple, Plug into our API, confirm salary details, fund your
          wallet, and start giving out loan in no time.
        </Typography>
      </Box>
  
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 6,
          px: 8,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box sx={iconStyle}>
              <Box component="img" src={FeaturedIcon3} sx={imgStyle} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  paragraphSpacing: "20px",
                  color: "#101828",
                }}
              >
                Connect with API
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Easily integrate your system using our secure,
                developer-friendly API.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box sx={iconStyle}>
              <Box component="img" src={FeaturedIcon4} sx={imgStyle} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  paragraphSpacing: "20px",
                  color: "#101828",
                }}
              >
                Verify Salary and Employment
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Access real-time verified data to confirm borrower income and
                job status.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box sx={iconStyle}>
              <Box component="img" src={FeaturedIcon5} sx={imgStyle} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  paragraphSpacing: "20px",
                  color: "#101828",
                }}
              >
                Fund Wallet and Book Loans
              </Typography>
              <Typography variant="caption" color="#667085">
                Manage funding and loan booking seamlessly in one platform.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={MockupWrap}
            sx={{
              width: "100%",
              maxWidth: "2000px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const iconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  bgcolor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const imgStyle = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
};

const titleStyle = {
  fontWeight: 500,
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0%",
  color: "#101828",
};

export default Features;
