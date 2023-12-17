import "./App.css";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Services from "./components/Services";

function App() {
  return (
    <main className="main">
      <section className="hero" id="home">
        <Navbar />
        <div className="hero-text">
          <h1>Meet Destiny, the visonary landing Page.</h1>
          <p>
            Re-targeting your audience with competitive intelligence embedded in
            Destiny. See it in action and then believe.
          </p>
          <div>
            <button>watch intro</button>
          </div>
        </div>
      </section>
      <Services />
      <Features />
      <Review />
      <Pricing />
    </main>
  );
}

export default App;
