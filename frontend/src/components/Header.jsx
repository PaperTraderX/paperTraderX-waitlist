function Header() {
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Socials", href: "/socials" },
    { label: "Join Waitlist", href: "/join-waitlist" },
    { label: "Career", href: "/career" },
    {
      label: "Concept Paper",
      href: "https://your-pdf-link.com",
      external: true,
    },
  ];

  return (
    <header className="shadow bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-1 px-6 max-w-screen-xl mx-auto w-full">
        {/* Logo with left spacing */}
        <div className="flex items-center -ml-20">
          <img
            src="/light-theme-logo.png"
            alt="PaperTraderX Logo"
            className="w-[300px] h-[100px] object-contain"
          />
        </div>

        {/* Nav with styled buttons */}
        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-200 font-medium">
          <nav className="flex space-x-2 md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`py-[13px] px-6 rounded-[14px] transition text-base font-bold text-[#010101]
        ${
          window.location.pathname === link.href
            ? "bg-rose-300"
            : "bg-white hover:bg-rose-200"
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
