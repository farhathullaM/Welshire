import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import study_lottie from "@/assets/study-animation.json";

export const Hero = () => {
  return (
    <div className="flex justify-around max-md:flex-col-reverse max-md:justify-center items-center ">
      <div className="flex flex-col gap-10 w-1/2 max-md:w-11/12 max-md:my-10 max-sm:my-5 my-20">
        <h1 className="text-7xl font-bold w-full  max-md:text-5xl max-sm:text-3xl">
          Your Gateway to Global
          <br /> Education
        </h1>
        <p className=" w-full text-xl max-md:text-base">
          Empowering students to achieve their study aborad dreams with expert
          guidance
        </p>
        <div className="max-sm:flex-col w-full flex items-center  gap-3">
          <Link
            to="/contact"
            className="font-semibold text-white rounded-sm p-2 bg-[#3b8eca]"
          >
            Book a Free Consultation
          </Link>
          <Link
            to="/about"
            className="bg-white font-semibold rounded-sm border-2 border-[#3b8eca] p-2 text-[#3b8eca]"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div>
        <Lottie animationData={study_lottie} loop={true} />
      </div>
    </div>
  );
};
