import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaSignOutAlt } from "react-icons/fa";
import styles from './Sidebar.module.scss';

const Sidebar = ({isOpen, toggleSidebar}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWidth(window.innerWidth);

            if (window.innerWidth === 1000) {
                toggleSidebar;
            } else if (window.innerWidth < 1000) {
                toggleSidebar;
            }
        });

        return () => {
            window.removeEventListener('resize', () => {
                console.log('event');
            });
        };
    }, []);

  return (
    <>
      {/* Sidebar Overlay for Mobile */}
      

      {/* Sidebar */}
      {(isOpen || width >= 1000) && (
        <div
        // className={styles.sidebar}
            className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 w-64`}
        >
            <div className="p-5 flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
            </div>

            <nav className="p-5 space-y-4">
            <Link
                to="/"
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition"
            >
                <FaHome />
                Dashboard
            </Link>
            <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition">
                <FaSignOutAlt />
                Logout
            </button>
            </nav>
        </div>

      )};
      {/* Sidebar Toggle Button for Small Screens */}
      <button
        className="absolute top-4 left-4 lg:hidden text-gray-900 bg-white p-2 rounded shadow-md"
        onClick={toggleSidebar}
      >
        <FaBars className="text-2xl" />
      </button>
    </>
  );
};

export default Sidebar;
