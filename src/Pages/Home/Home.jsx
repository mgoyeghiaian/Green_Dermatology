import Afterherobanner from "./Afterherobanner";
import Contactus from "./Contactus";
import Hero from "./Hero";
import Serviceshome from "./Serviceshome";
import Testemonials from "./Testemonials";

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="aboutus">
        <Afterherobanner />
      </div>
      <div id="services">
        <Serviceshome />
      </div>
      <div id="testimonials">
        <Testemonials />
      </div>
      <div id="getintouch">
        <Contactus />
      </div>
    </div>
  );
}

export default Home;
