import Navbar from "./components/Navbar";
import Hero from "../../loopstudios-landing-page/src/components/Hero";
import Content from "./components/Content";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/Navbar.css";
import "./style/Hero.css";
import "./style/Content.css";
import "./style/Cards.css";
import "./style/Footer.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Content />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
