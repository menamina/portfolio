import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
