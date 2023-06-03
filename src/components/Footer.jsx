import React from "react";
import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import EmailIcon from "@mui/icons-material/Email";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={{ xs: "space-evenly", md: "center" }}
      paddingBottom="30px"
      sx={{background:"linear-gradient(180deg, #2E3B61 0%, #604F71 100%)"}}
    >
      <a href="https://www.facebook.com/pongchun.chun/">
        <FacebookIcon
          sx={{
            fontSize: "44px",
            marginRight: { xs: "0", md: "3.75rem" },
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="https://github.com/riddlephoto">
        <GithubIcon
          sx={{
            fontSize: "40px",
            marginRight: { xs: "0", md: "3.75rem" },
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="mailto:orachun_ruengdej@outlook.com">
        <EmailIcon
          sx={{
            fontSize: "44px",
            marginRight: { xs: "0", md: "3.75rem" },
            marginTop: "0.25rem",
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
      <a href="https://www.linkedin.com/in/orachun-ruengdej/">
        <LinkedinIcon
          sx={{
            fontSize: "46px",
            marginRight: { xs: "0", md: "3.75rem" },
            color: "#fff",
            "&:hover": { color: "var(--color-p4)", transition: "0.5s" },
          }}
        />
      </a>
    </Stack>
  );
};

export default Footer;
