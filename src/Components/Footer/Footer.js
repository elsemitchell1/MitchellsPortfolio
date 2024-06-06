import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import emailjs from 'emailjs-com';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been forwarded to me. I will get back to you as soon as possible! \n\nThanks, \nMitch");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer className="max-w-6xl p-8 mx-auto text-white md:w-5/6">
      <nav className="container flex justify-start mx-auto mt-10 mb-2">
        <ul className="flex space-x-4 md:space-x-10">
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Work"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Work
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Resume"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr className="border-0 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] p-px" />
      <div className="container flex flex-col justify-center mx-auto my-8">
        <h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-2 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name="user_name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="user_email"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase" htmlFor="message">
                Message
              </label>
              <textarea
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                rows="3"
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full bg-gradient-to-r from-[#FFA500] to-[#FFFF00] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <hr className="border-0 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] p-px" />

      <div className="container flex justify-center mx-auto my-4">
        <p className="text-[10px] sm:text-sm">
          &copy; 2024 Mitchell Else.
        </p>
      </div>
    </footer>
  );
};

export default Footer;