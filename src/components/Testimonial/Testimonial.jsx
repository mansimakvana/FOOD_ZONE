import Slider from "react-slick";
import img1 from "../../assets/person1.png"
import img2 from "../../assets/person2.png"
import img3 from "../../assets/person3.png"
import img4 from "../../assets/person4.png"
import img5 from "../../assets/person5.png"

const testimonialData = [
  {
    id: 1,
    name: "Mansi Makvana",
    text: "The food was amazing! Everything was fresh, and the flavors were perfect. I’ll definitely come back again.",
    img: img3,
  },
  {
    id: 2,
    name: "Dhaval Lalani",
    text: "Fast service and tasty meals. Highly recommend the spicy noodles—they're just the right amount of heat!",
    img: img2,
  },
  {
    id: 3,
    name: "Chirag Makvana",
    text: "Great atmosphere and super friendly staff. The pizza was so cheesy and delicious!",
    img: img1,
  },
  {
    id: 4,
    name: "Dhyana Patel",
    text: "Best burgers in town! The portions were generous, and the prices were reasonable.",
    img: img4,
  },
  {
    id: 5,
    name: "Sejal Mardia",
    text: "Loved the desserts here! The chocolate cake was soft, rich, and melted in my mouth.",
    img: img5,
  },
];

const Testimonial = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-10 max-w-[1024px] mx-auto">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            {/* <h1 className="text-3xl font-bold">Testimonial</h1> */}
            <p className="text-lg text-gray-800 dark:text-gray-400 pt-4">
            Every review you leave is a chance for us to get better and serve you better.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1024px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6" key={data.id}>
                    <div 
                      className="flex flex-col justify-center items-center gap-4 text-center  shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto w-24 h-24 "
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm line-clamp-3">{data.text}</p>
                      <h1 className="text-sm font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
