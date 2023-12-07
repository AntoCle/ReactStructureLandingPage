import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Contatti from "./pages/Contatti"


function App() {
  return (
    <div>
      <h1>ciao</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contatti" element={<Contatti />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
