import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Education, Project, Navbar, Footer } from "./components";
import { Box } from "@mui/material";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          padding: { xs: "2rem 1rem", sm: "65px 130px" },
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Box>
      <Box>{location.pathname !== "/" && <Footer />}</Box>
    </>
  );
};

export default App;
