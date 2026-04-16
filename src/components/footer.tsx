import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 bg-[#090812] border-t border-white/5 relative overflow-hidden">
      <style>{`
        @keyframes scan-line {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .animate-scan {
          animation: scan-line 2s linear infinite;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#800020] to-transparent animate-scan opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/logAV.svg"
            alt="Logo"
            className="w-6 h-6 opacity-50 grayscale"
          />
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            Full Stack Developer & Founder <span className="mx-2">|</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] font-black text-gray-500 italic">
            {t("footer.madeBy")} <span className="text-[#800020]">—</span>{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
