import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Aboutpage from "./aboutpage/Aboutpage";
import Currentlyworking from "./work/currentworking";
import NotFound from "./NotFound";
import Myresume from "./resume/myresume";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Aboutpage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/cv" element={<CV />} /> */}
        <Route path="/work" element={<Currentlyworking />} />
        <Route path="/cv" element={<Myresume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
