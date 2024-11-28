import Img from "../../assets/Bhindi.png";
import Img2 from "../../assets/burger.png";
import Img3 from "../../assets/samosa.png";
import Img4 from "../../assets/Paneer-Masala.png";
import Img5 from "../../assets/pasta.png";
import Img6 from "../../assets/pizza.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Bhindi Masala",
    description:
      "Bhindi Masala is a popular North Indian recipe, often served with roti, paratha, or rice. It’s a staple in Indian households.",
  },
  {
    id: 2,
    img: Img2,
    name: "Burger",
    description:
      "Today, burgers are made with various types of meat and vegetarian/vegan options (like plant-based patties). Toppings can include anything from cheese and lettuce to fried eggs, avocado, or even pineapple.",
  },
  {
    id: 3,
    img: Img3,
    name: "Samosa",
    description:
      "In India, samosas are one of the most popular street foods, commonly found at food stalls and in restaurants.",
  },
  {
    id: 4,
    img: Img4,
    name: "Paneer Masala",
    description:
      "Paneer Masala is a popular Indian dish made with paneer (Indian cottage cheese) cooked in a rich, flavorful gravy made from a mix of tomatoes, onions, and a variety of aromatic spices.",
  },
  {
    id: 5,
    img: Img5,
    name: "Pasta",
    description:
      "Pasta is one of the most popular and versatile dishes worldwide, originating from Italy and enjoyed in various forms across different cultures.",
  },
  {
    id: 6,
    img: Img6,
    name: "Pizza",
    description:
      "Pizza is one of the most beloved and iconic dishes worldwide. Originating in Italy, it has become a global favorite with countless variations to suit different tastes and dietary preferences.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            {/* <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Tasty Foods
            </p> */}
            <h1 className="text-3xl font-bold text-primary">Our Tasty Foods</h1>
            <p className="text-lg text-gray-800 dark:text-gray-400 pt-4">
            Every dish we serve is a little piece of love, crafted to bring joy to your table.

            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-24 place-items-center m-4">

            {ServicesData.map((service) => (
              <div key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center  ">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-3 text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
