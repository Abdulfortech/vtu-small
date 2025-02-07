import { useState } from "react";
import { FaBars,FaUserCircle, FaChevronDown } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
        {/* Sidebar Toggle Button (Mobile) */}
      <button className="text-2xl md:hidden" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h2 className="text-lg font-bold">Dashboard</h2>

      {/* User Dropdown */}
      <div className="relative">
        <button
          className="flex items-center space-x-2 bg-white p-2 rounded-md shadow"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaUserCircle className="text-2xl" />
          <FaChevronDown />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
              Profile
            </button>
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
