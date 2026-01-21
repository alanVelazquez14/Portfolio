import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      img: "/project1.png",
      title: "projects.title1",
      description: "projects.description1",
      skills: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Clerk",
        "Node.js",
        "Stripe",
      ],
      code: "https://github.com/HRSYSTEM-PROJECT/front",
      demo: "https://front-git-main-hr-systems-projects.vercel.app/",
    },
    {
      img: "/project2.png",
      title: "projects.title2",
      description: "projects.description2",
      skills: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Nest.js",
        "TypeORM",
        "Express",
        "MongoDB",
        "JWT",
      ],
      code: "https://github.com/alanVelazquez14/front-ringmotos",
      demo: "https://ring-motos.vercel.app/login",
    },
    {
      img: "/project3.png",
      title: "projects.title3",
      description: "projects.description3",
      skills: [
        "JavaScript",
        "React",
        "Styled Components",
        "Node.js",
        "MongoDB",
      ],
      code: "https://github.com/alanVelazquez14/CodexaStudio",
      demo: "https://codexa-studio.vercel.app/",
    },
    {
      img: "/project4.png",
      title: "projects.title4",
      description: "projects.description4",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Styled Components",
      ],
      code: "https://github.com/alanVelazquez14/Landin-page-React",
      demo: "https://landin-page-react.vercel.app/home",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold mb-4 text-center">
          {t("projects.title")}
        </h2>
        <p className="text-lg md:text-xl sm:text-base text-gray-500 mt-16 sm:mt-12 text-center">
          {t("projects.paragraph")}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl mx-auto mt-12 px-6 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col h-full p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={project.img}
                  alt={t(project.title)}
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 rounded-full bg-secondary border border-border text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-around mt-auto pt-4">
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium border border-gray-400 hover:border-primary bg-muted px-10 py-2 rounded-lg hover:bg-primary hover:text-white transition"
                >
                  <Github size={16} /> {t("projects.code")}
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium bg-primary text-white px-10 py-2 rounded-lg hover:bg-primary/80 transition"
                >
                  <ExternalLink size={16} /> {t("projects.demo")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <p className="text-lg md:text-xl sm:text-base text-gray-500 mt-16 sm:mt-12 text-center">
          {t("projects.paragraph2")}{" "}
          <a
            href="https://github.com/alanVelazquez14"
            target="_blank"
            className="text-primary"
          >
            GitHub<span className="text-gray-500">!</span>
          </a>
        </p>
      </div>
    </section>
  );
}
