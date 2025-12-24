const About = () => {
  return (
    <section
      id="about"
      className="
        pt-6 pb-14 
        border-b border-gray-300/40 
        bg-gradient-to-br from-white via-[#F9FAFF] to-[#EEF2FF]
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div
          className="
            inline-block px-4 py-1 bg-white/50 border border-[#CDD6FF]
            rounded-md shadow-sm mb-6 backdrop-blur
          "
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#7A95FF] tracking-wide">
            About Me
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="text-gray-700 text-[15px] leading-relaxed space-y-4 mt-1">
            <p>
              I’m a{" "}
              <span className="text-[#7A95FF] font-semibold">
                backend-focused Software Engineer
              </span>{" "}
              who enjoys designing clean and scalable backend systems. I thrive
              in environments where{" "}
              <span className="text-[#7A95FF] font-semibold">
                microservices, distributed systems, performance tuning
              </span>{" "}
              and debugging complex workflows come together.
            </p>

            <p>
              I’ve contributed to{" "}
              <span className="text-[#7A95FF] font-semibold">
                automotive engineering platforms, cloud engineering teams, and
                enterprise integration systems
              </span>
              , focusing on reliability, correctness, and production-grade
              stability.
            </p>

            <p>
              Beyond engineering, I stay active through{" "}
              <span className="text-[#7A95FF] font-semibold">
                badminton, pickleball, cricket, and volleyball
              </span>
              — sports that keep me sharp and competitive.
            </p>

            <p>
              I learn fast, iterate quickly, and push until solutions feel
              complete and correct.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            <img
              src="/images/PXL_20251004_203826982.RAW-01_Original.jpg"
              className="
                h-[430px]
                w-[380px]
                md:h-[430px]
                md:w-[540px]
                rounded-xl 
                object-cover
                border border-[#CDD6FF]
                shadow-[0_10px_28px_rgba(140,140,200,0.28)]
                -mt-10                /* Pull image up to blend with Hero */
                md:-ml-6              /* Pull image slightly left */
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
