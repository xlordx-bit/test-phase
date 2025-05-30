import React from "react";

const certificateData = [
  {
    id: 1,
    name: "John Doe",
    course: "Frontend Mastery",
    date: "May 2025",
    image: "/images/certificate_website.png",
  },
  {
    id: 2,
    name: "John Doe",
    course: "Backend Bootcamp",
    date: "May 2025",
    image: "/images/certificate_website.png",
  },
];

const MyCertificates = () => {
  return (
    <section className="px-6 py-10 bg-gradient-to-r from-indigo-100 to-blue-50">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        🏆 My Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={cert.image}
              alt={`${cert.course} certificate`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{cert.course}</h3>
              <p className="text-sm text-gray-600">Awarded to: {cert.name}</p>
              <p className="text-sm text-gray-500">Date: {cert.date}</p>
              <a
                href={cert.image}
                download
                className="inline-block mt-3 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 text-sm"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCertificates;
