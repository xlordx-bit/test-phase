import { motion } from "framer-motion";
import { Code, PenTool, Brain, BarChart3 } from "lucide-react";

const skills = [
  { name: "JavaScript Basics", icon: <Code className="w-8 h-8" />, color: "from-yellow-400 to-orange-500" },
  { name: "Design Thinking", icon: <PenTool className="w-8 h-8" />, color: "from-purple-600 to-pink-500" },
  { name: "AI Prompts 101", icon: <Brain className="w-8 h-8" />, color: "from-blue-600 to-teal-400" },
  { name: "Digital Marketing", icon: <BarChart3 className="w-8 h-8" />, color: "from-green-400 to-lime-500" },
];

export default function TrendingSkills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-[#0a0a14] to-[#1a1a2e] text-white">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Trending Skills
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          Explore what’s hot and trending in bite-sized learning
        </p>
      </div>

      <div className="flex space-x-8 overflow-x-auto pb-6 px-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, boxShadow: "0 12px 25px rgba(255, 215, 75, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`min-w-[260px] snap-start bg-gradient-to-br ${skill.color} rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center cursor-pointer select-none`}
          >
            <div className="mb-5 bg-white bg-opacity-20 rounded-full p-4 flex items-center justify-center">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold drop-shadow-md">{skill.name}</h3>
            <p className="text-sm mt-2 text-yellow-300 font-medium tracking-wide">
              Micro-course &bull; Certifiable
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
