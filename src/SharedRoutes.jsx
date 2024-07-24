import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Physicians from "./Pages/Physicians/Physicians";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";

const SharedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:id" element={<Services />} />
      <Route path="/physicians" element={<Physicians />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  );
};

export default SharedRoutes;
