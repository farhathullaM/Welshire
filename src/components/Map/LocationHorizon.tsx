export const LocationHorizon = () => {
  return (
    <div className="w-full h-80  bg-[#0b2d44] p-10 max-sm:p-4 max-md:p-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1827979284008!2d76.30026807574654!3d10.001754473003063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1129f57a19%3A0xf1bae65b52f0cac5!2sWelshire%20Overseas%20Education!5e0!3m2!1sen!2sin!4v1744525991110!5m2!1sen!2sin"
        width="600"
        className="w-full h-full"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
