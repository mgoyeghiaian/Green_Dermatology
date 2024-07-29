import { Helmet } from 'react-helmet';
import Afterherobanner from "./Afterherobanner";
import Contactus from "./Contactus";
import Hero from "./Hero";
import Serviceshome from "./Serviceshome";
// import Testemonials from "./Testemonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Green Dermatology</title>
        <meta name="description" content="Find the best dermatologist near you in Sussex County Delaware. We offer treatments for skin conditions, skin cancer, and more." />
        <meta name="keywords" content="dermatologist near me, dermatology, skin conditions, skin treatment, skin cancer" />
        <link rel="canonical" href='https://greendermatology.net' />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Green Dermatology",
              "url": "https://greendermatology.net",
              "logo": "https://greendermatology.net/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-459-5010",
                "contactType": "Customer Service",
                "email": "kris@greenclinics.net"
              },
              "department": {
                "@type": "MedicalOrganization",
                "name": "Dermatology Department"
              }
            }
          `}
        </script>
      </Helmet>
      <div id="hero">
        <Hero />
      </div>
      <div id="aboutus">
        <Afterherobanner />
      </div>
      <div id="services">
        <Serviceshome />
      </div>
      {/* <div id="testimonials">
        <Testemonials />
      </div> */}
      <div id="getintouch">
        <Contactus />
      </div>
    </div>
  );
}

export default Home;
