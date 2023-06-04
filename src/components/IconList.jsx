import React from "react";
import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import EmailIcon from "@mui/icons-material/Email";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

const IconList = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent={{xs: "space-evenly", md:"start"}}>
      <a href="https://www.facebook.com/pongchun.chun/"  target="_blank" rel="noopener noreferrer">
        <FacebookIcon
          sx={{
            fontSize: "44px",
            marginRight:{xs: "0", md: "3.75rem"},
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="https://github.com/riddlephoto"  target="_blank" rel="noopener noreferrer">
        <GithubIcon
          sx={{
            fontSize: "40px",
            marginRight:{xs: "0", md: "3.75rem"},
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="mailto:orachun_ruengdej@outlook.com"  target="_blank" rel="noopener noreferrer">
        <EmailIcon
          sx={{
            fontSize: "44px",
            marginRight:{xs: "0", md: "3.75rem"},
            marginTop: "0.25rem",
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="https://www.linkedin.com/in/orachun-ruengdej/"  target="_blank" rel="noopener noreferrer">
        <LinkedinIcon
          sx={{
            fontSize: "46px",
            marginRight:{xs: "0", md: "3.75rem"},
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
    </Stack>
  );
};

export default IconList;
