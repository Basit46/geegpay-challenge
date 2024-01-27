import React, { useState } from "react";
import MainContent from "./components/main/MainContent";
import MobileNavbar from "./components/main/MobileNavbar";
import Navbar from "./components/main/Navbar";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${isDarkMode ? "bg-black text-white" : "bg-[#fafafa]"} ${
        isOpen && "h-screen overflow-hidden xmd:overflow-auto xmd:h-fit"
      } max-w-[1400px] mx-auto flex`}
    >
      <Navbar />
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
