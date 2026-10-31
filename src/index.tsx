import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
