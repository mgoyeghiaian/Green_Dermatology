import { Route, Routes } from "react-router-dom"
import Home from "./src/Pages/Home/Home"




const SharedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<S />} />
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route path="/projectdetails/:id" element={<Projectdetails />} />
    </Routes>
  )
}

export default SharedRoutes