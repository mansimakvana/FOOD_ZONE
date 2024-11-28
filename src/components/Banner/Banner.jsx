import BiryaniImg from "../../assets/pavbhaji.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                  data-aos="zoom-out-right"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  className="text-2xl sm:text-4xl font-bold text-primary"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  
                >
                  We Deliver More Than Just Food – We Deliver Happiness!
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-6 text-justify">
                  We pride ourselves on offering a wide variety of delicious,
                  high-quality meals that cater to every taste and preference.
                  Whether you are craving traditional comfort food, exotic
                  flavors, or healthy options, we’ve got something for everyone.
                  <br />
                  <br />
                  Our convenient and fast food delivery service ensures that
                  your favorite dishes are delivered straight to your door, hot
                  and fresh, in no time. And the best part? We offer competitive
                  pricing with affordable options for every budget, so you can
                  enjoy a great meal without breaking the bank.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400 cursor-pointer" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400 cursor-pointer" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
