import { motion } from "framer-motion";
import { PiGraduationCapDuotone } from "react-icons/pi";

const Education = () => {
  return (
    <section id="education" className="pt-6 pb-16 border-t border-gray-300/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="inline-block px-4 py-1 bg-white/40 border border-[#CDD6FF]
                     rounded-md shadow-sm mb-8 backdrop-blur"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Education
          </h2>
        </div>

        {/* EDUCATION LIST */}
        <div className="space-y-6">
          {/* DEGREE 1 */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative p-6 rounded-xl border bg-white/60 backdrop-blur-xl
                       border-[#E3E7FF] hover:shadow-[0_8px_24px_rgba(150,150,200,0.25)]
                       transition-all overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#7A95FF] to-[#AABEFF]" />
            <div className="absolute right-0 top-0 w-40 h-40 bg-[#D6DDFF]/30 blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: [-6, 6, -6] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="text-[#7A95FF] text-4xl mt-1"
              >
                <PiGraduationCapDuotone />
              </motion.div>

              <div>
                <h3 className="font-semibold text-gray-900 text-[16px]">
                  Master of Science in Data Science
                </h3>
                <p className="text-sm text-gray-600">
                  Indiana University Indianapolis · May 2023
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  CGPA:{" "}
                  <span className="font-medium text-gray-700">3.8 / 4.0</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* DEGREE 2 */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative p-6 rounded-xl border bg-white/60 backdrop-blur-xl
                       border-[#E3E7FF] hover:shadow-[0_8px_24px_rgba(150,150,200,0.25)]
                       transition-all overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#7A95FF] to-[#AABEFF]" />
            <div className="absolute right-0 top-0 w-40 h-40 bg-[#E5EBFF]/30 blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: [-6, 6, -6] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="text-[#7A95FF] text-4xl mt-1"
              >
                <PiGraduationCapDuotone />
              </motion.div>

              <div>
                <h3 className="font-semibold text-gray-900 text-[16px]">
                  Bachelor of Computer Science & Engineering
                </h3>
                <p className="text-sm text-gray-600">
                  Bapatla Engineering College · Apr 2019
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  CGPA:{" "}
                  <span className="font-medium text-gray-700">3.1 / 4.0</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
