import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <Particles />

      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t("hero.greeting")}
          <br />
          <span className="text-primary">Alan</span>{" "}
          <span className="text-primary">Velazquez</span>
        </h1>
        <p className="text-xl text-white font-normal mt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          {t("hero.paragraph")}
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 italic max-w-2xl mt-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {t("hero.cta")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all group text-white font-semibold py-2 px-5 rounded-md inline-flex items-center justify-center"
          >
            {t("buttons.projects")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:scale-105 transition-all bg-transparent hover:bg-secondary/50 text-white font-semibold py-2 px-5 rounded-md border border-secondary"
          >
            {t("buttons.contact")}
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <SocialIcon
            href="https://github.com/alanVelazquez14"
            label="@alanVelazquez14"
            icon={<Github className="h-6 w-6" />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/alanvelazquez14/"
            label="/in/alanvelazquez14"
            icon={<Linkedin className="h-6 w-6" />}
          />
          <SocialIcon
            href="mailto:velazquez.alan14@gmail.com"
            label="velazquez.alan14@gmail.com"
            icon={<Mail className="h-6 w-6" />}
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-muted-foreground hover:text-foreground transition-colors"
    >
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
