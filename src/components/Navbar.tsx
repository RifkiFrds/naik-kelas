import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Impor useLocation dan Link
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Dapatkan lokasi saat ini
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan Bisnis", href: "#layanan-bisnis" },
    { label: "Kemitraan", href: "#kemitraan" },
    { label: "Layanan Umum", href: "#layanan-umum" },
    { label: "Karir", href: "#karir" },
    { label: "Kontak", href: "#kontak" },
  ];

  // Fungsi untuk membuat tautan yang benar
  const getLinkUrl = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">
                NK
              </span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
              Naik Kelas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getLinkUrl(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href={getLinkUrl("#kontak")}>Konsultasi Gratis</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getLinkUrl(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
                asChild
              >
                <a href={getLinkUrl("#kontak")} onClick={() => setIsMobileMenuOpen(false)}>
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;