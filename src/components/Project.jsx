import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Project_P1, Project_P3 } from "./content";
import LaunchIcon from "@mui/icons-material/Launch";
import { useSpring, animated } from "react-spring";

import {
  HTML,
  CSS,
  JS,
  Preview,
  CgPos,
  Constraint,
  Home,
  Wing,
  Tail,
  Next,
  Vercel,
  react,
  Vscode,
  figma,
  background,
} from "../assets";

import "./project.css";

const Project = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const subHeaderStyles = {
    color: "var(--color-p2)",
    fontFamily: "var(--font-family)",
    fontSize: { xs: "24px", md: "32px" },
    fontWeight: "700",
    marginBottom: "34px",
    textAlign: { xs: "center", md: "start" },
  };
  const contentStyles = {
    color: "var(--color-p2)",
    fontFamily: "var(--font-family)",
    fontSize: { xs: "15px", md: "20px" },
    fontWeight: "500",
    marginBottom: "34px",
    textAlign: "justify",
  };
  return (
    <animated.div style={props}>
      <Box className="Project_Container">
        <Typography
          color="var(--color-p2)"
          fontFamily="var(--font-family)"
          fontSize={{ xs: "60px", md: "83px" }}
          fontWeight="700"
          marginBottom="34px"
          textAlign="start"
        >
          Project
        </Typography>
        <Typography sx={subHeaderStyles}>
          Conceptual RC Aircraft Design Website
        </Typography>
        <Typography sx={contentStyles}>{Project_P1}</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap="5rem"
          marginBottom="34px"
        >
          <Box className="Features_Container">
            <Typography sx={subHeaderStyles}>Key Features</Typography>
            <ul className="Features_List">
              <li>
                The website can define <span>aircraft design boundary</span>.
              </li>
              <li>
                <span>Aircraft Components</span> can be designed in the website.
              </li>
              <li>
                The designed components will have their{" "}
                <span>graphical illustrations</span>.
              </li>
              <li>
                <span>Theoretical background</span> is provided for users.
              </li>
            </ul>
          </Box>
          <Box className="Tool_Container">
            <Typography sx={subHeaderStyles}>Selected Tools</Typography>
            <Stack
              className="Tool_List"
              direction="row"
              gap={5}
              flexWrap="wrap"
              justifyContent="center"
            >
              <img src={react} alt="React"></img>
              <img src={HTML} alt="HTML"></img>
              <img src={CSS} alt="CSS"></img>
              <img src={JS} alt="JS"></img>
              <img src={figma} alt="Figma"></img>
              <img src={Vscode} alt="Vscode"></img>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap="2rem"
          alignItems="center"
        >
          <Box className="Result_Picture">
            <img src={Home} alt="Homepage" />
            <img src={Constraint} alt="constraint" />
            <img src={Wing} alt="Wing" />
            <img src={Tail} alt="Tail" />
            <img src={CgPos} alt="CgPos" />
            <img src={Preview} alt="Preview" />
            <img src={background} alt="Background" />
          </Box>
          <Box className="Result_Content">
            <Box
              className="Result_Header"
              display="flex"
              alignItems="center"
              gap="5px"
            >
              <Typography sx={subHeaderStyles}>Results</Typography>
              <a
                href="https://senior-next-beryl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LaunchIcon
                  sx={{
                    marginBottom: "34px",
                    fontSize: "25px",
                    color: "var(--color-p2)",
                  }}
                />
              </a>
            </Box>
            <Typography sx={contentStyles}>{Project_P3}</Typography>
            <ul className="Result_List">
              <li>
                <span>Homepage</span>: Use to link to other pages
              </li>
              <li>
                <span>Constraint Diagram</span>: Use to define aircraft design
                boundary
              </li>
              <li>
                <span>Components Design Page</span>: There are four sub-sections
                which are wing, tail, Cg Location, and fuselage
              </li>
              <li>
                <span>Theoretical Background</span>: Provide fundamental theory
                for users.
              </li>
            </ul>
          </Box>
        </Stack>
      </Box>
    </animated.div>
  );
};

export default Project;
