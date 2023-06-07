import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import profile from "../assets/profile.png";
import hobby from "../assets/Giant swing.jpg";
import { About_P1, About_P2, About_P3, About_P4, About_P5 } from "./content";
import "./about.css";
import { city, chula, river, star, dam, market } from "../assets";
import {useSpring, animated} from 'react-spring';

const About = () => {

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const contentStyles = {
    color: "var(--color-p2)",
    fontFamily: "var(--font-family)",
    fontSize: { xs: "15px", md: "20px" },
    fontWeight: "500",
    marginBottom: "50px",
    textAlign: "justify",
  };

  const headerStyles = {
    color: "var(--color-p2)",
    fontFamily: "var(--font-family)",
    fontSize: { xs: "60px", md: "83px" },
    fontWeight: "700",
    marginBottom: "34px",
    textAlign: { xs: "justify", md: "start" },
  };
  return (
    
    <animated.div style={props}>
      <Typography sx={headerStyles}>About Me</Typography>
      <Typography sx={contentStyles}>
        {About_P1}
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        gap="50px"
        marginBottom={{ xs: "0", md: "34px" }}
      >
        <img src={profile} alt="profile" height={460} />
        <Box>
          <Typography sx={contentStyles}>{About_P2}</Typography>
          <Typography sx={contentStyles}>{About_P3}</Typography>
          <Typography sx={contentStyles}>{About_P4}</Typography>
        </Box>
      </Stack>
      <Typography sx={headerStyles}>Hobby</Typography>
      <Stack
        className="About_Hobby"
        direction="column"
        alignItems="center"
        gap={{ xs: "0", md: "50px" }}
        // marginBottom={{ xs: "0", md: "92px" }}
      >
        <Typography sx={contentStyles}>{About_P5}</Typography>
        <Box className="Image_Scroll">
          <img src={hobby} alt="hobby"/>
          <img src={market} alt="market" />
          <img src={city} alt="city"/>
          <img src={river} alt="river"/>
          <img src={dam} alt="dam"/>
          <img src={star} alt="star"/>
          <img src={chula} alt="chula"/>
        </Box>
      </Stack>
    </animated.div>
  );
};

export default About;
