import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const projectTemplate = ({
  title,
  introParagraph,
  keyFeature,
  tools,
  resultPic,
  link,
  resultParagraph,
  result,
}) => {
  const subHeaderStyles = {
    color: "var(--color-p2)",
    fontFamily: "var(--font-family)",
    fontSize: { xs: "24px", md: "32px" },
    fontWeight: "700",
    marginBottom: "34px",
    textAlign: "start",
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
    <>
      <Typography sx={subHeaderStyles}>{title}</Typography>
      <Typography sx={contentStyles}>{introParagraph}</Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{gap:{xs:"2rem", md:"5rem"}}}
        marginBottom="34px"
      >
        <Box className="Features_Container">
          <Typography sx={subHeaderStyles}>Key Features</Typography>
          <ul className="Features_List">
            {keyFeature.map((list) => (
              <li>{list.detail}</li>
            ))}
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
            {tools.map((list) => (
              <img src={list.image} alt={list.logo} />
            ))}
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap="2rem"
        alignItems="center"
        mb="68px"
      >
        <Box className="Result_Picture">
          {resultPic.map((list) => (
            <img src={list.image} alt={list.page} />
          ))}
        </Box>
        <Box className="Result_Content">
          <Box
            className="Result_Header"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Typography sx={subHeaderStyles}>Results</Typography>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <LaunchIcon
                sx={{
                  marginBottom: "34px",
                  fontSize: "25px",
                  color: "var(--color-p2)",
                }}
              />
            </a>
          </Box>
          <Typography sx={contentStyles}>{resultParagraph}</Typography>
          <ul className="Result_List">
            {result.map((list) => (
              <li>
                <span>{list.header}</span>
                {list.detail}
              </li>
            ))}
          </ul>
        </Box>
      </Stack>
    </>
  );
};

export default projectTemplate;
