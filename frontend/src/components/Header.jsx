import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Socials", href: "#socials" },
    { label: "FAQ's", href: "#faqs" },
    { label: "Career", href: "#career" },
  ];

  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="shadow bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-3 px-6 max-w-screen-xl mx-auto w-full">
        <div className="text-white font-bold text-xl">PaperTraderX</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-[13px] px-6 rounded-[14px] transition-all duration-300 ease-in-out text-base font-bold ${
                activeSection === link.href
                  ? "bg-gradient-to-r from-cyan-200 to-sky-900 text-white"
                  : "hover:bg-gradient-to-r from-cyan-600 to-sky-900 text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-900">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-[12px] text-base font-bold transition-all duration-300 ${
                  activeSection === link.href
                    ? "bg-gradient-to-r from-cyan-200 to-sky-900 text-white"
                    : "hover:bg-gradient-to-r from-cyan-600 to-sky-900 text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

// // This is a test comment to trigger deployment

// 7 am to 8.30 am (1.5 hour) (dsa)
// 8.30 am to 10 am (1.5 hour) (system design)

// 10 am to 11 am (1 hour) (break)

// 11 am to 7 pm (8 hours) (office work)

// 7 pm to 10 pm (3 hours) (break + dinner)

// 10 pm to 1 am (3 hours)

// // 1. dsa
// // 2. system design
// // 3. coding/development
// // 4. office work
