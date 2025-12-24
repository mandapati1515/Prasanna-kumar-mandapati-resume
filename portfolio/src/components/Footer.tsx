const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Prasanna Kumar </span>
        <span>Portfolio built with React, TypeScript & Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
