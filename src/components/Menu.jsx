const Menu = ({ isOpen }) => {
  return (
    <div
      id="menu"
      className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center`}
    >
      <ul className="gap-3 bg-black/20 px-10 pt-4 text-base text-gray-200 md:flex md:justify-between md:pt-0">
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#project"
          >
            Project
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#service"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#skill"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
