import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthForm({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin && onLogin) {
      onLogin();
    } else {
      alert("Signup functionality coming soon!");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#1b1b2f] rounded-3xl p-10 shadow-2xl shadow-yellow-500/30 text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
        {isLogin ? "Login to VoraSkill" : "Create your Account"}
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {!isLogin && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="name" className="block mb-2 text-yellow-400 font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg px-5 py-3 bg-[#292a44] border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-yellow-300 transition"
              required={!isLogin}
            />
          </motion.div>
        )}

        <div>
          <label htmlFor="email" className="block mb-2 text-yellow-400 font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg px-5 py-3 bg-[#292a44] border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-yellow-300 transition"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-yellow-400 font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="w-full rounded-lg px-5 py-3 bg-[#292a44] border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white placeholder-yellow-300 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-extrabold py-4 rounded-2xl shadow-lg shadow-yellow-500/40 transition-transform active:scale-95"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-8 text-yellow-300 font-medium">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          className="text-yellow-500 hover:text-yellow-600 font-bold underline underline-offset-4 transition"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
