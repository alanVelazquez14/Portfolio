import { useTranslation } from "react-i18next";
import {
  Code2,
  Database,
  Wrench,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  titleKey: string;
  icon: LucideIcon;
  skills: string[];
}

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: "skills.frontend",
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Redux",
        "Responsive Design",
        "Jest",
      ],
    },
    {
      titleKey: "skills.backend",
      icon: Server,
      skills: ["Node.js", "Express", "RESTful APIs", "JWT / Auth"],
    },
    {
      titleKey: "skills.database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Mongoose", "SQL"],
    },
    {
      titleKey: "skills.tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
    {
      titleKey: "skills.soft.title",
      icon: Users,
      skills: t("skills.soft.list", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full mx-auto px-6 py-20 bg-[#070a0fef] shadow-xl shadow-black/30"
    >
      <h2 className="text-4xl font-extrabold text-center text-white my-16 tracking-tighter">
        {t("skills.title")}
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-full mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:bg-card/90"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-lg text-primary bg-primary/10 group-hover:text-white group-hover:bg-primary transition-colors duration-300 group-hover:rotate-6">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t(category.titleKey)}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
