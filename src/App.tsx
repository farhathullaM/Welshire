import PublicLayout from "@/layouts/PublicLayout";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { About } from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
