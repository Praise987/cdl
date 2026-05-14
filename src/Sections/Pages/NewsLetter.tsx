import React from "react";
import {Box, Typography,TextField, Button, Stack,Link,Paper,} from "@mui/material";

const NewsletterSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0b1b2b", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",       
      }}
    >
      <Paper
        elevation={0}
        sx={{width: "100%", maxWidth: 900, top: "180px", borderRadius: "16px", textAlign: "center", bgcolor: "#f9fafb", mt: -8, height: "280px", }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#101828",
          }}
        >
          Sign up for our newsletter
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mb: 4,
            fontSize: "16px",
          }}
        >
          Be the first to know about releases and industry news and insights.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="medium"
            sx={{
              left: "200px",
              width: { xs: "100%", sm: "320px" },
              bgcolor: "#fff",
              borderRadius: "8px",
            }}
          />

          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              left: "200px",
              bgcolor: "#111827",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Subscribe
          </Button>
        </Stack>

        <Typography
          sx={{
            mt: 3,
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          We care about your data in our{" "}
          <Link
            href="#"
            underline="hover"
            sx={{ color: "#4f46e5", cursor: "pointer" }}
          >
            privacy policy
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default NewsletterSection;