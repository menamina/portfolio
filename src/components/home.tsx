import Services from "./services";
import About from "./aboutme";
import Contact from "./contact";
import Tools from "./tools";
import PortfolioOverview from "./portfolioOverview";
import HomeOverview from "./homeOverview";

function Home() {
  return (
    <main className="home">
      {/* Overview */}
      <HomeOverview />

      {/* Services */}
      <Services />
      {/* About */}
      <About />

      {/* Portfolio */}
      <PortfolioOverview />

      {/* Tools */}
      <Tools />

      {/* Contact */}
      <Contact />
    </main>
  );
}

export default Home;
