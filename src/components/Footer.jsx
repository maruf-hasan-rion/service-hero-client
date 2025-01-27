const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            <img
              className="w-[44px] md:w-[52px] p-2 mr-2 rounded-full bg-slate-200"
              src="/favicon.svg"
              alt=""
            />
            Service Hero
          </div>
          <div className="text-sm">
            <p>Email: contact@servicehero.com</p>
            <p>Phone: +1 (234) 567-8901</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Service Hero. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
