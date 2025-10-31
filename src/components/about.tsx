import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 md:py-24 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold mb-4 text-center">
          {t("aboutMe.title")}
        </h2>
        <p className="text-lg md:text-xl sm:text-base text-gray-300 mt-16 sm:mt-12">
          {t("aboutMe.paragraph1")}
        </p>
        <p className="text-lg md:text-xl sm:text-base text-gray-300 mt-8 sm:mt-6">
          {t("aboutMe.paragraph2")}
        </p>
        <p className="text-xl md:text-2xl sm:text-lg text-gray-500 mt-10 sm:mt-8 text-center hover:text-gray-400">
          {t("aboutMe.paragraph3")}
        </p>
      </div>
    </section>
  );
}
