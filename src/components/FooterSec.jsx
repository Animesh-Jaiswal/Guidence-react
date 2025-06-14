import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Carrer", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};

const FooterSec = () => {
  return (
    <motion.footer 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show" className="bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div 
          variants={fadeIn('up', 0.3)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 ">
          {/* brand column */}
          <motion.div 
            variants={fadeIn('right', 0.4)} className="lg:col-span-4">
            <motion.div 
              variants={fadeIn('down', 0.5)} className="flex gap-1 items-center mb-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 -ml-2 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </motion.div>

            <motion.p 
              variants={fadeIn('up', 0.6)} className="text-gray-600 mb-6 md:w-3/4 text-md ">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.7)} className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/"
                target="blank"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="size-5" />{" "}
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://x.com/i/flow/login"
                target="blank"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaTwitter className="size-5" />{" "}
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/"
                target="blank"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="size-5" />{" "}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* footer navi items */}
          <motion.div 
            variants={fadeIn('left', 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div 
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))} >
                    <motion.h3 
                    variants={textVariant(0.2)} className="text-lg font-medium mb-4 uppercase">
                      {category}
                    </motion.h3>
                    <motion.ul 
                    variants={fadeIn('up', 0.4)} className="space-y-3">
                      {links.map((link, index) => (
                        <motion.li 
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}>
                          <motion.a 
                          whileHover={{ x: 5 }}
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* footer copyright section */}
        <motion.div 
          variants={fadeIn('up', 0.8)} className="border-t border-gray-200 mt-12 pt-8">
          <motion.div 
            variants={fadeIn('up', 0.9)} className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              variants={fadeIn('right', 1.0)} className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()} Guidence{" "}
            </motion.p>

            <motion.p 
              variants={fadeIn('left', 1.0)} className="text-600 text-sm">Created by Animesh Jaiswal</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSec;
