import { Target, Eye, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-community.png";
import { motion } from "framer-motion";

const About = () => {
  const visionMission = [
    {
      icon: Eye,
      title: "Visi Kami",
      description:
        "Menjadi platform solusi bisnis terpadu terkemuka yang memberdayakan UMKM dan Startup untuk berkembang dan bersaing di pasar global.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Target,
      title: "Misi Kami",
      description:
        "Menyediakan layanan komprehensif dari legalitas, ekspansi, hingga kemitraan bisnis dengan pendekatan yang personal dan profesional.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Sparkles,
      title: "Nilai Kami",
      description:
        "Integritas, inovasi, dan komitmen untuk pertumbuhan bersama. Kami percaya setiap bisnis memiliki potensi untuk naik kelas.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <motion.section
      id="tentang"
      className="py-20 bg-muted/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
            Tentang Naik Kelas
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Siapa Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naik Kelas adalah platform solusi bisnis terpadu yang fokus membantu UMKM dan Startup mencapai potensi maksimal mereka.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card hover-lift">
              <img
                src={aboutImage}
                alt="Tim Naik Kelas bekerja sama dengan klien"
                className="w-full h-66"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Partner Terpercaya untuk Pertumbuhan Bisnis Anda
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kami memahami tantangan yang dihadapi pengusaha UMKM dan Startup. Dari mengurus legalitas, mencari modal, hingga ekspansi pasar – setiap tahap membutuhkan dukungan yang tepat.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Naik Kelas hadir sebagai solusi all-in-one, menghubungkan Anda dengan ekosistem bisnis yang solid, mentor berpengalaman, dan layanan profesional yang disesuaikan dengan kebutuhan Anda.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm font-medium text-foreground">Layanan Terpadu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm font-medium text-foreground">Tim Profesional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm font-medium text-foreground">Harga Kompetitif</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visionMission.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl text-foreground mb-3">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
