import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Store, Puzzle, GraduationCap, ArrowRight, Globe, BarChart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "trading",
      label: "Trading Naik Kelas",
      icon: TrendingUp,
      title: "Trading Naik Kelas",
      tagline: "Compare Your Broker, 1 Goal 1 Spirit.",
      description: "Bangun karier trading yang aman, legal, dan terarah dengan mitra resmi.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Gabung Komunitas Trading Sekarang",
      link: "#kontak",
    },
    {
      id: "reseller",
      label: "Reseller Minuman",
      icon: Store,
      title: "Reseller Minuman Naik Kelas",
      description: "Ingin bisnis tanpa repot produksi? Gabung jadi reseller produk minuman kekinian dengan margin menarik & dukungan promosi!",
      features: ["Produk siap jual", "Materi promosi", "Tanpa biaya pendaftaran"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Daftar Jadi Reseller Sekarang",
      link: "#kontak",
    },
    {
      id: "modul",
      label: "Modul Bisnis",
      icon: Puzzle,
      title: "Modul Bisnis Naik Kelas",
      description: "“Bangun Bisnismu, Mulai dari Ilmunya.” Modul digital interaktif dari mentor & praktisi bisnis profesional.",
      features: ["Akses seumur hidup", "Sertifikat penyelesaian", "Video + eBook praktis", "Update materi mingguan", "Akses komunitas diskusi"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      cta: "Beli Modul Bisnis Sekarang",
      link: "#kontak",
    },
    {
      id: "webinar",
      label: "Kelas Digital",
      icon: GraduationCap,
      title: "Kelas Digital / Webinar & Workshop Gratis 🎓",
      description: "Belajar Langsung dari Mentor Bisnis — Gratis Setiap Minggu! Ikuti kelas digital & workshop interaktif bersama praktisi, founder, dan mentor profesional.",
      features: ["Terbuka untuk umum", "Live Zoom interaktif", "E-sertifikat peserta aktif", "Rekaman tersedia di platform"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Info Webinar Minggu Ini",
      link: "#kontak",
    },
  ];

  return (
    <motion.section
      id="layanan-bisnis"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full mb-4">
            LAYANAN BISNIS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Solusi Lengkap untuk Pertumbuhan Bisnis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan bisnis Anda dan mulai berkembang bersama kami.
          </p>
        </motion.div>

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
                className="grid lg:grid-cols-2 gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className={service.color} size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  {service.tagline && <p className="font-semibold text-primary mb-4">{service.tagline}</p>}
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                          viewport={{ once: false, amount: 0.1 }}
                        >
                          <CheckCircle2 className={`${service.color} flex-shrink-0`} size={18} />
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl group"
                    asChild
                  >
                    <a href={service.link} className="flex items-center gap-2">
                      {service.cta}
                      <ArrowRight className="group-hover:translate-x-1 transition-smooth" size={18} />
                    </a>
                  </Button>
                </motion.div>

                {service.id === 'trading' ? (
                  <motion.div className="space-y-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.1 }}>
                    <div className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe size={24} className="text-primary"/>
                        <h4 className="font-heading font-bold text-xl text-foreground">Broker Internasional</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Platform: MT4, Welcome Bonus: $50</p>
                      <Button className="w-full" variant="outline">Buka Akun Baru</Button>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-card hover-lift claymorphism">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart size={24} className="text-secondary"/>
                        <h4 className="font-heading font-bold text-xl text-foreground">Broker Lokal</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Trading resmi multilateral, Platform: MT5, Legal & berlisensi nasional</p>
                      <Button className="w-full" variant="outline">Buka Akun Baru</Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="bg-gradient-card rounded-3xl p-8 shadow-card hover-lift"
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.1 }}
                  >
                    <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                      <service.icon className={service.color} size={80} strokeWidth={1} />
                    </div>
                    <div className="mt-6 text-center">
                      <h4 className="font-heading font-bold text-xl text-foreground mb-2">
                        {service.id === 'modul' ? 'Kategori Populer' : service.id === 'webinar' ? 'Topik Populer' : 'Highlight'}
                      </h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        {
                           service.id === 'reseller' ? ["Produk siap jual", "Margin menarik", "Dukungan promosi"].map(item => <p key={item}>{item}</p>) :
                           service.id === 'modul' ? ["Growth & Marketing", "Branding", "Finance", "Leadership"].map(item => <p key={item}>{item}</p>) :
                           service.id === 'webinar' ? ["Digital Marketing", "Mindset Pebisnis", "Pricing Strategy"].map(item => <p key={item}>{item}</p>) :
                           null
                        }
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Services;