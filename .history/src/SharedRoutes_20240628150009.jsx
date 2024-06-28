import { Route, Routes } from "react-router-dom"
import Home from "./src/Pages/Home/Home"
import Projects from "./src/Pages/Projects/ProjectsMain/Projects"
import Aboutus from "./src/Pages/AboutUs/Aboutus"
import Projectdetails from "./src/Pages/Projects/ProjectsSub/Projectdetails"



const SharedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Sr />} />
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route path="/projectdetails/:id" element={<Projectdetails />} />
    </Routes>
  )
}

export default SharedRoutes