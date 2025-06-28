import React from "react";
import { FaXTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 z-50">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Privacy + Terms */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} PaperTraderX. All rights reserved.
        </div>

        {/* Social icons with brand-colored hovers */}
        <div className="flex space-x-3">
          {/* Twitter/X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-black transition"
            title="Twitter"
          >
            <FaXTwitter className="h-4 w-4 hover:text-white transition" />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-red-600 transition"
            title="YouTube"
          >
            <FaYoutube className="h-4 w-4 hover:text-white transition" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition"
            title="Instagram"
          >
            <FaInstagram className="h-4 w-4 hover:text-white transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-blue-700 transition"
            title="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4 hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
