import { useState } from "react";
import "./App.css";
import MenuToggle from "./components/MenuToggle";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <section className="home-section">
  
        <Navbar />
        

        <div className="hero-txt-wrapper">
          <h1>Meet Destiny, the visonary landing Page.</h1>
          <p>
            Re-targeting your audience with competitive intelligence embedded in
            Destiny. See it in action and then believe.
          </p>
          <div>
            <button>
              {" "}
              <a
                href="https://youtu.be/ANCm3oG7htM?si=XgSWlqHmAbhMJrZ1"
                target="_blank"
              >
                WATCH INTRO
              </a>{" "}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
