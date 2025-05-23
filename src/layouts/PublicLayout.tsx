import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Whatsapp } from "@/components/ui/whatsapp";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="bg-[#f4f7f9] ">
      <Header />
      <Outlet />
      <Whatsapp />
      <Footer />
    </div>
  );
}
