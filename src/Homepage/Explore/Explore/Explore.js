import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cycle from "../../../assets/too-much-orders-contacless-delivery-service-during-quarantine-man-delivers-food-during-isolation-wearing-helmet-face-mask-taking-food-bike-isolated-white-wall-safety-hurrying-up copy 1.png";

const arrow = <FontAwesomeIcon icon={faArrowRight} />;

const Explore = () => {
  const handleExplore = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={cycle} className=" rounded-lg " alt="" />
        <div>
          <h1 className="text-5xl font-bold font-[Merienda] text-primary">
            Explore your <br /> favourite city's food.
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloremque aut, mollitia possimus officia est laudantium excepturi
            reiciendis ea eveniet.
          </p>
          <button
            onClick={handleExplore}
            className="btn rounded-full w-1/3 bg-primary"
          >
            Explore <span className="ml-2"> {arrow}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
