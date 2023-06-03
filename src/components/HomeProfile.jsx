import React from "react";
import memoji from "../assets/profile_new.svg";
import htmlLogo from "../assets/html_svg.svg";
import CSSLogo from "../assets/CSS.svg";
import JSLogo from "../assets/javascript.svg";
import ReactLogo from "../assets/react.svg";
import flipProfile from "../assets/flip_Profile.png";
import "./homeProfile.css";
import { Box } from "@mui/material";

const HomeProfile = () => {
  return (
    <Box
      className="Profile_Container"
      minHeight={{ xs: "0", md: "465px" }}
      sx={{ marginBottom: { xs: "3rem", md: "0" } }}
    >
      <Box
        className="Main_Profile"
        position="relative"
        width={{ xs: "372px", md: "465px" }}
        height={{ xs: "372px", md: "465px" }}
      >
        <img src={memoji} alt="Profile" height={465} />
        <img src={flipProfile} alt="Real_Profile" height={465} />
        <Box
          className="Sub_Profile"
          position="absolute"
          width={{ xs: "372px", md: "465px" }}
          height={{ xs: "372px", md: "465px" }}
        >
          <img
            src={htmlLogo}
            alt="HTML"
            height={100}
            style={{ position: "absolute", top: "37px", right: "1.5rem" }}
          />
          <img
            src={CSSLogo}
            alt="CSS"
            height={100}
            style={{ position: "absolute", top: "80px"}}
          />
          <img
            src={JSLogo}
            alt="JS"
            height={100}
            style={{ position: "absolute", left: "6rem" }}
          />
          <img
            src={ReactLogo}
            alt="React"
            height={100}
            style={{ position: "absolute", bottom: "111px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeProfile;
