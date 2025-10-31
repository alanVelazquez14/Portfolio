import { useState } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#about", key: "navbar.about", isButton: false },
    { href: "#skills", key: "navbar.skills", isButton: false },
    { href: "#projects", key: "navbar.projects", isButton: false },
    { href: "#experience", key: "navbar.experience", isButton: false },
    { href: "#contact", key: "navbar.contact", isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <div className="flex items-center gap-3 cursor-pointer group">
          <a href="#hero" onClick={handleLinkClick}>
            <img
              src="/logAV.svg"
              alt="Logo de mi portfolio"
              className="w-10 h-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`transition ${
                item.isButton
                  ? "bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-md font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-white hover:bg-secondary transition bg-transparent p-1 rounded-md flex items-center gap-1"
            >
              {i18n.language.toUpperCase()}
              <Globe size={15} />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-muted-foreground hover:text-white hover:bg-secondary transition bg-transparent p-1 rounded-md"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-gray-400 hover:text-white hover:bg-secondary transition bg-transparent p-1 rounded-md flex items-center"
          >
            <Globe size={20} />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-muted-foreground hover:text-white hover:bg-secondary transition bg-transparent p-1 rounded-md"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1 rounded-md hover:bg-secondary transition "
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute w-full text-card-foreground transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100  border-t border-border/50"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center px-6 gap-4 bg-black p-10">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={handleLinkClick}
              className={`text-lg font-medium py-2 px-2 rounded-lg text-left transition ${
                item.isButton
                  ? "bg-primary text-white font-semibold text-center"
                  : "text-foreground hover:bg-secondary/50"
              }`}
            >
              {t(item.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
