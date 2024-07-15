import { useParams } from 'react-router-dom';
import services from '/src/Db/ServicesDb.js'; // Adjust the path as necessary
import BannerImage from '/src/assets/contact-form-background.jpg'; // Adjust the path as necessary

const Services = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <div className="text-center text-red-600">Service not found</div>;
  }

  return (
    <div className="w-full">
      <div className="relative mb-8 w-full h-60 sm:h-80 overflow-hidden">
        <img src={BannerImage} alt="Service Banner" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-tertiary">{service.title}</h1>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl text-tertiary mb-2">{service.introTitle}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-primary">{service.description}</p>
        </section>
        {service.details.map((detail, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl text-tertiary mb-2">{detail.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed text-primary">{detail.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
