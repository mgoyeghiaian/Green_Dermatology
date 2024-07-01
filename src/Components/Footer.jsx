import Image from '/src/assets/footer2.jpg'
import Logo from '/src/assets/Logooooo.png'
import Logoo from '/src/assets/in2infoLogo.png'

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
            <div>
              <h5 className="text-[20px] font-bold mb-2">Services</h5>
              {Array.from({ length: 8 }, (_, i) => (
                <p key={i} className="text-[14px] leading-relaxed">Service {i + 1}</p>
              ))}
            </div>
            <div>
              <h5 className="text-[20px] font-bold mb-2">Physicians</h5>
              {Array.from({ length: 3 }, (_, i) => (
                <p key={i} className="text-[14px] leading-relaxed">Physician {i + 1}</p>
              ))}
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
