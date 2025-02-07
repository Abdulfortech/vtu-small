// import { useState } from "react";
// import Sidebar from "../components/SideBar";
// import Dashboard from "../pages/Dashboard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   return (
//     <div className="flex">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div 
//         // className="flex flex-col w-full ml-64"
//         className={`flex-1 bg-gray-100 transition-all duration-300 p-4 pt-16`}
//         >
//         <Navbar toggleSidebar={toggleSidebar} />
//         <main className=" mt-16 mb-10 p-6 bg-gray-100 overflow-auto">
//           <Navbar toggleSidebar={toggleSidebar} />
//           <Dashboard />
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
import { useState } from "react";
import Sidebar from "../components/SideBar";
import Main from "../components/Main";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex min-h-screen ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main toggleSidebar={toggleSidebar}/>
    </div>
  );
};

export default MainLayout;
