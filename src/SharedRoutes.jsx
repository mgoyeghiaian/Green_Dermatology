import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Physicians from "./Pages/Physicians/Physicians";
import Physiciansdetails from "./Pages/Physicians/Physiciansdetails";
import Home from "./Pages/Home/Home";
import ServicesDetails from "./Pages/Services/ServicesDetails";

const SharedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServicesDetails />} />
      <Route path="/physicians" element={<Physicians />} />
      <Route path="/physiciansdetails/:id" element={<Physiciansdetails />} />
    </Routes>
  );
};

export default SharedRoutes;
