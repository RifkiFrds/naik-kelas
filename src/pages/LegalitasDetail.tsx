import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LegalitasDetail = () => {
  const pricingPackages = [
    {
      title: "PENDIRIAN PT NON IZIN",
      price: "Rp2,9 juta",
      features: [
        "Pengecekan dan Pemesanan Nama",
        "Akta Pendirian",
        "Pengesahan Menteri Hukum dan Hak Asasi Manusia",
      ],
      popular: false,
    },
    {
      title: "PENDIRIAN PT DAN IZIN",
      price: "Rp4,7 juta",
      features: [
        "Pengecekan dan Pemesanan Nama",
        "Akta Pendirian",
        "Pengesahan Menteri Hukum dan Hak Asasi Manusia",
        "NPWP",
        "SKT Pajak",
        "NIB",
      ],
      popular: true,
    },
    {
      title: "PT PERORANGAN (NEW)",
      price: "Rp1,9 juta",
      features: [
        "Reservasi nama PT Perorangan",
        "Surat Pernyataan Menkumham",
        "Surat Sertifikat Menkumham",
        "NIB",
        "NPWP",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <motion.section
          id="legalitas-detail"
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
              Layanan Legalitas & Sertifikasi
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Urus Izin Usaha, Jadi Mudah & Cepat
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fokus pada pengembangan bisnis Anda, biarkan kami yang mengurus legalitasnya. Proses transparan didampingi oleh tim ahli hukum dan regulasi kami.
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card flex flex-col relative overflow-hidden ${
                  pkg.popular ? "ring-2 ring-accent" : "border"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                    PALING LARIS
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-4xl font-bold text-primary mb-6">{pkg.price}</p>
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={16} />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  size="lg"
                  className={`w-full mt-8 font-semibold rounded-xl group ${
                    pkg.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""
                  }`}
                  asChild
                >
                  <a href="#kontak" className="flex items-center gap-2">
                    Pilih Paket Ini
                    <ArrowRight className="group-hover:translate-x-1 transition-smooth" size={18} />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalitasDetail;