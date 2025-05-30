import { motion } from "framer-motion";

const courses = [
  { name: "JavaScript Basics", percent: 80, color: "bg-yellow-400" },
  { name: "AI Prompts 101", percent: 45, color: "bg-blue-500" },
  { name: "Digital Marketing", percent: 65, color: "bg-green-400" },
];

export default function ProgressTracker() {
  return (
    <section className="py-20 px-4 bg-[#121221] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Your Progress</h2>
        <p className="text-gray-400 mt-3">Track your micro-certification journey</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {courses.map((course, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold">{course.name}</h3>
              <span className="text-sm text-gray-300">{course.percent}%</span>
            </div>

            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${course.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${course.percent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
