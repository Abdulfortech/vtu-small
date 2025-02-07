import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg text-gray-900">
      <ul>
        <li className="p-2 hover:bg-gray-200">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="p-2 hover:bg-gray-200">
          <Link to="/settings">Settings</Link>
        </li>
        <li className="p-2 hover:bg-gray-200">
          <button className="w-full text-left">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;