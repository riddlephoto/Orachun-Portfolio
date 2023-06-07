import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HomeProfile from "./HomeProfile";
import IconList from "./IconList";

const Home = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
    >
      <Box sx={{ maxWidth: "680px" }}>
        <Typography
          color="var(--color-p2)"
          fontFamily="var(--font-family)"
          fontSize={{ xs: "60px", md: "83px" }}
          fontWeight="700"
          marginBottom="19px"
          textAlign={{ xs: "center", md: "start" }}
        >
          Orachun Ruengdej
        </Typography>
        <Typography
          color="var(--color-p2)"
          fontFamily="var(--font-family)"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight="500"
          marginBottom="38px"
          textAlign={{ xs: "center", md: "start" }}
        >
          Aerospace engineering student with passion in web development
        </Typography>
        <Typography
          color="var(--color-p2)"
          fontFamily="var(--font-family)"
          fontSize={{ xs: "15px", md: "20px" }}
          fontWeight="500"
          marginBottom="38px"
          textAlign={{ xs: "center", md: "start" }}
        >
          This portfolio has been created to enhance my technical skills and
          demonstrate my dedication to the field of front-end development.
        </Typography>
        <Box display="flex" justifyContent={{ xs: "center", md: "start" }}>
          <a
            href="https://drive.google.com/file/d/1-cs68EjIWcJW3GRg6MD-TFV1XY10qogJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              sx={{
                background: "rgba(255, 123, 81, 0.8)",
                borderRadius: "50px",
                textTransform: "Inherit",
                height: "56px",
                "&:hover": {
                  background: "rgba(255, 123, 81)",
                },
                marginBottom: "38px",
              }}
            >
              <Typography
                color="#fff"
                fontFamily="var(--font-family)"
                fontSize="24px"
                fontWeight="700"
              >
                Download My Resume
              </Typography>
            </Button>
          </a>
        </Box>
        <IconList />
      </Box>
      <HomeProfile />
    </Stack>
  );
};

export default Home;
