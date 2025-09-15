import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900 px-6 py-3 sticky top-0 border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">QUIZZY</div>

        {/* Menu */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="#" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400">
              Services
              <span className="inline-block transform group-hover:rotate-180 transition duration-200">
                ▼
              </span>
            </button>

            {/* Dropdown menu */}
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="#">Coming Soon</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="#">Coming Soon</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="#">Coming Soon</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Login/Signup */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/login" className="hover:text-yellow-400">
              Log in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-3xl font-medium hover:bg-purple-700 transition"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
