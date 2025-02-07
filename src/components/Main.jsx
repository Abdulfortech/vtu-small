import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styles from './Main.module.scss';

function Main({toggleSidebar}) {
  return (
    <div className={`flex-1 flex-col ${toggleSidebar ? 'w-full' : 'ml-64'} `} >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="mt-16 mb-10 p-6 bg-gray-100 overflow-auto">
            <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default Main