const Footer = () => {
  return (
    <footer className="border-t border-[#D6DDFF] bg-[#F6F8FF]">
      <div
        className="max-w-6xl mx-auto px-4 py-7
                   flex flex-col sm:flex-row
                   items-center justify-between
                   text-sm text-gray-700 gap-3"
      >
        {/* Left */}
        <span>
          © {new Date().getFullYear()} Developer Portfolio by{" "}
          <span className="font-semibold text-[#7A95FF]">Prasanna Kumar</span>
        </span>

        {/* Right */}
        <span className="font-medium text-[#7A95FF] tracking-wide">
          React · TypeScript · Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
