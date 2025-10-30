import { useState } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/logAV.svg"
            alt="Logo de mi portfolio"
            className="w-10 h-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#skills"
            className="text-gray-400 hover:text-white transition"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#experience"
            className="text-gray-400 hover:text-white transition"
          >
            {t("navbar.experience")}
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-md transition font-semibold"
          >
            {t("navbar.contact")}
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-white hover:bg-[#790a22] transition bg-transparent p-1 rounded-md flex items-center gap-1"
            >
              {i18n.language.toUpperCase()}
              <Globe size={15} />
            </button>
             <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-muted-foreground hover:text-white hover:bg-[#790a22] transition bg-transparent p-1 rounded-md"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
