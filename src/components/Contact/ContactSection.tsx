import { ContactForm } from "./ContactForm";
import phone from "@/assets/phone_blue.svg";
import mail from "@/assets/mail.svg";
import { Info } from "../ui/Info";

export const ContactSection = () => {
  return (
    <div
      className="flex flex-col items-center mx-10 max-md:mx-5
    max-sm:mx-2 gap-5 pb-5"
    >
      <h1 className="text-4xl w-full text-center font-bold py-10 max-md:py-5 max-sm:py-3">
        Contact Us
      </h1>

      <div className="flex gap-20 max-md:gap-5 w-full justify-between py-5 max-sm:flex-col max-md:justify-center max-md:w-11/12">
        <div className="flex flex-col justify-between p-3 rounded-md border border-gray-300 gap-20 w-1/2 max-md:w-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <p className="text-gray-600">Fill out the form to contact us</p>
            <p className="text-gray-600">
              Alternatively you can also contact us directly via telephone or
              email
            </p>
          </div>
          <div className="flex flex-col gap-1 max-md:w-full">
            <Info img={phone} name={"Telephone"} info={"+918590136140"} />
            <Info img={mail} name={"Email"} info={"info@welshire.in"} />
          </div>
        </div>
        <div className="w-1/2 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
