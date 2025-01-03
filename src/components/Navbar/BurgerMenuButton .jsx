const BurgerMenuButton = ({  isOpen, onClick }) => {
  return (
    <div className="flex items-center z-50">
      <button
        onClick={onClick}
        className="relative hidden h-5 w-[30px] sm:block"
      >
        <span
          className={`absolute left-0 top-0 h-[1px] w-full bg-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        ></span>
        <span
          className={`absolute left-0 top-1/2 h-[1px] w-full bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`absolute bottom-0 left-0 h-[1px] w-full bg-white transition-transform ${isOpen ? "-translate-y-[11px] -rotate-45" : ""}`}
        ></span>
      </button>
    </div>
  );
};

export default BurgerMenuButton;
