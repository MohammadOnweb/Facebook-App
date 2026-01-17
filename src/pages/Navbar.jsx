import React from "react";
import { FaHome, FaUserFriends, FaBell, FaFacebookMessenger, FaStore, FaGamepad } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-2 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo2.png" alt="Logo" className="w-10 h-10"/>
        <input
          type="text"
          placeholder="what is on your mind?"
          className="hidden sm:block px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Center: Navigation Icons */}
      <div className="flex space-x-6">
        <button className="flex flex-col items-center justify-center text-black hover:text-blue-600">
          <FaHome size={24} />
        </button>
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
          <FaUserFriends size={24} />
        </button>
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
          <FaStore size={24} />
        </button>
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
          <FaGamepad size={24} />
        </button>
      </div>

      {/* Right: User Icons */}
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaFacebookMessenger size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaBell size={20} />
        </button>
        <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200">
          <img
            src="/logo2.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:block font-medium">Mohammad</span>
        </button>
      </div>
    </nav>
  );
}
