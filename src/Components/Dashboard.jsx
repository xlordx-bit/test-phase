import { useUser } from "../Context/UserContext";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { ArrowRightCircle, Settings, LogOut } from "lucide-react";

export default function Dashboard({ onLogout }) {
  const { user } = useUser();

  const handleUpgrade = () => {
    alert("✅ Basic Plan Unlocked!");
  };

  const statCard = (value, label, bgGradient, extra = null) => (
    <motion.div
      whileHover={{ scale: 1.07, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-6 rounded-xl backdrop-blur-md bg-gradient-to-r ${bgGradient} bg-opacity-20 border border-white/10 flex flex-col items-center`}
    >
      <h2 className="text-4xl font-extrabold drop-shadow-sm">{value}</h2>
      <p className="mt-2 text-gray-300">{label}</p>
      {extra}
    </motion.div>
  );

  return (
    <div className="flex min-h-screen bg-[#121221] text-white">
      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <main className="ml-64 w-full px-8 py-12 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-extrabold mb-4 relative inline-block"
        >
          Welcome back, {user.name}!
          <span className="absolute left-0 -bottom-1 h-1.5 w-20 bg-yellow-400 rounded-full" />
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 mb-12">
          {statCard(user.coursesCompleted, "Courses Completed", "from-purple-600 to-indigo-500")}
          {statCard(user.skillsLearned, "Skills Learned", "from-pink-600 to-rose-500")}
          {statCard("12h", "Time Spent Learning", "from-green-600 to-teal-400")}
          {statCard(
            user.points || 0,
            "Your Points",
            "from-yellow-600 to-yellow-400",
            <p className="text-sm mt-1 text-yellow-300 font-semibold cursor-pointer hover:underline" onClick={() => window.location.href = "/points"}>
              Click to view rewards &rarr;
            </p>
          )}
        </div>

        {/* Upgrade Plan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`p-5 rounded-xl mb-6 text-center ${
            user.points >= 100 ? "bg-green-700" : "bg-gray-800"
          } shadow-lg`}
        >
          {user.points >= 100 ? (
            <>
              🎉 You’ve unlocked the <strong>Basic Plan</strong>!
            </>
          ) : (
            <>
              🔒 Unlock <strong>Basic Plan</strong> at 100 Points — You have <strong>{user.points || 0}</strong>.
            </>
          )}
        </motion.div>

        <motion.button
          disabled={user.points < 100}
          onClick={handleUpgrade}
          whileHover={user.points >= 100 ? { scale: 1.05 } : {}}
          whileTap={user.points >= 100 ? { scale: 0.95 } : {}}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-shadow
            ${user.points >= 100
              ? "bg-gradient-to-r from-green-400 to-green-600 hover:shadow-lg text-white cursor-pointer"
              : "bg-gray-600 text-white cursor-not-allowed opacity-70"}
          `}
        >
          {user.points >= 100 ? "Upgrade to Basic Plan" : "Earn More Points"}
        </motion.button>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            Continue Learning <ArrowRightCircle size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <Settings size={20} /> Profile Settings
          </motion.button>

          <motion.button
            onClick={onLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <LogOut size={20} /> Log Out
          </motion.button>
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center text-gray-400 italic max-w-xl mx-auto"
        >
          “The secret of getting ahead is getting started.” – Mark Twain
        </motion.div>
      </main>
    </div>
  );
}
