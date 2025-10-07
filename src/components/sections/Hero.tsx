import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.9, 1, 0.3, 1] }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 aurora-glow" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-5" />

      <div className="container mx-auto px-4 py-20 relative z-10 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <TrendingUp size={18} />
              <span className="text-sm font-semibold">
                Platform Solusi Bisnis Terpadu
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Naik Kelas – Solusi Bisnis untuk{" "}
              <span className="text-primary">UMKM</span> &{" "}
              <span className="text-secondary">Startup</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
              Dari legalitas hingga ekspansi bisnis, kami hadir sebagai partner
              terpercaya untuk membantu bisnis Anda berkembang dan naik kelas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base pulse-cta rounded-xl shadow-lg group"
                asChild
              >
                <a href="#kontak" className="flex items-center gap-2">
                  Konsultasi Gratis Sekarang
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-smooth"
                    size={20}
                  />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base rounded-xl"
                asChild
              >
                <a href="#layanan-bisnis">Lihat Layanan</a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">UMKM Terbantu</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-secondary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Mitra Bisnis</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="UMKM dan Startup berkembang bersama Naik Kelas"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-6 right-0 md:-right-6 bg-card claymorphism rounded-2xl p-4 shadow-lg hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">90%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
