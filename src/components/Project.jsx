import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Project_P1, Project_P3 } from "./content";
import LaunchIcon from "@mui/icons-material/Launch";
import { useSpring, animated } from "react-spring";

import { rcWebsite, cryptoClone } from "./content";
import ProjectTemplate from "./ProjectTemplate";

import "./project.css";

const Project = () => {
  const {
    title: rcTitle,
    introParagrap: rcIntro,
    keyFeature: rcKey,
    tools: rcTools,
    resultPic: rcPic,
    link: rcLink,
    resultParagraph: rcResultParagraph,
    result: rcResult,
  } = rcWebsite[0];

  const {
    title: cryptoTitle,
    introParagrap: cryptoIntro,
    keyFeature: cryptoKey,
    tools: cryptoTools,
    resultPic: cryptoPic,
    link: cryptoLink,
    resultParagraph: cryptoResultParagraph,
    result: cryptoResult,
  } = cryptoClone[0];

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

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
          Projects
        </Typography>
        <ProjectTemplate
          title={rcTitle}
          introParagraph={rcIntro}
          keyFeature={rcKey}
          tools={rcTools}
          resultPic={rcPic}
          link={rcLink}
          resultParagraph={rcResultParagraph}
          result={rcResult}
        />
        <ProjectTemplate
          title={cryptoTitle}
          introParagraph={cryptoIntro}
          keyFeature={cryptoKey}
          tools={cryptoTools}
          resultPic={cryptoPic}
          link={cryptoLink}
          resultParagraph={cryptoResultParagraph}
          result={cryptoResult}
        />
      </Box>
    </animated.div>
  );
};

export default Project;
