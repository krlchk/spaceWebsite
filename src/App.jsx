import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import MobileMenu from "./components/Navbar/MobileMenu";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="z[-1] fixed right-0 top-0 h-[700px] w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
};

export default App;
