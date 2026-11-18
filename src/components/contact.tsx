import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
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
        "eUqecaUP1Q9XyUs_B",
      )
      .then(
        () => {
          toast.success(t("contact.toastSuccess"), { theme: "dark" });
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error(t("contact.toastError"), { theme: "dark" });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#090812] relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#800020]/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-2 text-[#e63946] font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#800020]"></span>
            Get in touch
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic text-white leading-none">
            Hablemos de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800020] via-[#e63946] to-[#800020] italic">
              Tu proyecto
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Columna Info: 5/12 */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black italic text-white tracking-tight">
                {t("contact.title2")}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {t("contact.paragraph")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e63946] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                    Email
                  </p>
                  <p className="text-gray-200 font-medium">
                    velazquez.alan14@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e63946] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                    Location
                  </p>
                  <p className="text-gray-200 font-medium">
                    San Luis, Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                {
                  icon: <Github size={20} />,
                  link: "https://github.com/alanVelazquez14",
                  color: "hover:text-white",
                },
                {
                  icon: <Linkedin size={20} />,
                  link: "https://www.linkedin.com/in/alanvelazquez14/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaWhatsapp size={20} />,
                  link: "https://wa.me/5492664183710",
                  color: "hover:text-green-400",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 ${social.color} hover:bg-white/10 transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Alan Velázquez"
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#e63946] transition-colors placeholder:text-gray-700 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#e63946] transition-colors placeholder:text-gray-700 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                    {t("contact.message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Contame sobre tu idea..."
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#e63946] transition-colors placeholder:text-gray-700 font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-5 bg-[#800020] text-white rounded-2xl font-black italic tracking-widest overflow-hidden transition-all hover:bg-[#a01a1a]"
                >
                  <span className="flex items-center justify-center gap-3 relative z-10 uppercase text-xs">
                    {t("contact.send")}{" "}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
