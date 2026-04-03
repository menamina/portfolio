import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mainDIV">
      <div className="nav">
        <div>Mena.</div>
        <div>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="rendering-routes">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
