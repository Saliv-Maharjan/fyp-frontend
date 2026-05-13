const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-[80px] py-[20px]">
      {/* Logo */}
      <div className="font-bold">MN HARDWARES</div>

      {/* Links */}
      <div>
        <ul className="flex gap-[80px]">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="bg-white text-black px-[60px] py-[12px] rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
