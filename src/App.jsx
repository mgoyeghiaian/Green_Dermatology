import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SharedRoutes from "./SharedRoutes";

export default function App() {
  return (
    <div className=" bg-bg-main">
      <Navbar />
      <SharedRoutes />
      <Footer />
    </div>
  )
}