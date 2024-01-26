import React from "react";
import MainContent from "./components/main/MainContent";
import Navbar from "./components/main/Navbar";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-[#fafafa]"
      } max-w-[1400px] mx-auto flex`}
    >
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
