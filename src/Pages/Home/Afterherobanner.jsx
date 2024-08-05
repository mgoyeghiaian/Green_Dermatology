import OutClinic from '/src/assets/OurCLin.svg';
import OurPhy from '/src/assets/OurPhy.svg';
import ContactUs from '/src/assets/ContactUs.svg';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Afterherobanner = () => {
  const navigate = useNavigate();


  const handleScrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }, 100);
  };


  return (
    <div className="min-w-fit min-h-[32vh] flex flex-col lg:flex-row items-center border-y  border-y-black justify-center text-secondary font-medium">

      <div className="w-full bg-tertiary opacity-80 border-opacity-50 lg:w-[38%] h-auto md:h-[32vh] middle:h-[45vh] p-5 flex flex-col gap-2.5 items-center justify-center text-center lg:pl-[9%] 2xl:pl-[18%] lg:items-start lg:justify-center lg:text-start">
        <img src={OutClinic} alt="Our Clinic" className="h-14 w-14 mb-2 md:h-12 md:w-12 sm:h-10 sm:w-10" />
        <h1 className='uppercase text-2xl sm:text-xl'>OUR CLINIC</h1>
        <div className='text-lg font-normal mt-2 md:text-md sm:text-sm'>
          <h5>Green Dermatology, where</h5>
          <h5>compassionate care meets expertise</h5>
        </div>
        <a href='/aboutus' className='border p-2 px-4 rounded-lg bg-transparent text-secondary   border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2 md:text-sm sm:text-xs md:px-3 sm:px-2'>About us</a>
      </div>

      <div className="w-full bg-tertiary lg:w-[24%] md:h-[32vh] h-auto border-opacity-50 p-5 middle:h-[45vh] flex flex-col gap-2.5 items-center justify-center text-center lg:items-start lg:justify-center lg:text-start border-y lg:border-y-0 lg:border-x-2 border-secondary">
        <img src={OurPhy} alt="OUR PROVIDERS" className="h-14 w-14 mb-2 md:h-12 md:w-12 sm:h-10 sm:w-10" />
        <h1 className='uppercase text-2xl sm:text-xl'>OUR PROVIDERS</h1>
        <div className='text-lg font-normal mt-2 md:text-md sm:text-sm'>
          <h5>Meet the skilled hands and</h5>
          <h5>compassionate hearts behind us</h5>
        </div>
        <a href='/physicians' className='border p-2 px-4 rounded-lg bg-transparent text-secondary  border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2 md:text-sm sm:text-xs md:px-3 sm:px-2'>OUR PROVIDERS</a>
      </div>

      <div className="w-full bg-tertiary opacity-80 lg:w-[38%] h-auto border-opacity-50 md:h-[32vh] middle:h-[45vh] p-5 flex flex-col gap-2.5 items-center justify-center text-center lg:items-start lg:justify-center lg:text-start">
        <img src={ContactUs} alt="Contact Us" className="h-14 w-14 mb-2 md:h-12 md:w-12 sm:h-10 sm:w-10" />
        <h1 className='uppercase text-2xl sm:text-xl'>CONTACT US</h1>
        <div className='text-lg font-normal mt-2 md:text-md sm:text-sm'>
          <h5>Situated just a step away,</h5>
          <h5>ready to answer your questions</h5>
        </div>
        <a onClick={() => handleScrollToSection('getintouch')} className='border p-2 px-4 cursor-pointer rounded-lg bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2 md:text-sm sm:text-xs md:px-3 sm:px-2'>CONTACT US</a>
      </div>

    </div>
  );
}

export default Afterherobanner;
