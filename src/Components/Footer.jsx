import Image from '/src/assets/footer3.jpg'
import Logo from '/src/assets/Logooooo.png'
import Logoo from '/src/assets/in2infoLogo.png'
import { Link } from 'react-router-dom'
import services from '/src/Db/ServicesDb.js';

const Footer = () => {
  return (
    <div className="bg-footer-backgroud border-y border-gray-400 w-full h-auto p-8 pr-0 bg-[#ECE3D4] flex flex-col md:flex-row  text-primary  md:py-0">
      <div className="w-full md:w-1/2 h-full flex flex-col items-start lg:items-center justify-between p-2 pt-4">
        <div className="flex flex-col gap-6 md:gap-9">
          <img src={Logo} className="h-[60px] self-start" alt="Logo" />
          <div>
            <a href='/aboutus' className="text-[20px] font-bold text-primary hover:text-tertiary  leading-relaxed hover:underline"> <h5 >About us</h5></a>
            <p className="text-[14px] leading-relaxed">310 Mullet Run St, Milford, DE 19963</p>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-9 md:gap-16">
            <div className='flex flex-col justify-center'>
              <h5 className="text-[20px] font-bold mb-2">Services</h5>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className='pb-5'>
              <a href='/physicians' className="text-[20px] font-bold text-primary hover:text-tertiary  leading-relaxed hover:underline">Providers</a>

            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:pl-20 pt-6 items-start  lg:gap-2">
          <p className="text-center text-[10px] lg:text-[12px] mb-2 lg:mb-0">© 2024 <span >GREEN</span> Dermatology</p>
          <div className="flex justify-center items-center gap-1">
            <p className="text-center text-[10px] lg:text-[12px]">SITE<span className="font-bold">MANAGER</span> V4.0</p>
            <a href="http://www.in2info.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={Logoo} className="w-[60px]" alt="in2infoLogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <img src={Image} className="w-full h-[460px] object-cover" alt="Footer" />
      </div>
    </div>
  )
}

export default Footer
