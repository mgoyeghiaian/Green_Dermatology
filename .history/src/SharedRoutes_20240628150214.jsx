import { Route, Routes } from "react-router-dom"
import Services from "./Pages/Services/Services"
import Physicians from "./Pages/Physicians/Physicians"
import Physiciansdetails from "./Pages/Physicians/Physiciansdetails"
import Home from "./Pages/Home/Home"




const SharedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Services" element={<Services />} />
      <Route exact path="/Physicians" element={<Physicians />} />
      <Route path="/Physiciansdetails/:id" element={<Physiciansdetails />} />
    </Routes>
  )
}

export default SharedRoutes