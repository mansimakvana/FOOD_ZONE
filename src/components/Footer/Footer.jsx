import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1024px] mx-auto items-center">
        <div className="grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Foodie Zone
            </h1>
            <p className="">
              123 New Streight Lane <br />
              Imagica Heights, CA 90210 <br />
              Gujrat, India
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ahmedabad, Gujrat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9825695399</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li
                    className="cursor-pointer hover:text-primary"
                  >
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-primary">About</li>
                  <li className="cursor-pointer hover:text-primary">Services</li>
                  <li className="cursor-pointer hover:text-primary">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Food & Menu
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary">Menu</li>
                  <li className="cursor-pointer hover:text-primary">Specials & Offers
                  </li>
                  <li className="cursor-pointer hover:text-primary">Seasonal Dishes
                  </li>
                  <li className="cursor-pointer hover:text-primary">Ordering Guide
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Customer Services
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary">Delivery Information
                  </li>
                  <li className="cursor-pointer hover:text-primary">Order Tracking
                  </li>
                  <li className="cursor-pointer hover:text-primary">Gift Cards
                  </li>
                  <li className="cursor-pointer hover:text-primary">Customer Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made by Mansi Patel
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
