import { Link } from "react-router-dom";

const Menu = ({ isOpen }) => {
  return (
    <div
      id="menu"
      className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center`}
    >
      <ul className="gap-3 bg-black/20 px-10 pt-4 text-base text-gray-200 md:flex md:justify-between md:pt-0">
        <li>
          <Link
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            to="#home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            to="#project"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            to="#service"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            to="#skill"
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            to="#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
