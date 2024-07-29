import { Mail, Phone, Menu, Close } from "@mui/icons-material";
import Logo from '/src/assets/Logooooo.png';
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
      closeMenu();
    }, 100);
  };

  return (
    <div className="flex flex-col bg-bg-main shadow-sm  ">
      <div className="lg:flex justify-end items-center gap-5 p-2 px-10 text-xs hidden">
        <div className="flex gap-2 justify-center items-center text-primary">
          <Mail sx={{ fontSize: 18 }} className="text-tertiary" />
          <a href="mailto: info@greendermatology.net" className="hover:text-tertiary underline-animation transition duration-300">
            info@greendermatology.net
          </a>
        </div>
        <div className="flex gap-2 justify-center items-center text-primary">
          <Phone sx={{ fontSize: 18 }} className="text-tertiary" />
          <a href="tel:+13024595010" className="hover:text-tertiary underline-animation transition duration-300">
            +1 (302) 459-5010
          </a>
        </div>
      </div>
      <div className="flex lg:justify-center items-center  lg:gap-72 justify-between p-4 lg:px-10">
        <div>
          <Link to="/">
            <img src={Logo} className=" h-16 lg:h-20" alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center  gap-14 text-gray-800 font-medium ">
          <Link to="/" className="hover:text-secondary-green underline-animation transition  duration-300">Home</Link>
          <a onClick={() => handleScrollToSection('aboutus')} className="cursor-pointer hover:text-secondary-green   underline-animation transition duration-300">About us</a>
          <a onClick={() => handleScrollToSection('services')} className="hover:text-secondary-green  cursor-pointer underline-animation transition duration-300">Services</a>
          <Link to="/physicians" className="hover:text-secondary-green underline-animation transition   duration-300">Providers</Link>
        </div>
        <div className="hidden lg:flex">
          <a onClick={() => handleScrollToSection('getintouch')} className="cursor-pointer">
            <button className="bg-tertiary text-secondary  py-2 px-4 rounded-md hover:bg-secondary-green  transition duration-300">
              Make Appointment
            </button>
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <Close onClick={toggleMenu} style={{ fontSize: 30, color: 'green', zIndex: "500" }} />
          ) : (
            <Menu onClick={toggleMenu} style={{ fontSize: 30, color: 'green', zIndex: "500" }} />
          )}
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-bg-main transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 p-5">

          <div className="flex flex-col items-center space-y-6">
            <Link to="/" className="text-2xl font-semibold text-gray-800 hover:text-tertiary underline-animation transition duration-300" onClick={closeMenu}>Home</Link>
            <a onClick={() => handleScrollToSection('aboutus')} className="text-2xl font-semibold text-gray-800 cursor-pointer hover:text-tertiary underline-animation transition duration-300">About us</a>
            <a onClick={() => handleScrollToSection('services')} className="text-2xl font-semibold text-gray-800 hover:text-tertiary underline-animation transition duration-300" >Services</a>
            <Link to="/physicians" className="text-2xl font-semibold text-gray-800 hover:text-tertiary underline-animation transition duration-300" onClick={closeMenu}>Providers</Link>
            <a onClick={() => handleScrollToSection('getintouch')} className="cursor-pointer">
              <button className="bg-tertiary text-white py-2 px-6 rounded-md hover:bg-secondary-green transition duration-300 text-xl">
                Make Appointment
              </button>
            </a>
          </div>
          <div className="flex justify-center flex-col items-center gap-5 p-2 px-10 text-sm text-primary mt-8">
            <div className="flex gap-2 justify-center items-center">
              <Mail sx={{ fontSize: 18 }} className="text-tertiary" />
              <a href="mailto: info@greendermatology.net" className="hover:text-tertiary transition duration-300">
                info@greendermatology.net
              </a>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Phone sx={{ fontSize: 18 }} className="text-tertiary" />
              <a href="tel:+13024595010" className="hover:text-tertiary transition duration-300">
                +1 (302) 459-5010
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
