import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-2 md:p-4 text-white flex justify-between sticky top-0 shadow-md">
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-xl md:text-3xl font-bold cursor-pointer mt-1 md:mt-0">
            <span className="bg-white text-blue-500 p-2 rounded-md mr-1 md:mr-2">
              P
            </span>
            ortfolio
          </h1>
        </div>
      </Link>
      <div
        className={`lg:flex  ${
          isMenuOpen ? "flex items-center justify-center mt-10 mr-16" : "hidden"
        } flex-col lg:flex-row`}
      >
        {navLinks.map((link, index) => (
          <li key={index} className="list-none">
            <a
              href={link.path}
              className="block text-sm lg:text-xl hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 my-2 lg:my-0"
            >
              {link.title}
            </a>
          </li>
        ))}
      </div>
      <div className="lg:hidden sticky">
        <button
          className="p-1 border-2 border-gray-200 border-solid rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:border-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 hover:bg-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 hover:bg-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
