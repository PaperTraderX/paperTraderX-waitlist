function Header() {
  const navLinks = [
    { label: "Home", href: "/hero" },
    { label: "Socials", href: "#socials" },
    { label: "FAQ's", href: "/faqs" },
    { label: "Career", href: "/career" },
    {
      label: "Concept Paper",
      href: "https://your-pdf-link.com",
      external: true,
    },
  ];

  return (
    <header className="shadow bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-1 px-6 max-w-screen-xl mx-auto w-full">
        {/* Nav Buttons */}
        <div className="flex items-center space-x-4 text-white font-medium">
          <nav className="flex space-x-2 md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`py-[13px] px-6 rounded-[14px] transition-all duration-300 ease-in-out text-base font-bold
  ${
    window.location.pathname === link.href
      ? "bg-gradient-to-r from-cyan-200 to-sky-900 text-white"
      : "hover:bg-gradient-to-r from-cyan-600 to-sky-900"
  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
