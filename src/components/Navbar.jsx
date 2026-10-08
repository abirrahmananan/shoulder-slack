import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="h-20 flex items-center justify-between">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shoulder Slack"
              className="w-12 h-12 object-contain"
            />

            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Shoulder <samp className=" sm:text-2xl font-bold text-red-600"> Slack </samp>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/wallet"
              className="text-gray-700 font-medium hover:text-black transition"
            >
              Wallet
            </Link>

            <Link
              to="/tshirt"
              className="text-gray-700 font-medium hover:text-black transition"
            >
              T-Shirt
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-4 pt-3 border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Home
              </Link>

              <Link
                to="/wallet"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Wallet
              </Link>

              <Link
                to="/tshirt"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                T-Shirt
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;