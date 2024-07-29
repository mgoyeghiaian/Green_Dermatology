import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import services from '/src/Db/ServicesDb.js';
import BannerImage from '/src/assets/services-banner.jpg';

const Services = () => {
  const { id } = useParams();
  const location = useLocation();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      const element = document.getElementById('serviceData');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, service]);

  if (!service) {
    return <div className="text-center text-red-600">Service not found</div>;
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>{service.title} - Green Dermatology</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.title}, dermatology services, skin care`} />
        <link rel="canonical" href={`https://greendermatology.net/services/${id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${service.title}",
              "description": "${service.description}",
              "url": "https://greendermatology.net/services/${id}",
              "provider": {
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
            }
          `}
        </script>
      </Helmet>
      <div className="relative mb-8 w-full h-40 md:h-[100%] overflow-hidden">
        <img src={BannerImage} alt="Service Banner" className="w-full h-full object-fill" />
      </div>
      <div id='serviceData' className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-tertiary">{service.title}</h1>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl text-tertiary mb-2">{service.introTitle}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-primary">{service.description}</p>
        </section>
        {service.details.map((detail, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl text-tertiary mb-2">{detail.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed text-primary" dangerouslySetInnerHTML={{ __html: detail.content }}></p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
