import { motion } from "framer-motion";
import { Bolt, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Fast Learning",
    desc: "Each skill takes under 5 minutes to learn.",
    icon: <Clock className="w-10 h-10 text-purple-400" />,
  },
  {
    title: "Real Skills",
    desc: "Focused skills you can apply instantly.",
    icon: <Bolt className="w-10 h-10 text-pink-400" />,
  },
  {
    title: "Certifications",
    desc: "Earn micro-certificates with every lesson.",
    icon: <BadgeCheck className="w-10 h-10 text-green-400" />,
  },
];

export default function WhyVoraSkill() {
  return (
    <section className="py-28 px-6 bg-gradient-to-tr from-[#1a1a2e] to-[#12122a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Why VoraSkill?
        </h2>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          We make learning simple, fast, and effective through
          micro-certification and gamified content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.12)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-[#2e2e5a] to-[#212153] p-8 rounded-3xl shadow-lg flex flex-col items-center text-center select-none"
          >
            <div className="mb-6 p-4 rounded-full bg-white bg-opacity-10 flex justify-center items-center">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
