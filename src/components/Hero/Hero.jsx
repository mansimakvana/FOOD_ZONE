import React from "react";
import { Typewriter } from "react-simple-typewriter";
import thali from "../../assets/thali.png";
import bhindi from "../../assets/bhindi.png";
import momo from "../../assets/momo.png";
import Vector from "../../assets/vector3.png";
import { useState } from "react";

const ImageList = [
  {
    id: 1,
    img: thali,
  },
  {
    id: 2,
    img: bhindi,
  },
  {
    id: 3,
    img: momo,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(thali);
  const [typingDone, setTypingDone] = useState(false);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#14213d] dark:text-gray-100">
                {!typingDone && ( // Render Typewriter only while typing
                  <Typewriter
                    words={["Welcome to Foodie's Zone"]}
                    loop={1} // Ensures typing happens only once
                    cursor={true} // Display the cursor while typing
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={70}
                    onDone={() => setTypingDone(true)} // Triggered when typing is done
                  />
                )}
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Foodie
                </span>{" "}
                Zone */}
              </h1>
              <i className="text-xl text-gray-800 dark:text-gray-400">
              Here, every bite tells a story of care, compassion, and a deep connection to the planet, because good food is about more than just taste.<br/>Healthy for you, kind to the planet.
              </i>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? thali
                          : item.id === 2
                          ? bhindi
                          : momo
                      );
                    }}
                    alt="biryani img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
