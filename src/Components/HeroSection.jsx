import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-[#121221]">
      {/* Fade-in overlay for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 pointer-events-none"
      />

      {/* Animated Gradient Background blobs */}
      <div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full blur-3xl animate-gradient-blob"
        style={{
          background: "radial-gradient(circle at 30% 30%, #a855f7, #7e22ce 70%)",
          filter: "drop-shadow(0 0 15px #a855f7)",
          animationTimingFunction: "ease-in-out",
          animationDuration: "8s",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[300px] h-[300px] rounded-full blur-3xl animate-gradient-blob"
        style={{
          background: "radial-gradient(circle at 70% 70%, #ec4899, #9d174d 70%)",
          filter: "drop-shadow(0 0 15px #ec4899)",
          animationTimingFunction: "ease-in-out",
          animationDuration: "10s",
          animationIterationCount: "infinite",
          animationDirection: "alternate-reverse",
          opacity: 0.4,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-pink-400 rounded-full opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transformOrigin: "center",
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 5,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="z-10 max-w-3xl px-6 md:px-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-10 shadow-xl"
        style={{ willChange: "transform" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          Master Bite-Sized Skills <br />
          in Just{" "}
          <span className="relative text-pink-400 font-black inline-block">
            5 Minutes
            <span className="absolute left-0 bottom-0 w-full h-1 bg-pink-400 rounded animate-shimmer" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 tracking-wide">
          VoraSkill delivers micro-courses designed for speed, depth, and real-world value.
        </p>

        <MotionLink
          to="/get-started"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ec4899" }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.9)] transition-all inline-flex items-center gap-4 cursor-pointer ring-2 ring-transparent hover:ring-pink-400"
          aria-label="Get Started"
        >
          <Rocket size={28} />
          Start Learning
          <span className="absolute inset-0 rounded-full ring-1 ring-pink-400 opacity-0 hover:opacity-100 transition-opacity pointer-events-none animate-pulse" />
        </MotionLink>
      </motion.div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              transform: translateX(100%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          .animate-shimmer {
            animation: shimmer 2s infinite ease-in-out;
            background: linear-gradient(90deg, transparent, rgba(236,72,153,0.6), transparent);
            top: 100%;
          }

          @keyframes gradient-blob {
            0%, 100% {
              filter: hue-rotate(0deg);
              transform: translate(0, 0) scale(1);
            }
            50% {
              filter: hue-rotate(45deg);
              transform: translate(20px, 10px) scale(1.1);
            }
          }

          .animate-gradient-blob {
            animation-name: gradient-blob;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 8s;
            animation-direction: alternate;
          }
        `}
      </style>
    </section>
  );
}
