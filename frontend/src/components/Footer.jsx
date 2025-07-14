const Footer = () => {
  return (
    <footer className="shadow bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">PaperTraderX</h2>
        <p className="text-gray-400 mt-2">
          The future of risk-free trading education.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          {/* X */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-black transition"
          >
            <img
              src="/socials/xicon.svg"
              alt="X"
              className="w-5 h-5 invert hover:scale-110 transition"
            />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#FF0000] transition"
          >
            <img
              src="/socials/youtubeicon.svg"
              alt="YouTube"
              className="w-5 h-5 hover:scale-110 transition"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 transition"
          >
            <img
              src="/socials/instagramicon.svg"
              alt="Instagram"
              className="w-5 h-5 hover:scale-110 transition"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#0A66C2] transition"
          >
            <img
              src="/socials/linkedinicon.svg"
              alt="LinkedIn"
              className="w-5 h-5 hover:scale-110 transition"
            />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © 2024 PaperTraderX. All rights reserved. Trade smart, trade safe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
