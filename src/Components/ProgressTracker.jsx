import { motion } from "framer-motion";

const courses = [
  { name: "JavaScript Basics", percent: 80, color: "from-yellow-400 to-yellow-500" },
  { name: "AI Prompts 101", percent: 45, color: "from-blue-500 to-blue-600" },
  { name: "Digital Marketing", percent: 65, color: "from-green-400 to-green-500" },
];

export default function ProgressTracker() {
  return (
    <section className="py-20 px-6 bg-[#121221] text-white">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Your Progress
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Track your micro-certification journey
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {courses.map(({ name, percent, color }, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-lg">{name}</h3>
              <span className="text-sm text-gray-300 font-mono">{percent}%</span>
            </div>

            <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
