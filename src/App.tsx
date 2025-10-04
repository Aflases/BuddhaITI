import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CollegeWebsite from "./Pages/CollegeWebsite";
import AboutUs from "./component/AboutUs";
import Trade from "./component/Trade";
import Faculties from "./component/Faculties";
import Gallery from "./component/Gallery";
import Download from "./component/Download";
import AntiRagging from "./component/AntiRagging";
import ContactUs from "./component/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CollegeWebsite />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/download" element={<Download />} />
        <Route path="/antiragging" element={<AntiRagging />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;   