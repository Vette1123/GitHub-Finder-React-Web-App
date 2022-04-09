import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 text-white">
          <FaGithub className="text-6xl inline pr-2" />
          <Link
            to="/"
            className="text-xl font-bold text-neutral-content align-middle"
          >
            Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-l rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-l rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
