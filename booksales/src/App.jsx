import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen Layout
import Header from "./components/header";
import Footer from "./components/footer";

// Import semua halaman
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
