import { Routes, Route } from "react-router-dom";
import DefaultLayouting from "./layout/defaultLayouting";

// Import semua halaman
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Books from "./pages/book";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouting />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Books />} />
      </Route>
    </Routes>
  );
}
