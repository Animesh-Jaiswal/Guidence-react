import React from 'react'
import moniterImg from "../assets/monitor-card.webp";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const MoniterSec = () => {
  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show"
    className="max-w-7xl mx-auto px-4 py-8 md:w-4/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* left side */}
            <motion.div 
          variants={fadeIn('right', 0.3)} className="md:w-1/2 w-full">
                <motion.p 
            variants={fadeIn('up', 0.4)} className="text-green-500 font-semibold">MONITOR</motion.p>

                <motion.h2 
            variants={textVariant(0.5)} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">Introducing best mobile carousels</motion.h2>

                <motion.p 
            variants={fadeIn('up', 0.6)} className="text-gray-600 mb-8">Before the ship is really back. Round, all around the world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, debitis</motion.p>

                <motion.a 
            variants={fadeIn('up', 0.7)} href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about monitoring
                    <HiArrowNarrowRight className="w-5 h-5"/>
                </motion.a>
            </motion.div>
    
            {/* right side */}
            <motion.div 
            variants={fadeIn('left', 0.4)} className="md:w-1/2 w-full">
                <motion.img 
              variants={fadeIn('up', 0.5)} src={moniterImg} alt="schedule image" className="w-full h-auto"/>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default MoniterSec