import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan Bisnis", href: "#layanan-bisnis" },
    { label: "Kemitraan", href: "#kemitraan" },
  ];

  const services = [
    { label: "Trading", href: "#layanan-bisnis" },
    { label: "Reseller", href: "#layanan-bisnis" },
    { label: "Legalitas", href: "#layanan-umum" },
    { label: "Coworking Space", href: "#layanan-umum" },
  ];

  const company = [
    { label: "Karir", href: "#karir" },
    { label: "Kontak", href: "#kontak" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">
                  NK
                </span>
              </div>
              <span className="font-heading font-bold text-xl">Naik Kelas</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-sm">
              Apapun tahap bisnismu, Naik Kelas siap bantu kamu berkembang. Dari legalitas hingga ekspansi, kami partner terpercaya untuk UMKM & Startup Indonesia.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-smooth hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-bold text-sm mb-3">Subscribe Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                />
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg px-4" 
                >
                  <a href="mailto:info@naikkelas.id"><Mail size={16} /></a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Layanan</h4>
            <ul className="space-y-2">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2025 Naik Kelas. All rights reserved.
            </p>
            
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl pulse-cta"
              asChild
            >
              <a href="#kontak">Mulai Konsultasi Gratis</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
