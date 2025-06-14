// src/courses/PythonCourse.jsx
import React from "react";

export default function PythonCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 rounded-3xl shadow-lg p-10 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
          Python for Beginners
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 border-b-2 border-yellow-400 inline-block pb-1">
            About Python
          </h2>
          <p className="text-gray-100 leading-relaxed text-lg">
            Python is a versatile, high-level programming language loved by developers worldwide for its simplicity and readability. It’s widely used in web development, data science, AI, automation, and more. This course will guide you through the fundamentals and help you build your first Python projects step-by-step.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-yellow-400 inline-block pb-1">
            Course Contents
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-gray-200">
            <li>
              <strong>Introduction to Python:</strong> Installation, setup, and basic syntax.
            </li>
            <li>
              <strong>Variables and Data Types:</strong> Strings, numbers, lists, dictionaries.
            </li>
            <li>
              <strong>Control Structures:</strong> Conditions, loops, and functions.
            </li>
            <li>
              <strong>Working with Libraries:</strong> Using popular Python libraries.
            </li>
            <li>
              <strong>Project:</strong> Build a simple Python app.
            </li>
          </ol>
        </section>

        <button
          className="mt-10 bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
          onClick={() => alert("Let's start coding! 🚀")}
        >
          Start Learning Python
        </button>
      </div>
    </div>
  );
}
