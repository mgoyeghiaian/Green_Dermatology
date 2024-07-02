import Image from '/src/assets/footer2.jpg'
import Logo from '/src/assets/Logooooo.png'
import Logoo from '/src/assets/in2infoLogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-footer-backgroud w-full h-auto  flex flex-col md:flex-row px-8 text-primary  md:py-0">
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-between p-2 pt-4">
        <div className="flex flex-col gap-6 md:gap-9">
          <img src={Logo} className="h-[60px] self-start" alt="Logo" />
          <div>
            <h5 className="text-[20px] font-bold mb-2">About us</h5>
            <p className="text-[14px] leading-relaxed">Address Street Number 10981</p>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-9 md:gap-16">
            <div className='flex flex-col justify-center'>
              <h5 className="text-[20px] font-bold mb-2">Services</h5>
              <Link to="/services/1" className="text-[14px] text-primary hover:text-tertiary  leading-relaxed hover:underline">Acne</Link>
              <Link to="/services/2" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Skin Cancer</Link>
              <Link to="/services/3" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Mosh Surgery</Link>
              <Link to="/services/4" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Eczema</Link>
              <Link to="/services/5" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Rashes</Link>
              <Link to="/services/6" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Excisons</Link>
              <Link to="/services/7" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Warts</Link>
              <Link to="/services/8" className="text-[14px] text-primary hover:text-tertiary leading-relaxed hover:underline">Psoriasis</Link>
            </div>
            <div className='pb-5'>
              <h5 className="text-[20px] font-bold mb-2">Physicians</h5>
              <Link to="/physiciansdetails/1" className="text-[14px] text-primary hover:text-tertiary  leading-relaxed hover:underline">Paige Venables</Link>

            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-end items-center lg:gap-2">
          <p className="text-center text-[10px] lg:text-[12px] mb-2 lg:mb-0">©2024 <span className="font-bold">GREEN</span> DERMATOLOGY</p>
          <div className="flex justify-center items-center gap-1">
            <p className="text-center text-[10px] lg:text-[12px]">SITE<span className="font-bold">MANAGER</span> V4.0</p>
            <a href="http://www.in2info.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={Logoo} className="w-[75px]" alt="in2infoLogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <img src={Image} className="w-full h-[470px] object-cover" alt="Footer" />
      </div>
    </div>
  )
}

export default Footer
