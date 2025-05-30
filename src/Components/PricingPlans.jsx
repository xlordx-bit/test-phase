import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Access to limited skills",
      "Basic community support",
      "Limited certifications",
    ],
    popular: false,
    badge: "Free",
  },
  {
    name: "Basic",
    price: "₹500",
    features: [
      "Access to more skills",
      "Priority community support",
      "Certified courses",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹1200",
    features: [
      "Unlimited skill access",
      "Priority support",
      "Unlimited certifications",
      "Downloadable certificates",
      "1-on-1 mentorship",
      "Exclusive workshops",
      "Early access to new courses",
    ],
    popular: true,
    badge: "Most Popular",
  },
];

export default function PricingPlans() {
  return (
    <section className="py-20 px-6 bg-gradient-to-tr from-[#121221] via-[#1c1c35] to-[#121221] text-white">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Flexible pricing for every learner
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {plans.map(({ name, price, features, popular, badge }, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: popular ? 1.07 : 1.03,
              boxShadow: popular
                ? "0 15px 30px rgba(255, 192, 56, 0.7)"
                : "0 8px 20px rgba(255, 255, 255, 0.1)",
            }}
            className={`relative flex flex-col p-10 rounded-3xl border 
              ${
                popular
                  ? "border-yellow-400 bg-gradient-to-br from-yellow-900 to-yellow-800 shadow-yellow-600"
                  : "border-gray-700 bg-[#1b1b2f]"
              } transition-transform duration-300 ease-in-out`}
          >
            {/* Badge */}
            {badge && (
              <div
                className={`absolute -top-5 left-1/2 transform -translate-x-1/2 px-5 py-1 rounded-full text-sm font-semibold uppercase tracking-wide
                ${
                  popular
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-green-500 text-white"
                }`}
              >
                {badge}
              </div>
            )}

            <h3 className="text-3xl font-extrabold mb-4">{name}</h3>
            <p className="text-5xl font-extrabold mb-8 tracking-tight">
              {price}
              <span className="text-lg font-normal text-gray-300 ml-1">/mo</span>
            </p>

            <ul className="mb-8 space-y-4 flex-grow">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <svg
                    className={`w-6 h-6 flex-shrink-0 ${
                      popular ? "text-yellow-400" : "text-pink-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-4 rounded-full font-bold text-lg transition-all duration-300
                ${
                  popular
                    ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                }`}
            >
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
