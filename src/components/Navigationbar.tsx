import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from "../assets/Logo.png";
import { motion } from "framer-motion";
import rightArrowImg from "../assets/rightArrow.svg";
import {
  LayoutDashboard,
  CircleUser,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
  LogOut,
  Grid2X2 as Grid2X2Icon,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Chat",
    icon: CircleUser,
    path: "/chat",
  },
  {
    name: "Table",
    icon: Grid2X2Icon,
    path: "/activity", // Update path to match App.tsx
  },
  {
    name: "Analytics",
    icon: BarChart2,
    path: "/analytics",
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
    path: "/transactions",
  },
  {
    name: "Help & Support",
    icon: HelpCircle,
    path: "/help-support",
  },
  {
    name: "Log Out",
    icon: LogOut,
    path: "/logout",
  },
];

const variants = {
  expanded: { width: "17%" },
  nonExpanded: { width: "10%" }
};

function Navigationbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  // Determine active navigation link based on current path
  const activeNavIndex = navLinks.findIndex(item => item.path === location.pathname);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className="px-12 py-14 flex flex-col border-r-1 h-screen bg-slate-100 relative"
    >
      <div className="logo-div flex items-center space-x-3">
        <img src={logoImg} alt="Hacker Logo" className="w-8 h-8" />
        <span className={isExpanded ? "font-bold text-2xl" : "hidden"}>Marketing</span>
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-6 h-6 bg-red-400 rounded-full absolute -right-[10px] top-12 flex justify-center items-center cursor-pointer"
      >
        <img src={rightArrowImg} alt="right arrow" className={`w-[11px] ${isExpanded ? '' : 'rotate-180'}`} />
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <Link to={item.path} key={index} className="no-underline text-black">
            <div
              className={
                'flex space-x-3 items-center cursor-pointer p-2 rounded ' +
                (activeNavIndex === index ? 'bg-slate-500 text-white font-semibold' : 'text-black')
              }
            >
              <IconComponent icon={item.icon} />
              <span className={isExpanded ? "text-sm block" : "hidden"}>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function IconComponent({ icon }) {
  return <span className="text-3xl">{React.createElement(icon)}</span>;
}

export default Navigationbar;
