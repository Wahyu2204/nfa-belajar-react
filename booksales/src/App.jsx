import { Routes, Route } from "react-router-dom";

// Import komponen Layout (pastikan nama file sesuai, biasanya diawali huruf besar)
import Header from "./components/header";
import Footer from "./components/footer";

// Import semua halaman
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
