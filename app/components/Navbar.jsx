<<<<<<< HEAD
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "About",    path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact",  path: "#contact" },
=======
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
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes menuItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-mobile-link {
          color: var(--text-muted);
          text-decoration: none;
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 16px;
          padding: 13px 20px;
          border-radius: 10px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
        }
        .nav-mobile-link:hover {
          color: var(--accent);
          background: var(--accent-dim);
          border-color: var(--border);
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(8, 13, 20, 0.95)"
            : "rgba(8, 13, 20, 0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(34, 211, 238, 0.15)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  minWidth: "36px",
                  background: "var(--accent)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "18px",
                  color: "#080d14",
                  boxShadow: "0 0 16px var(--accent-glow)",
                }}
              >
                M
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                }}
              >
                Muhammad Jan
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          {mounted && !isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: "15px",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--accent)";
                    e.target.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-muted)";
                    e.target.style.background = "transparent";
                  }}
                >
                  {link.title}
                </a>
              ))}
              <a
                href="mailto:mjan23925@gmail.com"
                className="btn-primary"
                style={{ padding: "9px 22px", fontSize: "14px", marginLeft: "8px" }}
              >
                Hire Me
              </a>
            </div>
          )}

          {/* Animated Hamburger Button */}
          {mounted && isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              style={{
                background: isMenuOpen ? "var(--accent-dim)" : "var(--bg-card)",
                border: `1px solid ${isMenuOpen ? "rgba(34,211,238,0.35)" : "var(--border)"}`,
                borderRadius: "10px",
                padding: "0",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "42px",
                height: "42px",
                transition: "all 0.3s ease",
              }}
            >
              <span
                className="hamburger-line"
                style={{
                  transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                  background: isMenuOpen ? "var(--accent)" : "var(--text-primary)",
                }}
              />
              <span
                className="hamburger-line"
                style={{
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? "scaleX(0)" : "none",
                  background: isMenuOpen ? "var(--accent)" : "var(--text-primary)",
                }}
              />
              <span
                className="hamburger-line"
                style={{
                  transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                  background: isMenuOpen ? "var(--accent)" : "var(--text-primary)",
                }}
              />
            </button>
          )}
        </div>

        {/* Mobile Menu Panel */}
        {mounted && isMobile && isMenuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(34,211,238,0.1)",
              background: "rgba(8, 13, 20, 0.98)",
              backdropFilter: "blur(24px)",
              padding: "12px 16px 28px",
              animation: "menuSlideDown 0.25s ease forwards",
            }}
          >
            {/* Section label */}
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontFamily: "var(--font-heading)",
                padding: "8px 20px 10px",
                opacity: 0.6,
              }}
            >
              Navigation
            </p>

            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-mobile-link"
                  style={{
                    animation: `menuItemIn 0.3s ease ${0.05 * index}s forwards`,
                    opacity: 0,
                  }}
                >
                  <span>{link.title}</span>
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ opacity: 0.35, flexShrink: 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, var(--border), transparent)",
                margin: "16px 4px",
              }}
            />

            {/* Hire Me CTA */}
            <div
              style={{
                padding: "0 4px",
                animation: "menuItemIn 0.3s ease 0.18s forwards",
                opacity: 0,
              }}
            >
              <a
                href="mailto:mjan23925@gmail.com"
                className="btn-primary"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "15px",
                  padding: "13px 24px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                Hire Me
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
=======

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
              className="block text-sm lg:text-xl hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 my-2 px-6 lg:my-0"
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
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
