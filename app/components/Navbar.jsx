"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "About",    path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact",  path: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const [mounted, setMounted]       = useState(false);

  /* ── passive scroll listener (unblocks browser scroll thread) ── */
  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
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
          transition: "background 0.3s ease, border-bottom 0.3s ease",
          background: scrolled ? "rgba(8, 13, 20, 0.95)" : "rgba(8, 13, 20, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
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

          {/* Desktop Links — CSS hover via .nav-desktop-link class */}
          {mounted && !isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {navLinks.map((link, index) => (
                <a key={index} href={link.path} className="nav-desktop-link">
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

          {/* Animated Hamburger */}
          {mounted && isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              style={{
                background: isMenuOpen ? "var(--accent-dim)" : "var(--bg-card)",
                border: `1px solid ${isMenuOpen ? "rgba(34,211,238,0.35)" : "var(--border)"}`,
                borderRadius: "10px",
                padding: 0,
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
              WebkitBackdropFilter: "blur(24px)",
              padding: "12px 16px 28px",
              animation: "menuSlideDown 0.25s ease forwards",
            }}
          >
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

            {/* Nav links — CSS hover via .nav-mobile-link class */}
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

            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, var(--border), transparent)",
                margin: "16px 4px",
              }}
            />

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