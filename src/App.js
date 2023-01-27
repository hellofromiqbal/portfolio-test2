import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
