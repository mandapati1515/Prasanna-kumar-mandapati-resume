import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "prasannaiamcoder15@gmail.com",
      href: "mailto:prasannaiamcoder15@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "mandapati1515",
      href: "https://github.com/mandapati1515",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Prasanna Kumar",
      href: "https://www.linkedin.com/in/prasannakumar0415/",
    },
  ];

  return (
    <section id="contact" className="pt-6 pb-24 border-t border-gray-300/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="inline-block px-4 py-1 bg-white/40 border border-[#CDD6FF]
                        rounded-md shadow-sm mb-10 backdrop-blur"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Contact
          </h2>
        </div>

        {/* INTRO */}
        <p className="text-gray-700 max-w-2xl mb-10 text-[15px] leading-relaxed">
          Open to <span className="text-[#7A95FF] font-semibold">Backend</span>,{" "}
          <span className="text-[#7A95FF] font-semibold">
            Software Engineering
          </span>
          , and <span className="text-[#7A95FF] font-semibold">Full-Stack</span>{" "}
          roles. Let’s connect.
        </p>

        {/* CONTACT GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-6 rounded-2xl border bg-white/60 backdrop-blur-xl
                         border-[#E3E7FF] shadow-sm
                         hover:shadow-[0_16px_40px_rgba(150,150,200,0.3)]
                         transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12
                                rounded-xl bg-[#EEF2FF] text-[#7A95FF] text-xl"
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-800 text-[15px]">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
