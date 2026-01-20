import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_joxqb7j",
        "template_1xewyns",
        form.current,
        "eUqecaUP1Q9XyUs_B"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(t("contact.toastSuccess"), {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          form.current?.reset();
        },
        (error) => {
          console.log("Error al enviar:", error);
          toast.error(t("contact.toastError"), {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="w-full mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
        {t("contact.title")}
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Subtítulo y Descripción */}
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">
              {t("contact.title2")}
            </h3>
            <p className="text-lg text-gray-400">{t("contact.paragraph")}</p>
          </div>

          {/* Datos de Contacto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 bg-primary.replace('bg', 'text')}`} />
              <span className="text-gray-400">velazquez.alan14@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className={`w-5 h-5 bg-primary.replace('bg', 'text')}`} />
              <span className="text-gray-400">Argentina</span>
            </div>
          </div>

          {/* Botón Descargar CV */}
          <div className="pt-4 border-t border-border">
            <a
              href="/ALAN VELAZQUEZ CV- full.pdf"
              download
              className={`flex items-center justify-center w-full max-w-xs px-6 py-3 font-semibold rounded-lg bg-primary text-white hover:opacity-90 transition-opacity`}
            >
              <Download className="w-5 h-5 mr-2" />
              {t("contact.cv")}
            </a>
          </div>

          {/* Íconos de Redes Sociales */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/alanVelazquez14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#181a1f] hover:opacity-80 transition-opacity"
            >
              <Github className={`w-6 h-6 text-gray-500`} />
            </a>
            <a
              href="https://www.linkedin.com/in/alanvelazquez14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#181a1f] hover:opacity-80 transition-opacity "
            >
              <Linkedin className={`w-6 h-6 text-blue-500`} />
            </a>
            <a
              href="mailto:velazquez.alan14@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#181a1f] hover:opacity-80 transition-opacity"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
            <a
              href="https://wa.me/5492664774564"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#181a1f] hover:opacity-80 transition-opacity"
            >
              <FaWhatsapp className="w-6 h-6 text-green-500" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 text-gray-400`}
              >
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("contact.name")}
                className={`w-full px-4 py-3 rounded-lg bg-[#181a1f] border-none text-white focus:ring-2 focus:ring-[#E63946]`}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 text-gray-400`}
              >
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.email")}
                className={`w-full px-4 py-3 rounded-lg bg-[#181a1f] border-none text-white focus:ring-2 focus:ring-[#E63946]`}
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 text-gray-400`}
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.message")}
                className={`w-full px-4 py-3 rounded-lg bg-[#181a1f] border-none text-white focus:ring-2 focus:ring-[#E63946]`}
                required
              ></textarea>
            </div>

            {/* Botón Enviar Mensaje */}
            <button
              type="submit"
              className={`w-full px-6 py-3 font-semibold rounded-lg bg-primary text-white hover:opacity-90 transition-opacity`}
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
