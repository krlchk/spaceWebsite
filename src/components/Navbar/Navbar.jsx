import Logo from "../../assets/logo.png";
import BurgerMenuButton from "./BurgerMenuButton ";

const Navbar = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <div className="fixed right-0 top-0 z-50 w-full bg-black/10 py-4 backdrop-blur-sm sm:py-4">
      <div className="container flex justify-center sm:gap-10">
        <div className="flex w-full justify-between sm:w-52 sm:justify-center sm:gap-10">
          <div className="flex items-center gap-4 text-2xl font-bold">
            <img className="h-auto w-14" src={Logo} alt="img" />
            <span className="text-white md:hidden">TCJ-SPACE</span>
          </div>

          <div className="flex px-5 text-white sm:hidden">
            <ul className="flex items-center gap-6 text-xl">
              <li className="transition hover:scale-110">
                <a href="#">About</a>
              </li>
              <li className="transition hover:scale-110">
                <a href="#">Technology</a>
              </li>
              <li className="transition hover:scale-110">
                <a href="#">Galaxy</a>
              </li>
              <li className="transition hover:scale-110">
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center text-lg text-white">
            <button className="rounded-2xl border px-6 py-2 font-semibold hover:bg-white hover:text-blue-950">
              Login
            </button>
          </div>
        </div>
        <BurgerMenuButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
