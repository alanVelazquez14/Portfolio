import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-16 pt-14 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} {t("footer.madeBy")}.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
