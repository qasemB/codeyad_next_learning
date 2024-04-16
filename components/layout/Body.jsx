'use client'
import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { MainContext } from '@/context/mainContext';

const Body = ({ children }) => {
    const {darkMode} = useContext(MainContext)
    return (
        <body dir="rtl" className={darkMode}>
            <section
                className={"bg-blue-100 dark:bg-gray-400 w-full h-screen overflow-auto pr-sidebar_width pt-navbar_height"}
            >
                <div className={"w-full p-4"}>
                    {children}
                </div>
            </section>
            <Sidebar />
            <Navbar />
        </body>
    );
};

export default Body;