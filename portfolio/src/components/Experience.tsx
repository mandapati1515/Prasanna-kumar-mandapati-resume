import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- TYPES ---------- */
type ExperienceItem = {
  id: number;
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

/* ---------- EXPERIENCE DATA ---------- */
const experiences: ExperienceItem[] = [
  {
    id: 1,
    logo: "/logos/GM.png",
    company: "Algebra IT – General Motors, USA",
    role: "Software Engineer",
    period: "Mar 2025 – Present",
    location: "Hybrid, USA",
    bullets: [
      "Develop backend services using Java 17, Spring Boot, and JDBC to ingest and validate vehicle configuration data.",
      "Improved engineering data quality from 60% → 95% through automated validation workflows.",
      "Built high-performance Excel/JSON ingestion pipelines enabling clean downstream data consumption.",
      "Developed REST APIs supporting diagnostic applications and frontend tools.",
      "Optimized ingestion speed using batching, parallelism, and SQL query tuning.",
      "Built structured error handling, reprocessing flows, and integrity checks.",
    ],
  },
  {
    id: 2,
    logo: "/logos/apple.png",
    company: "Algebra IT – Apple Inc, USA",
    role: "Software Engineer",
    period: "Jun 2023 – Feb 2025",
    location: "Hybrid, USA",
    bullets: [
      "Optimized backend throughput using Java 21 + WebFlux reactive pipelines.",
      "Built scalable REST services consumed by internal Apple React applications.",
      "Engineered ETL pipelines handling 1M+ financial and operational records.",
      "Maintained distributed services with 99.9% uptime SLAs.",
      "Improved MongoDB read latency through advanced indexing strategies.",
    ],
  },
  {
    id: 3,
    logo: "/logos/agility.png",
    company: "Agility E-Services Pvt Ltd, India",
    role: "Software Developer",
    period: "Jun 2019 – Jul 2021",
    location: "Onsite, India",
    bullets: [
      "Developed enterprise integration services using Spring Boot and IBM MQ.",
      "Implemented automated REST/SOAP data exchange workflows for large clients.",
      "Engineered secure SFTP/FTP ingestion pipelines that improved throughput by 30%.",
      "Migrated engineering teams from TFVC → GitHub version control.",
      "Improved system stability through monitoring dashboards and structured logging.",
    ],
  },
];

/* ---------- EXPERIENCE COMPONENT ---------- */
const Experience = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < -50 || rect.bottom > window.innerHeight + 200) {
        setOpenId(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="pt-6 pb-12 border-b border-gray-300/40">
      <div ref={containerRef} className="max-w-6xl mx-auto px-6">
        {/* LEFT-ALIGNED TITLE */}
        <div
          className="px-4 py-1 bg-white/40 border border-[#CDD6FF]
                     rounded-md shadow-sm mb-6 backdrop-blur inline-block"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Experience
          </h2>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-5">
          {experiences.map((exp: ExperienceItem) => (
            <motion.div
              key={exp.id}
              onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
              whileHover={{ scale: 1.01 }}
              className={`
                p-5 rounded-xl cursor-pointer border transition-all w-full
                ${
                  openId === exp.id
                    ? "bg-white/80 border-[#AFC2FF] shadow-[0_6px_18px_rgba(150,150,200,0.22)] backdrop-blur-lg"
                    : "bg-white/50 border-[#E3E7FF] hover:shadow-md backdrop-blur"
                }
              `}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={exp.logo} className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-semibold text-gray-900">{exp.role}</p>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* BULLETS */}
              <AnimatePresence>
                {openId === exp.id && (
                  <motion.ul
                    className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2 pl-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {exp.bullets.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
