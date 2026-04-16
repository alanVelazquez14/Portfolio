import { useTranslation } from "react-i18next";
import { User, Code2, Coffee, GraduationCap } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#090812] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#800020]/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[#e63946] font-mono text-sm tracking-widest uppercase">
              <User size={18} />
              {t("aboutMe.subtitle") || "Mi Historia"}
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
              {t("aboutMe.title").split(' ')[0]} <br />
              <span className="text-[#800020] italic">
                {t("aboutMe.title").split(' ').slice(1).join(' ')}
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p className="border-l-2 border-[#800020] pl-6 py-2">
                {t("aboutMe.paragraph1")}
              </p>
              <p className="pl-7">
                {t("aboutMe.paragraph2")}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
               <p className="text-gray-300 font-mono text-sm italic leading-snug">
                 <span className="text-[#e63946] mr-2">{"//"}</span>
                 {t("aboutMe.paragraph3")}
               </p>
            </div>
          </div>

          {/* Columna Derecha: "Visual Profile" */}
          <div className="relative">
            {/* Tarjeta de "Stats" tipo Glassmorphism */}
            <div className="relative z-10 bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[40px] p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 gap-8">
                
                <AboutStat 
                  icon={<Code2 className="text-[#e63946]" />}
                  title="Full Stack Developer"
                  desc="Especializado en el ecosistema TS/JS"
                />
                
                <AboutStat 
                  icon={<GraduationCap className="text-[#e63946]" />}
                  title="Trayectoria"
                  desc="De otras áreas al código: aprendizaje constante"
                />

                <AboutStat 
                  icon={<Coffee className="text-[#e63946]" />}
                  title="Mentalidad"
                  desc="Resolución de problemas compleja y eficiente"
                />

              </div>

              {/* Elemento gráfico: Una simulación de líneas de código bordó */}
              <div className="mt-12 pt-8 border-t border-white/5 flex gap-2">
                <div className="h-1 w-20 bg-[#800020] rounded-full" />
                <div className="h-1 w-10 bg-[#800020]/40 rounded-full" />
                <div className="h-1 w-5 bg-[#800020]/20 rounded-full" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#800020]/20 rounded-full blur-2xl animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}

function AboutStat({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#800020]/50 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <p className="text-gray-500 text-sm leading-tight">{desc}</p>
      </div>
    </div>
  );
}