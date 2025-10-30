import { t } from "i18next";
import { Moon, Sun, Globe } from "lucide-react"


export default function Navbar() {
  return (
    <nav>
        <img src="/logAV.svg" alt="" />
      <ul>
        <a>{t("navbar.about")}</a>
        <a>{t("navbar.skills")}</a>
        <a>{t("navbar.projects")}</a>
        <a>{t("navbar.experience")}</a>
        <a>{t("navbar.contact")}</a>
        <button><Globe /></button>
        <button><Sun /></button>
        <button><Moon /></button>
      </ul>
    </nav>
  );
}
