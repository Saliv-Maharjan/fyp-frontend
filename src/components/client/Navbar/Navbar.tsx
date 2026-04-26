import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const navItems = ["Home", "Products", "Colors", "Painters", "Contact"];
  const navIcons = [
    { id: "Cart", icon: <CiShoppingCart size={24} /> },
    { id: "User", icon: <CiUser size={24} /> },
  ];

  const [activeLink, setActiveLink] = useState("Home");
  const [activeIcon, setActiveIcon] = useState("");

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-center ">
        <div className="flex gap-2 text-xl font-bold">
          <span className="text-blue-600">MN</span>HARDWARES
        </div>
        <div>
          <ul className="flex gap-8 font-semibold">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveLink(item)}
                className={`cursor-pointer ${
                  activeLink === item
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex gap-6 font-semibold">
            {navIcons.map((icons) => (
              <li
                key={icons.id}
                onClick={() => setActiveIcon(icons.id)}
                className={`cursor-pointer ${
                  activeIcon === icons.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {icons.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
