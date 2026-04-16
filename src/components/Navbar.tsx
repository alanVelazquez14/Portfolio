import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuItems = [
    { to: "about", key: "navbar.about", isButton: false },
    { to: "skills", key: "navbar.skills", isButton: false },
    { to: "projects", key: "navbar.projects", isButton: false },
    { to: "experience", key: "navbar.experience", isButton: false },
    { to: "contact", key: "navbar.contact", isButton: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#090812]/90 backdrop-blur-xl py-3 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={1500}
            className="cursor-pointer group relative z-[110]"
          >
            <div className="relative">
              <img
                src="/logAV.svg"
                alt="Logo"
                className="w-10 h-10 relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]"
              />
              <div className="absolute inset-0 bg-[#800020] blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  smooth={true}
                  duration={1500}
                  offset={-70}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all duration-300 ${
                    item.isButton
                      ? "bg-[#800020] hover:bg-[#a01a1a] text-white px-6 py-2.5 rounded-full shadow-lg shadow-[#800020]/20"
                      : "text-gray-400 hover:text-[#e63946]"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[10px] font-black text-gray-500 hover:text-white transition-colors border-l border-white/10 pl-6"
            >
              <Globe size={14} className="text-[#800020]" />
              {i18n.language.toUpperCase()}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[110] text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Movido fuera del nav principal */}
      <div
        className={`fixed inset-0 bg-[#090812] z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none translate-y-[-10%]"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              smooth={true}
              duration={1500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black italic tracking-tighter text-white hover:text-[#e63946] transition-colors"
            >
              {t(item.key).toUpperCase()}
            </Link>
          ))}

          <div className="h-[1px] w-20 bg-white/10 my-4" />

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-3 text-lg font-black italic text-[#e63946] hover:scale-110 transition-transform"
          >
            <Globe size={24} />
            {i18n.language === "es" ? "ENGLISH" : "ESPAÑOL"}
          </button>
        </div>
      </div>
    </>
  );
}
