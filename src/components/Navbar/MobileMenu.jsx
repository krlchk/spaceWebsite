import bgForMobileMenu from "../../assets/pexels-philippedonn-1257860.jpg";
const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`animate-mobileMenu fixed inset-0 z-40 flex h-full items-center justify-center transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      style={{
        backgroundImage: `url(${bgForMobileMenu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ul className="flex flex-col items-start gap-20">
        <li className="transition hover:scale-110">
          <a
            className="relative mx-5 text-3xl font-medium leading-5 text-white"
            href="#"
          >
            About
          </a>
        </li>
        <li className="transition hover:scale-110">
          <a
            className="relative mx-5 text-3xl font-medium leading-5 text-white"
            href="#"
          >
            Technology
          </a>
        </li>
        <li className="transition hover:scale-110">
          <a
            className="relative mx-5 text-3xl font-medium leading-5 text-white"
            href="#"
          >
            Galaxy
          </a>
        </li>
        <li className="transition hover:scale-110">
          <a
            className="relative mx-5 text-3xl font-medium leading-5 text-white"
            href="#"
          >
            Satelite
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
