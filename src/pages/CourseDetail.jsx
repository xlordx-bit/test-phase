import { useParams, Link } from "react-router-dom";

const courseData = {
  "react-basics": {
    title: "React Basics",
    content: "This course covers React fundamentals, components, hooks, and state management.",
  },
  "js-essentials": {
    title: "JavaScript Essentials",
    content: "Learn JavaScript core concepts, ES6+ syntax, and how to write clean code.",
  },
  "css-flexbox-grid": {
    title: "CSS Flexbox & Grid",
    content: "Master responsive layouts using Flexbox and CSS Grid techniques.",
  },
  "nodejs-crash-course": {
    title: "Node.js Crash Course",
    content: "Introduction to Node.js, Express, and backend API development.",
  },
  "python-beginners": {
    title: "Python for Beginners",
    content: "Start programming with Python: syntax, data structures, and basic projects.",
  },
  "data-structures": {
    title: "Data Structures",
    content: "Understand common data structures like arrays, lists, trees, and algorithms.",
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h2 className="text-4xl font-bold mb-4">Course Not Found</h2>
        <Link
          to="/get-started"
          className="text-pink-500 underline hover:text-pink-400"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white p-12 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">{course.title}</h1>
      <p className="text-lg leading-relaxed mb-10">{course.content}</p>
      <Link
        to="/get-started"
        className="inline-block bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded-full font-semibold"
      >
        Back to Courses
      </Link>
    </section>
  );
}
