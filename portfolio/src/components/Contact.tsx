import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pt-6 pb-20 border-t border-gray-300/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="inline-block px-4 py-1 bg-white/40 border border-[#CDD6FF]
                     rounded-md shadow-sm mb-8 backdrop-blur"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Contact
          </h2>
        </div>

        {/* CONTACT CARD */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="p-8 rounded-2xl border bg-white/60 backdrop-blur-xl
                     border-[#E3E7FF] shadow-sm hover:shadow-[0_12px_32px_rgba(150,150,200,0.28)]
                     transition-all w-full"
        >
          <p className="text-gray-700 text-[15px] mb-6 leading-relaxed">
            Feel free to reach out for <b className="text-[#7A95FF]">Backend</b>
            , <b className="text-[#7A95FF]">Software Engineering</b>, or{" "}
            <b className="text-[#7A95FF]">Full-Stack</b> roles.
          </p>

          <div className="space-y-5 text-gray-700 text-[15px]">
            <motion.a
              href="mailto:prasannaiamcoder15@gmail.com"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 font-medium hover:text-[#7A95FF] transition"
            >
              <FaEnvelope className="text-[#7A95FF] text-xl" />
              prasannaiamcoder15@gmail.com
            </motion.a>

            <motion.a
              href="https://github.com/mandapati1515"
              target="_blank"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 font-medium hover:text-[#7A95FF] transition"
            >
              <FaGithub className="text-[#7A95FF] text-xl" />
              github.com/mandapati1515
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/prasannakumar0415/"
              target="_blank"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 font-medium hover:text-[#7A95FF] transition"
            >
              <FaLinkedin className="text-[#7A95FF] text-xl" />
              linkedin.com/in/prasannakumar0415
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
