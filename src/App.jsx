import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import About from "./Component/Pages/About/About";
import Partner from "./Component/Pages/Partner/Partner";
import Contact from "./Component/Pages/Contact/Contact";
import Gallery from "./Component/Pages/Gallery/Gallery";
import Founder from "./Component/Pages/Founder/Founder";
import Donate from "./Component/Pages/Donate/Donate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
