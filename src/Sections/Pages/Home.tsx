import React from "react";
import Hero from "./Hero";
import CoreServices from "./CoreServices";
import Features from "./Features";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Hero />
      <CoreServices />
      <Features />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;