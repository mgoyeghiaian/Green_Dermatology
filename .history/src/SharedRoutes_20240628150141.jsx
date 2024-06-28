import { Route, Routes } from "react-router-dom"
import Home from "./src/Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Physicians from "./Pages/Physicians/Physicians"
import Physiciansdetails from "./Pages/Physicians/Physiciansdetails"




const SharedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Services />} />
      <Route exact path="/aboutus" element={<Physicians />} />
      <Route path="/projectdetails/:id" element={<Physiciansdetails />} />
    </Routes>
  )
}

export default SharedRoutes