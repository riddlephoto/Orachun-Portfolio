import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <Box className="Navbar_Container">
      <Fade top>
        <Link to="/">
          <h2>orachun</h2>
        </Link>
        <Box className="List_Container">
          <Box className="Navbar_List">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/Education">
              <li>Education</li>
            </Link>
            <Link to="/Project">
              <li>Project</li>
            </Link>
          </Box>
        </Box>
        <Box className="Navbar_Menu_Container ">
          {toggle ? (
            <CloseIcon
              sx={{ color: "var(--color-p3)", fontSize: "40px" }}
              onClick={() => setToggle(false)}
            />
          ) : (
            <MenuIcon
              sx={{ color: "var(--color-p3)", fontSize: "40px" }}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <Box className="Navbar_Menu slide-bottom">
              <Link to="/about">
                <li onClick={() => setToggle(false)}>About</li>
              </Link>
              <Link to="/Education">
                <li onClick={() => setToggle(false)}>Education</li>
              </Link>
              <Link to="/Project">
                <li onClick={() => setToggle(false)}>Project</li>
              </Link>
            </Box>
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default Navbar;
