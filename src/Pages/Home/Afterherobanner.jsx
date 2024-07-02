import OutClinic from '/src/assets/OurCLin.svg';
import OurPhy from '/src/assets/OurPhy.svg';
import ContactUs from '/src/assets/ContactUs.svg';

const Afterherobanner = () => {
  return (
    <div className=" min-w-fit min-h-[40vh] flex flex-col lg:flex-row items-center  border-y-2 border-y-black justify-center text-secondary font-bold">

      <div className="w-full bg-tertiary opacity-80  lg:w-[38%] h-[40vh] p-5 flex flex-col gap-2.5 items-center justify-center text-center lg:pl-[9%] 2xl:pl-[18%] lg:items-start lg:justify-center lg:text-start">
        <img src={OutClinic} alt="Our Clinic" className="h-14 w-14 mb-2" />
        <h1 className='uppercase text-3xl'>OUR CLINIC</h1>
        <div className='text-lg font-normal mt-2'>
          <h5>Delaware Dermatology, where</h5>
          <h5>compassionate care meets expertise</h5>
        </div>
        <a href='/' className='border p-2 px-4 rounded-lg bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2'>Apply For A Bed</a>
      </div>

      <div className="w-full bg-tertiary lg:w-[24%] h-[40vh] p-5 flex flex-col gap-2.5 items-center justify-center text-center lg:items-start lg:justify-center lg:text-start border-y lg:border-y-0 lg:border-x-2 border-secondary">
        <img src={OurPhy} alt="Our Physicians" className="h-14 w-14 mb-2" />
        <h1 className='uppercase text-3xl'>OUR PHYSICIANS</h1>
        <div className='text-lg font-normal mt-2'>
          <h5>Meet the skilled hands and</h5>
          <h5>compassionate hearts behind us</h5>
        </div>
        <a href='tel:+106723563567' className='border p-2 px-4 rounded-lg bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2'>+10 672 356 3567</a>
      </div>

      <div className="w-full bg-tertiary opacity-80   lg:w-[38%] h-[40vh] p-5 flex flex-col gap-2.5 items-center justify-center text-center lg:items-start lg:justify-center lg:text-start">
        <img src={ContactUs} alt="Contact Us" className="h-14 w-14 mb-2" />
        <h1 className='uppercase text-3xl'>CONTACT US</h1>
        <div className='text-lg font-normal mt-2'>
          <h5>Situated just a step away,</h5>
          <h5>ready to answer your questions</h5>
        </div>
        <a href='/' className='border p-2 px-4 rounded-lg bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-tertiary transition-colors mt-2'>Make An Appointment</a>
      </div>

    </div>
  );
}

export default Afterherobanner;
