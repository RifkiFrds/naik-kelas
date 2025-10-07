import { Button } from "@/components/ui/button";
import { Coffee, Utensils, IceCream, ArrowRight, CheckCircle2 } from "lucide-react";
import fnbImage from "@/assets/fnb-booth.png";
import { motion } from "framer-motion";

const Partnership = () => {
  const packages = [
    {
      icon: Coffee,
      name: "Coffee Shop",
      description: "Paket lengkap untuk memulai coffee shop modern",
      features: ["Booth design modern", "Peralatan kopi premium", "Training barista", "Marketing support"],
      price: "Mulai dari 50jt",
      popular: false,
    },
    {
      icon: Utensils,
      name: "Food Booth",
      description: "Solusi booth makanan dengan konsep menarik",
      features: ["Booth custom design", "Peralatan masak", "Resep signature", "Brand development"],
      price: "Mulai dari 40jt",
      popular: true,
    },
    {
      icon: IceCream,
      name: "Dessert Bar",
      description: "Konsep dessert bar yang eye-catching",
      features: ["Display case modern", "Equipment lengkap", "Menu development", "Social media kit"],
      price: "Mulai dari 35jt",
      popular: false,
    },
  ];

  return (
    <motion.section
      id="kemitraan"
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
          transition={{ delay: 0.2, duration: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
            Kemitraan F&amp;B
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Paket Kemitraan F&amp;B Lengkap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wujudkan impian Anda memiliki bisnis F&amp;B dengan paket kemitraan all-in-one dari Naik Kelas.
          </p>
        </motion.div>

       {/* Featured Image */}
<motion.div
  className="mb-16"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-3xl w-full mx-auto">
    <img
      src={fnbImage}
      alt="Booth F&B modern dengan desain menarik"
      className="w-full h-auto object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-white"
      >
        <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-2">
          Booth Modern &amp; Profesional
        </h3>
        <p className="text-white/90 text-sm sm:text-base">
          Desain menarik, peralatan lengkap, siap operasional
        </p>
      </motion.div>
    </div>
  </div>
</motion.div>

        {/* Partnership Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism relative overflow-hidden ${
                pkg.popular ? "ring-2 ring-accent" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULER
                  </span>
                </div>
              )}

              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <pkg.icon className="text-secondary" size={28} />
              </div>

              <h4 className="font-heading font-bold text-xl text-foreground mb-2">
                {pkg.name}
              </h4>

              <p className="text-muted-foreground text-sm mb-4">
                {pkg.description}
              </p>

              <div className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="text-2xl font-heading font-bold text-primary mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  Investasi awal
                </div>
              </div>

              <Button
                className={`w-full rounded-xl font-semibold ${
                  pkg.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
                asChild
              >
                <a href="#kontak">Pelajari Lebih Lanjut</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-primary/5 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
                Keuntungan Bermitra dengan Kami
              </h3>
              <p className="text-muted-foreground mb-6">
                Lebih dari sekedar booth, kami memberikan dukungan penuh untuk kesuksesan bisnis F&amp;B Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Support Penuh" },
                { value: "6 Bulan", label: "Garansi Booth" },
                { value: "24/7", label: "Konsultasi" },
                { value: "ROI", label: "8-12 Bulan" },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card rounded-xl p-4 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="text-2xl font-heading font-bold text-secondary mb-1">
                    {benefit.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {benefit.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partnership;
