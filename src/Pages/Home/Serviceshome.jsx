import { KeyboardArrowRight } from '@mui/icons-material';
import services from '/src/Db/ServicesDb.js';
import '/src/index.css'
const Serviceshome = () => {
  return (
    <div className="bg-services-background bg-cover flex-col bg-center bg-no-repeat min-h-screen flex items-center justify-center p-10 lg:p-32 font-bold">
      <div className="md:w-[40%] flex justify-center items-center flex-col text-center mb-8">
        <h1 className="uppercase text-xl md:text-3xl">Fields of expertise</h1>
        <p className="text-xs md:text-md">
          At Delaware Dermatology, our expertise spans a wide range of dermatological conditions, ensuring comprehensive care for our patients. From common concerns like acne and eczema to more serious conditions such as skin cancer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:w-auto justify-center  justify-items-center">
        {services.map((service) => (
          <a href={`/services/${service.id}`} className="cursor-pointer w-full md:w-[100%] lg:w-[250px] h-auto md:h-[250px] m-0.2" key={service.id}>
            <div
              className={`service-card w-full h-full text-secondary flex flex-col justify-center text-center md:text-left items-center md:items-start p-4 border-secondary border bg-tertiary middle:p-10`}
              style={{ backgroundColor: `rgba(18, 139, 63, ${service.opacity})` }}
            >
              <h1 className="text-sm lg:text-lg mb-2 text-left">{service.title}</h1>
              <p className="text-xs lg:text-sm  line-clamp-2">
                {service.description}
              </p>
              <div className="mt-2 flex items-center">
                Show more <KeyboardArrowRight className="ml-1" />
              </div>
            </div>
          </a>
        ))}
        <div className='w-full h-full text-secondary flex flex-col justify-center text-center md:text-left items-center md:items-start p-4 border-secondary border bg-tertiary opacity-80 ' />
      </div>
    </div >
  );
};

export default Serviceshome;
