import { t } from "i18next";
export default function Hero() {
  return (
    <div>
      <h1>{t("hero.greeting")}</h1>
      <h2>{t("hero.paragraph")}</h2>
      <p>{t("hero.cta")}</p>
      <button>{t("buttons.projects")}</button>
      <button>{t("buttons.contact")}</button>
    </div>
  );
}
