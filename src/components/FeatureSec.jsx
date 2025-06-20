import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeatureSec = () => {
  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show" id="about" className="max-w-7xl mx-auto px-4 py-12 md:w-4/5">
      {/* heading text */}
      <motion.div 
        variants={fadeIn('up', 0.3)} className="text-center mb-12">
        <motion.h2 
          variants={textVariant(0.2)} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          How can we help your buisness?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)} className="text-gray-600">
          When you resell besnik, you build trust and increase
        </motion.p>
      </motion.div>

      {/* features box */}
      <motion.div 
        variants={fadeIn('up', 0.5)} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
          key={index}
          variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6 text-center"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-20 h-20 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))} className="text-2xl">{feature.icon}</motion.div>
            </motion.div>

            <motion.h3 
              variants={textVariant(0.3)} className="text-2xl font-medium mb-3 text-gray-900">
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))} className="text-gray-500 text-center">{feature.description}</motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* button */}
      <motion.div 
        variants={fadeIn('up', 0.7)} className="text-center mt-12">
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 relative">
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/35 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeatureSec;
