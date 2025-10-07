import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Store, Truck, PackageSearch, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "trading",
      label: "Trading",
      icon: ShoppingBag,
      title: "Trading & Distribusi",
      description: "Kelola perdagangan produk Anda dengan sistem yang terstruktur dan efisien.",
      features: [
        "Manajemen stok otomatis",
        "Sistem distribusi terintegrasi",
        "Analisis penjualan real-time",
        "Network partner terpercaya",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "reseller",
      label: "Reseller",
      icon: Store,
      title: "Program Reseller",
      description: "Jadilah mitra reseller kami dan kembangkan bisnis dengan produk berkualitas.",
      features: [
        "Produk dengan margin menarik",
        "Support marketing digital",
        "Training penjualan gratis",
        "Sistem dropship tersedia",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: "supplier",
      label: "Supplier",
      icon: Truck,
      title: "Supplier & Procurement",
      description: "Hubungkan bisnis Anda dengan jaringan supplier terpercaya dan berkualitas.",
      features: [
        "Verifikasi supplier ketat",
        "Harga kompetitif",
        "Pengiriman tepat waktu",
        "Quality assurance",
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: PackageSearch,
      title: "Manajemen Marketplace",
      description: "Optimalkan penjualan Anda di berbagai platform marketplace dengan strategi terpadu.",
      features: [
        "Multi-platform management",
        "Optimasi katalog produk",
        "Customer service support",
        "Analytics & reporting",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <motion.section
      id="layanan-bisnis"
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
          <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full mb-4">
            Layanan Bisnis
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Solusi Lengkap untuk Pertumbuhan Bisnis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan bisnis Anda dan mulai berkembang bersama kami.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <Tabs defaultValue="trading" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 p-2 h-auto mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <service.icon size={18} />
                <span className="hidden sm:inline">{service.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className={service.color} size={32} />
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <div className={`mt-1 w-1.5 h-1.5 ${service.bgColor} rounded-full flex-shrink-0`} />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl group"
                    asChild
                  >
                    <a href="#kontak" className="flex items-center gap-2">
                      Mulai Sekarang
                      <ArrowRight className="group-hover:translate-x-1 transition-smooth" size={18} />
                    </a>
                  </Button>
                </motion.div>

                {/* Visual Card */}
                <motion.div
                  className="bg-gradient-card rounded-3xl p-8 shadow-card hover-lift"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                    <service.icon className={service.color} size={80} strokeWidth={1} />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Paket Basic</span>
                      <span className="font-bold text-foreground">Hubungi Kami</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Paket Pro</span>
                      <span className="font-bold text-foreground">Hubungi Kami</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Custom</span>
                      <span className="font-bold text-foreground">Sesuai Kebutuhan</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Services;
