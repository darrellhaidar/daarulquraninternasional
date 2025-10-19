import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Halaman Utama" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/gallery", label: "Gallery" },
    { path: "/videos", label: "Video" },
    { path: "/contact", label: "Kontak" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <a className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3 cursor-pointer" data-testid="link-home-logo">
                <GraduationCap className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"}`} />
                <span className={`font-serif text-xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
                  SMA Daarul Qur'an Internasional
                </span>
              </a>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Button
                    variant="ghost"
                    className={`${
                      location === link.path
                        ? isScrolled
                          ? "bg-primary/10 text-primary"
                          : "bg-white/20 text-white"
                        : isScrolled
                        ? "text-foreground"
                        : "text-white"
                    }`}
                    asChild
                  >
                    <a data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</a>
                  </Button>
                </Link>
              ))}
            </div>

            <Link href="/contact">
              <Button className="hidden md:flex" asChild>
                <a data-testid="link-apply-now">Daftar Sekarang</a>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-20">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  className="w-full justify-start text-lg"
                  asChild
                >
                  <a data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</a>
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4" asChild>
                <a data-testid="link-mobile-apply">Daftar Sekarang</a>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
