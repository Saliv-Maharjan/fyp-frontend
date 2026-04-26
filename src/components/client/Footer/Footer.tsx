import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            <span className="text-blue-600">MN</span> HARDWARES
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Quality products for your home and projects. Built with trust and
            durability.
          </p>
        </div>

        {/* Links */}
        <div className="md:mx-auto">
          <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-3 text-gray-500">
            {["Home", "Products", "Colors", "Painters", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Social */}
        <div className="md:text-right">
          <h3 className="font-semibold mb-4 text-gray-800">Follow Us</h3>
          <div className="flex md:justify-end gap-4 text-gray-500">
            <a className="hover:text-blue-600 transition transform hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a className="hover:text-blue-600 transition transform hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a className="hover:text-blue-600 transition transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} MN HARDWARES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
