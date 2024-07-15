import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Physicians from "./Pages/Physicians/Physicians";
import Physiciansdetails from "./Pages/Physicians/Physiciansdetails";
import Home from "./Pages/Home/Home";
// import ServicesDetails from "./Pages/Services/ServicesDetails";
import Aboutus from "./Pages/Aboutus/Aboutus";

const SharedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/services/:id" element={<Services />} />
      <Route path="/physicians" element={<Physicians />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/physiciansdetails/:id" element={<Physiciansdetails />} />
    </Routes>
  );
};

export default SharedRoutes;
