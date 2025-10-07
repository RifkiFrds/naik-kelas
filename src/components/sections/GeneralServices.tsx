import { Button } from "@/components/ui/button";
import { Scale, Building2, Calendar, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GeneralServices = () => {
  const services = [
    {
      icon: Scale,
      title: "Legalitas Usaha",
      description: "Urus semua dokumen legal bisnis Anda dengan mudah dan cepat.",
      features: ["PT, CV, UD, UMKM", "NIB & Izin Usaha", "NPWP Badan", "Brand & Trademark"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Building2,
      title: "Coworking Space",
      description: "Ruang kerja modern dan produktif dengan fasilitas lengkap.",
      features: ["Private office", "Hot desk", "Meeting room", "High-speed internet"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Calendar,
      title: "Event Organizer",
      description: "Layanan EO profesional untuk berbagai acara bisnis Anda.",
      features: ["Corporate event", "Product launch", "Workshop & seminar", "Team building"],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Globe,
      title: "Website & Digital",
      description: "Bangun online presence yang kuat untuk bisnis Anda.",
      features: ["Website development", "E-commerce", "Social media", "Digital marketing"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <motion.section
      id="layanan-umum"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Layanan Umum
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Layanan Pendukung Bisnis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan profesional untuk mendukung operasional dan pertumbuhan bisnis Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
              >
                <service.icon className={service.color} size={28} />
              </div>

              <h4 className="font-heading font-bold text-xl text-foreground mb-2">
                {service.title}
              </h4>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <div
                      className={`mt-1.5 w-1 h-1 ${service.bgColor} rounded-full flex-shrink-0`}
                    />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="w-full justify-between group-hover:bg-primary/5 rounded-xl"
                asChild
              >
                <a href="#kontak">
                  Pelajari Lebih Lanjut
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-smooth"
                    size={16}
                  />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          className="gradient-hero rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
            Butuh Layanan Custom?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Kami juga menyediakan layanan konsultasi khusus yang disesuaikan dengan kebutuhan unik bisnis Anda.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-lg group"
            asChild
          >
            <a href="#kontak" className="flex items-center gap-2">
              Konsultasi Gratis
              <ArrowRight
                className="group-hover:translate-x-1 transition-smooth"
                size={18}
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GeneralServices;
