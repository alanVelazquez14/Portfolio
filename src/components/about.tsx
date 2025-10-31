import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
    return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-4 text-center">{t("aboutMe.title")}</h2>
        <p className="text-lg text-gray-300 mt-16">{t("aboutMe.paragraph1")}</p>
        <p className="text-lg text-gray-300 mt-8">{t("aboutMe.paragraph2")}</p>
        <p className="text-xl text-gray-500 mt-10 text-center hover:text-gray-400">{t("aboutMe.paragraph3")}</p>
      </div>
    </section>
  );
}
