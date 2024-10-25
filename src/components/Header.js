import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

function Header() {
  return (
    <header className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Al Kalaam</h1>
          <Clock />
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/prayer-times" className="hover:text-yellow-400">
                Prayer Times
              </Link>
            </li>
            <li>
              <Link to="/activities" className="hover:text-yellow-400">
                Activities
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-yellow-400">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
