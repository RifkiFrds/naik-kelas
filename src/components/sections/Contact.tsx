import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 888-111-2233",
      link: "https://wa.me/628881112233",
      description: "Chat langsung dengan tim kami",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@naikkelas.id",
      link: "mailto: hello@naikkelas.id",
      description: "Kirim pertanyaan detail Anda",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Phone,
      title: "Telepon",
      value: "(021) 5555-1234",
      link: "tel:+622155551234",
      description: "Hubungi hotline kami",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: MapPin,
      title: "Kantor",
      value: "Jakarta Barat",
      link: "https://maps.app.goo.gl/5Dvw3ttqQ7G5re7x6",
      description:
        "Jl. Tanjung Duren Raya, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <motion.section
      id="kontak"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Mari Diskusikan Bisnis Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan solusi terbaik untuk pertumbuhan bisnis. Hubungi kami sekarang!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
              >
                <method.icon className={method.color} size={28} />
              </div>

              <h4 className="font-heading font-bold text-lg text-foreground mb-1">
                {method.title}
              </h4>

              <p className="text-primary font-semibold mb-2">{method.value}</p>

              <p className="text-muted-foreground text-sm">{method.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="gradient-hero p-8 md:p-12">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Siap untuk Naik Kelas?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Dapatkan konsultasi gratis dan temukan bagaimana kami bisa membantu bisnis Anda berkembang lebih cepat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl pulse-cta shadow-xl group min-w-[240px]"
                  asChild
                >
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Naik%20Kelas,%20saya%20tertarik%20untuk%20konsultasi%20bisnis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Sekarang
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-smooth"
                      size={18}
                    />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold rounded-xl min-w-[240px]"
                  asChild
                >
                  <a href="mailto:info@naikkelas.id">Kirim Email</a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                {[
                  { value: "24/7", label: "Fast Response" },
                  { value: "100%", label: "Confidential" },
                  { value: "FREE", label: "Consultation" },
                ].map((trust, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="text-3xl font-heading font-bold text-white mb-1">
                      {trust.value}
                    </div>
                    <div className="text-sm text-white/80">{trust.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-muted-foreground">
            <strong className="text-foreground">Jam Operasional:</strong> Senin - Jumat: 09:00 - 18:00 WIB | Sabtu: 09:00 - 15:00 WIB
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
