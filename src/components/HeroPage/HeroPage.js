import React from "react";
import { Box } from "@mui/material";
import "./HeroPage.css";
import Type from "./Type";

const HeroPage = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <Box className="about center">
          <Box style={{ textAlign: "left" }} className="title">
            <h1>Hi,</h1>
            <h1>
              I am <span className="about__name">Vinay Kumar.</span>
            </h1>
            <Box>
              <h2 className="about__role">
                <Type />
              </h2>
            </Box>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default HeroPage;
