import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/40 backdrop-blur-xl border-b border-[#7A95FF]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
          <div className="hidden md:flex gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-gray-700 font-medium relative 
                  hover:text-[#7A95FF] transition
                  after:absolute after:left-0 after:right-0 after:-bottom-1 
                  after:h-[2px] after:bg-[#7A95FF] after:scale-x-0 
                  hover:after:scale-x-100 after:transition-transform after:origin-left
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="
          relative min-h-[62vh] 
          pt-24 pb-8 
          overflow-hidden
          bg-gradient-to-br from-white via-[#F7F9FF] to-[#EEF2FF]
        "
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* ---------------- LEFT SIDE ---------------- */}
          <div className="mt-2">
            <motion.p
              className="text-sm font-medium text-[#7A95FF]"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hey there 👋
            </motion.p>

            <motion.h1
              className="
                text-[2.2rem] sm:text-[2.5rem] font-extrabold leading-tight 
                text-gray-900 mt-1
              "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              I am{" "}
              <span
                className="
                  bg-gradient-to-r from-[#7A95FF] to-[#A5B8FF]
                  bg-clip-text text-transparent
                "
              >
                Prasanna&nbsp;Kumar&nbsp;Mandapati
              </span>
            </motion.h1>

            <motion.h2
              className="mt-3 text-lg sm:text-xl text-gray-700 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              I turn complex systems into scalable, production-ready solutions.
            </motion.h2>

            {/* BUTTONS */}
            <motion.div
              className="mt-6 flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-[#7A95FF] text-white rounded-lg shadow-sm hover:bg-[#6B85F5] transition"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="Prasanna_Kumar_Mandapati_Resume.pdf"
                className="px-6 py-3 border border-[#7A95FF] text-[#7A95FF] rounded-lg hover:bg-white/60 transition"
              >
                Get Resume
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex gap-6 mt-6 text-3xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/prasannakumar0415/"
                target="_blank"
                className="hover:text-[#7A95FF] hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/mandapati1515"
                target="_blank"
                className="hover:text-[#7A95FF] hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          {/* ---------------- RIGHT SIDE (Asymmetric Card) ---------------- */}
          <motion.div
            className="
              bg-white/80 rounded-2xl p-6 
              border border-[#D5DCFF]
              shadow-[0_10px_35px_rgba(150,150,200,0.22)]
              backdrop-blur-xl
              md:-mt-10 md:ml-4       /* Asymmetric floating effect */
              hover:shadow-[0_14px_45px_rgba(140,140,200,0.28)]
              transition
            "
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <pre className="text-[14px] font-mono leading-relaxed whitespace-pre-wrap">
              <span className="text-[#6B85F5] font-semibold">{`> BOOTING_SYSTEM...\n`}</span>
              <span className="text-gray-500">USER:</span>{" "}
              <span className="text-[#7A95FF]">"Prasanna Kumar Mandapati"</span>
              {"\n"}
              <span className="text-gray-500">ROLE:</span>{" "}
              <span className="text-[#6B85F5]">Software Engineer</span>
              {"\n\n"}
              <span className="text-gray-500">TECH_STACK:</span>
              {"\n"}
              <span className="text-emerald-600">
                - Java / Spring Boot / Microservices
              </span>
              {"\n"}
              <span className="text-emerald-600">
                - WebFlux / Kafka / Distributed Systems
              </span>
              {"\n"}
              <span className="text-emerald-600">- PostgreSQL / MongoDB</span>
              {"\n"}
              <span className="text-emerald-600">- AWS Cloud Engineering</span>
              {"\n\n"}
              <span className="text-gray-500">STATUS:</span>{" "}
              <span className="text-green-600 font-semibold">
                SYSTEM_READY = true
              </span>
            </pre>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
