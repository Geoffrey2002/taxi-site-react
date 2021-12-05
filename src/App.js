import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import WeDo from "./Components/What/WeDo";
import Service from "./Components/Services/Service";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/whatwedo" element={<WeDo />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
