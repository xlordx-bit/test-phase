import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Why VoraSkill", href: "#why" },
  { label: "Trending Skills", href: "#trending" },
  { label: "Progress Tracker", href: "#progress" },
  { label: "Pricing Plans", href: "#pricing" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll for better UX
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full h-16
          bg-[#121221]/90 backdrop-blur-md
          text-white shadow-md
          z-50 flex items-center px-6
          transition-colors duration-300 ease-in-out
        "
        role="banner"
      >
        <div className="text-2xl font-bold cursor-pointer select-none">VoraSkill</div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex space-x-8 ml-auto"
          aria-label="Primary navigation"
        >
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-yellow-400 transition-colors"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <nav
          className="
            md:hidden fixed top-16 left-0 w-full
            bg-[#1b1b2f]/95 backdrop-blur-sm
            px-6 py-4 space-y-4 shadow-inner z-40
          "
          aria-label="Mobile navigation"
        >
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="block hover:text-yellow-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
