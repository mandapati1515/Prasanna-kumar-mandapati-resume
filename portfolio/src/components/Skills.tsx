import { motion } from "framer-motion";
import { FaJava, FaAws, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiApachekafka,
  SiMysql,
} from "react-icons/si";
import { TbApi, TbBrandGithubCopilot } from "react-icons/tb";

// Map skills → icons
const skillIcons: Record<string, any> = {
  Java: <FaJava />,
  "Spring Boot": <SiSpringboot />,
  "REST APIs": <TbApi />,
  Microservices: <TbBrandGithubCopilot />,
  WebFlux: <TbApi />,
  Kafka: <SiApachekafka />,
  "Distributed Systems": <TbBrandGithubCopilot />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  "Git / GitHub": <FaGitAlt />,
  "SQL Optimization": <SiMysql />,
};

// Skills list
const skills = Object.keys(skillIcons);

// Duplicate for infinite scroll effect
const tickerSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section id="skills" className="pt-6 pb-12 border-t border-gray-300/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="inline-block px-4 py-1 bg-white/40 border border-[#CDD6FF]
                     rounded-md shadow-sm mb-6 backdrop-blur"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Skills
          </h2>
        </div>

        {/* TICKER */}
        <div className="overflow-hidden relative pt-2">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {tickerSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2 bg-white/60
                           border border-[#E3E7FF] rounded-xl shadow-sm
                           backdrop-blur-md hover:shadow-lg hover:bg-white/80
                           transition text-gray-700 font-medium text-sm whitespace-nowrap"
              >
                <span className="text-[#7A95FF] text-lg">
                  {skillIcons[skill]}
                </span>
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
