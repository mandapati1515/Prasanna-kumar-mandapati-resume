import { motion } from "framer-motion";

type Project = {
  name: string;
  tech: string;
  description: string;
};

const projects: Project[] = [
  {
    name: "GM – eDiagnostics Platform",
    tech: "Java 17, Spring Boot, PostgreSQL, REST APIs, Microservices, Argo, Teamcenter, AWS S3",
    description:
      "Designed and developed the end-to-end backend workflow for GM’s eDiagnostics platform. Built ingestion APIs for mandatory engineering files, implemented rule-based validation pipelines improving data quality, and generated consolidated diagnostic mappings using TKV, BOM, and part relationships. Integrated with Teamcenter to fetch JT CAD models, orchestrated JT→GLB conversions through Argo, and structured all final 3D/2D assets in S3 hierarchies.",
  },
  {
    name: "Apple – VendorVue Application",
    tech: "React.js, Spring Boot, Spring WebFlux, Spring Batch, AWS, MongoDB, Microservices",
    description:
      "Contributed to VendorVue, a platform used to manage contractor hours and vendor payments. Built scalable microservices using Spring Boot and WebFlux, optimized reactive pipelines, and implemented Spring Batch jobs for financial record processing. Developed backend APIs consumed by React UI modules and supported deployments through AWS and Spin Cloud.",
  },
  {
    name: "Agility – Control System Integration with e-Invoicing (IRP Portal)",
    tech: "Spring Boot, REST/SOAP Web Services, XML Transformation, SFTP/FTP, Middleware Integration",
    description:
      "Led development of a middleware engine integrating enterprise control systems with the Government e-Invoicing IRP portal. Automated extraction of invoice data from control systems using filename-driven workflows, transformed payloads into compliant e-Invoice schema, submitted them to the IRP via secure web services, retrieved IRN and digitally signed QR codes, and returned enriched invoices to the control systems—enabling full automation and regulatory compliance.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-6 pb-12 border-t border-gray-300/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="inline-block px-4 py-1 bg-white/40 border border-[#CDD6FF]
                     rounded-md shadow-sm mb-6 backdrop-blur"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            Projects
          </h2>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="
                group p-5 rounded-xl border transition-all cursor-pointer
                bg-white/60 border-[#E3E7FF] backdrop-blur
                shadow-[0_4px_12px_rgba(150,150,200,0.15)]
                hover:shadow-[0_6px_20px_rgba(150,150,200,0.28)]
                relative overflow-hidden
              "
            >
              {/* LEFT ACCENT STRIP */}
              <div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b 
                           from-[#7A95FF] to-[#AABEFF] opacity-70"
              />

              <h3 className="font-semibold text-gray-900 text-base pl-3">
                {project.name}
              </h3>

              <p className="mt-1 text-xs text-[#7A95FF] font-medium pl-3">
                {project.tech}
              </p>

              <p className="mt-3 text-sm text-gray-700 leading-relaxed pl-3">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
