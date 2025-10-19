import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl font-bold">SMA Daarul Qur'an Internasional</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menciptakan generasi yang Berakhlak mulia, Religius, dan Berwawasan Global.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <Button variant="ghost" className="justify-start w-full" asChild>
                  <a data-testid="link-footer-home">Halaman Utama</a>
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="ghost" className="justify-start w-full" asChild>
                  <a data-testid="link-footer-home">Tentang Kami</a>
                </Button>
              </Link>
              <Link href="#video">
                <Button variant="ghost" className="justify-start w-full" asChild>
                  <a data-testid="link-footer-home">Video</a>
                </Button>
              </Link>
              <Link href="#gallery">
                <Button variant="ghost" className="justify-start w-full" asChild>
                  <a data-testid="link-footer-home">Gallery</a>
                </Button>
              </Link>
              
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Jl. Thamrin, RT.001/RW.005, Ketapang, Kec. Cipondoh, Kota Tangerang, Banten 15148</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">0821 222 777 12</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@daqu.sch.id</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-social-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-social-youtube">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Darrell Haidar Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
