
import logo from "../assets/logo-dark.webp";
const Navbar = () => {
  return (
    <div className="px-8 flex justify-start p-4 border-b border-gray-200 shadow-sm">
      <img src={logo} alt="logo" className="w-40 h-16 object-contain" />
    </div>
  );
};

export default Navbar;
