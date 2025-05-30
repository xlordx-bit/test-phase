import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Settings, LogOut, Menu, X } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <Home size={20} /> },
  { label: "My Courses", icon: <BookOpen size={20} /> },
  { label: "Settings", icon: <Settings size={20} /> },
  { label: "Logout", icon: <LogOut size={20} /> },
];

export default function Sidebar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on wider screens when resizing from mobile
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger Button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-40 min-h-screen w-64 bg-gradient-to-b from-[#1b1b2f] to-[#121226] text-white py-10 px-6 shadow-2xl flex flex-col"
            aria-label="Sidebar navigation"
          >
            <h1 className="text-3xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg select-none cursor-default">
              VoraSkill
            </h1>
            <nav className="flex flex-col gap-5 flex-grow">
              {navItems.map(({ label, icon }) => (
                <button
                  key={label}
                  className="flex items-center gap-4 px-5 py-3 rounded-xl hover:bg-[#292a44] transition-colors text-lg font-medium select-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                  onClick={label === "Logout" ? onLogout : undefined}
                  aria-label={label}
                  type="button"
                >
                  <span className="text-pink-400">{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile when sidebar is open */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 768 && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-30"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
