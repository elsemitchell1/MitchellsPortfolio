import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };
  return (
    <nav className='text-white sticky top-0 z-[1000] bg-black shadow-md'>
        <div className='container flex items-center justify-between max-w-6xl px-12 py-2 mx-auto'>
            <div className='flex items-center h-20'>
                <Link to='/' className='flex items-center text-4xl text-gradient'>
                    <FaHome className='text-[#ffa500]' />
                    <h1 className='font-bold ml-6'>Mitchell Else</h1>
                </Link>
            </div>
            <div id="mobileMenu"
            className={`${mobileMenuVisible ? "bg-black" : "hidden"} 
            z-50 absolute top-20 left-0 right-0 text-center lg:block lg:relative lg:top-0 lg:shadow-none`}>
            <ul className="text-lg font-semibold lg:flex lg:space-x-8">
              <li className="mb-5 lg:mb-0">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gradient font-bold border-b"
                      : "text-gradient-hover"
                  }
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-5 lg:mb-0">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gradient font-bold border-b"
                      : "text-gradient-hover"
                  }
                  onClick={toggleMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="mb-5 lg:mb-0">
                <NavLink
                  to="/Skills"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gradient font-bold border-b"
                      : "text-gradient-hover"
                  }
                  onClick={toggleMobileMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className="mb-5 lg:mb-0">
                <NavLink
                  to="/Resume"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gradient font-bold border-b"
                      : "text-gradient-hover"
                  }
                  onClick={toggleMobileMenu}
                >
                  Resume
                </NavLink>
              </li>
              <li className="mb-5 lg:mb-0">
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gradient font-bold border-b"
                      : "text-gradient-hover"
                  }
                  onClick={toggleMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='flex items-center lg:hidden'>
                <button
                id="mobileMenuToggle"
                className="ml-4 lg:hidden"
                onClick={toggleMobileMenu}
                >
                <div className="space-y-2">
                    <span className="block w-6 h-px bg-white"></span>
                    <span className="block w-6 h-px bg-white"></span>
                    <span className="block w-6 h-px bg-white"></span>
                </div>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;