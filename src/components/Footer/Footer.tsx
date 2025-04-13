import phone from "@/assets/call.svg";
import location from "@/assets/location.svg";
import mail from "@/assets/mail-yellow.svg";
import logo from "@/assets/welshire_logo.png";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import x from "@/assets/x.svg";
import { Link } from "react-router-dom";
import { navList } from "@/data/navList";
import { ConnectInfo } from "./ConnectInfo";

export const Footer = () => {
  return (
    <footer className="bg-[#0b2d44] text-white pt-4 justify-center flex flex-col items-center max-sm:pt-0 z-10 max-sm:mt-5 mt-10">
      <div className="flex justify-around max-sm:justify-between w-11/12 border-b-2  border-gray-600 p-2 max-sm:w-full ">
        <ConnectInfo
          img={location}
          heading={"Find Us"}
          info={
            "Welshire Overseas Education, 2nd Floor, Arackal Tower MetroPillar, no:539, S Janatha Rd, Palarivattom, Kochi, Kerala 682025"
          }
        />
        <ConnectInfo img={phone} heading={"Call Us"} info={"+918590136140"} />
        <ConnectInfo
          img={mail}
          heading={"Email Us"}
          info={"info@welshire.in"}
        />
      </div>

      <div className="max-sm:justify-between flex justify-around w-full items-start p-2">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/"
          className="flex flex-col gap-1 pt-5  justify-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Horizon logo"
            className="w-40 select-none max-sm:w-24"
          />
          <p className="text-xs font-light ">
            Your Pathway to Success,
            <br /> Anytime, Anywhere
          </p>
        </Link>

        <div className="flex flex-col gap-0">
          {navList.map((item) => (
            <Link
              onClick={() => window.scrollTo(0, 0)}
              key={item.id}
              to={item.link}
              className="underline hover:text-amber-500 hover:font-medium max-sm:text-sm transform duration-200 hover:scale-105 "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <p className="font-semibold">Follow Us</p>
          <div className="flex gap-3 max-sm:flex-wrap">
            <img
              src={facebook}
              alt="facebook"
              className="w-9 cursor-pointer transform max-sm:w-8 ease-in-out duration-200 hover:scale-110"
            />
            <img
              src={instagram}
              alt="instagram"
              className="w-9 cursor-pointer max-sm:w-8 transform ease-in-out duration-200 hover:scale-110"
            />
            <img
              src={x}
              alt="x"
              className="w-8 cursor-pointer max-sm:w-7 transform ease-in-out duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0f476b] p-2 max-sm:p-1">
        <p className="text-xs text-center ">
          Copyright © Welshire 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
