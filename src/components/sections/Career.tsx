import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Career = () => {
  const opportunities = [
    {
      title: "Business Development Manager",
      type: "Full-time",
      location: "Jakarta / Hybrid",
      description: "Kembangkan jaringan mitra bisnis dan bantu UMKM berkembang.",
      requirements: ["3+ tahun pengalaman", "Skill negosiasi kuat", "Network luas"],
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Kelola strategi digital marketing untuk pertumbuhan brand.",
      requirements: ["2+ tahun di digital marketing", "SEO & SEM expert", "Creative mindset"],
    },
    {
      title: "Partnership Coordinator",
      type: "Full-time",
      location: "Jakarta",
      description: "Koordinasi program kemitraan dan relationship management.",
      requirements: ["1+ tahun pengalaman", "Komunikasi excellent", "Detail-oriented"],
    },
    {
      title: "Content Creator",
      type: "Part-time / Freelance",
      location: "Remote",
      description: "Buat konten engaging untuk social media dan marketing materials.",
      requirements: ["Portfolio strong", "Video & design skills", "Storytelling ability"],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Program pengembangan karir yang jelas",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Lingkungan kerja supportif & kolaboratif",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Kesempatan berkontribusi pada inovasi",
    },
  ];

  return (
    <motion.section
      id="karir"
      className="py-20 bg-muted/30"
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
          <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full mb-4">
            Karir
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Bergabunglah dengan Tim Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mari bersama-sama membantu ribuan UMKM dan Startup Indonesia untuk naik kelas.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-card hover-lift claymorphism"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-secondary" size={28} />
              </div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Job Openings */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
            Posisi yang Tersedia
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((job, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="text-xs font-semibold text-foreground mb-2">
                    Requirements:
                  </div>
                  <div className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold"
                  asChild
                >
                  <a href="#kontak">Lamar Posisi Ini</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Application CTA */}
        <motion.div
          className="bg-gradient-card rounded-3xl p-8 md:p-12 text-center shadow-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Tidak Menemukan Posisi yang Sesuai?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami selalu terbuka untuk talenta luar biasa. Kirim CV dan portfolio Anda, kami akan menghubungi Anda jika ada kesempatan yang cocok.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl"
            asChild
          >
            <a href="#kontak">Kirim Lamaran Umum</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Career;
