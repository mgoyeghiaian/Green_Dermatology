import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/UpScroller/UpScroller";
import SharedRoutes from "./SharedRoutes";

export default function App() {
  return (
    <div className=" bg-bg-main">
      <Navbar />
      <SharedRoutes />
      <ScrollToTop />
      <Footer />
    </div>
  )
}