import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "react-basics",
    title: "React Basics",
    duration: "10 Lessons",
    description: "Learn the fundamentals of React JS for building modern web apps.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "js-essentials",
    title: "JavaScript Essentials",
    duration: "15 Lessons",
    description: "Master core JavaScript concepts and ES6+ features.",
    color: "from-yellow-400 to-red-500",
  },
  {
    id: "css-flexbox-grid",
    title: "CSS Flexbox & Grid",
    duration: "8 Lessons",
    description: "Create responsive layouts using Flexbox and Grid.",
    color: "from-pink-400 to-pink-600",
  },
  {
    id: "nodejs-crash-course",
    title: "Node.js Crash Course",
    duration: "12 Lessons",
    description: "Introduction to backend development with Node.js.",
    color: "from-green-400 to-teal-600",
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    duration: "14 Lessons",
    description: "Get started with Python programming from scratch.",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "data-structures",
    title: "Data Structures",
    duration: "20 Lessons",
    description: "Understand common data structures and algorithms.",
    color: "from-purple-400 to-indigo-600",
  },
];

export default function GetStarted() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center mb-14"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
          Start Learning Free Micro-Courses
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Choose from a wide range of bite-sized courses designed to boost your skills quickly and effectively.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {courses.map(({ id, title, duration, description, color }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(236, 72, 153, 0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`bg-gradient-to-br ${color} rounded-xl p-8 cursor-pointer shadow-lg relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl bg-white rounded-xl" />
            <h3 className="text-2xl font-bold mb-2 z-10 relative">{title}</h3>
            <p className="font-semibold text-pink-200 mb-4 z-10 relative">{duration}</p>
            <p className="text-gray-100 z-10 relative">{description}</p>

            <Link
              to={`/course/${id}`}
              className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full font-semibold tracking-wide shadow-md hover:bg-white/30 transition relative z-10"
              aria-label={`Start course ${title}`}
            >
              <Rocket size={20} />
              Start Course
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
