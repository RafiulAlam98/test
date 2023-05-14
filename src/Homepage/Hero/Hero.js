import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import food from "../../assets/NicePng_plate-of-food-png_546030 1.png";
import heroimg from "../../assets/image 1.png";

const searchbtn = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const Hero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={food} alt="" />
          <img src={heroimg} className="rounded-lg " alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold font-[Merienda] text-primary">
            Order food online <br /> from your favourite <br /> local
            restaurents.
          </h1>
          <p className="py-6 font-[Poppins]">
            Freshly made food delivered to your door
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter your location"
              className="input w-1/2 h-1/2  rounded-full"
            />
            <button
              onClick={handleSearch}
              className="rounded-full text-white w-1/3  bg-primary   hover:bg-primary -ml-4 hover:text-white cursor-pointer"
            >
              {searchbtn}
              <span> Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
