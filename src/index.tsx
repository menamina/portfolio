import { Container, Box, Typography, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";

const underlines = {
  width: "100%",
  borderBottom: "1px solid #d3d1cb",
  padding: "8px",
};

function App() {
  const [view, setView] = useState<string>("");

  return (
    <div>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
