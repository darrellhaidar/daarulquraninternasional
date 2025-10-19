import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_school_campus_hero_image_8db2d673.png";
import scienceLabImage from "@assets/generated_images/Students_in_science_lab_39857612.png";
import libraryImage from "@assets/generated_images/School_library_study_area_028af3d7.png";
import sportsImage from "@assets/generated_images/Students_playing_sports_61f00f03.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
            SMA Daarul Qur'an Internasional
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Menciptakan generasi yang Berakhlak mulia, Religius, dan Berwawasan Global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" className="text-lg" asChild>
                <a data-testid="link-learn-more">
                  Lebih Lanjut
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <a data-testid="link-apply-today">Daftar Sekarang</a>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-features-title">
              Mengapa Memilih Daarul Qur'an?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              di Daarul Qur'an,  siswa tidak hanya belajar kurikulum akademis, tetapi juga mengintegrasikan nilai-nilai Qur'ani dalam kehidupan sehari-hari. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate transition-transform" data-testid="card-feature-academic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Riwayat Prestasi</h3>
                <p className="text-muted-foreground">
                  SMA Daarul Qur'an Internasional telah meraih berbagai prestasi dalam bidang akademik dan non-akademik. Mulai dari Marching Band, Robotika, Olimpiade Sains, Public Speaking, MTQ dan lain lain
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-transform" data-testid="card-feature-teachers">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Kurikulum</h3>
                <p className="text-muted-foreground">
                  Hadir dengan Kurikulum pemerintah yang menunjang Pembelajaran Diknas, Kurikulum Tahfizh Daarul Qur'an yang hadir untuk menunjang Pembelajaran Tahfizhul Qur'an. 
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-transform" data-testid="card-feature-facilities">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Lulusan Bersertifikasi Nasional</h3>
                <p className="text-muted-foreground">
                  Dengan Lembaga Sertifikasi Profesi Daarul Qur'an yang terintegrasi dengan Badan Nasional Sertifikasi Profesi (BNSP). Siswa dapat mengikuti sertifikasi Pengajar Al - Qur'an yang diakui secara nasional.  
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-transform" data-testid="card-feature-programs">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Guru Guru berkompeten</h3>
                <p className="text-muted-foreground">
                  Dengan Guru - Guru yang berkompeten, SMA Daarul Qur'an Internasional dapat memberikan pembelajaran yang berkualitas dan berkesinambungan. Serta dengan Para Masyaikh timur tengah yang Bersanad dan Ahli dalam Ilmu Qira'at dan Tajwid. 
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-programs-title">
              Program Kami
            </h2>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-elevate transition-transform" data-testid="card-program-science">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={scienceLabImage}
                  alt="Science program with students in laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-3">Beragam Ekstrakulikuler</h3>
                <p className="text-muted-foreground mb-4">
                  Di Daarul Qur'an, siswa dapat mengikuti berbagai ekstrakulikuler yang menunjang minat dan kegiatan mereka. Dengan segudang prestasi yang telah diraih. Dari tingkat Nasional hingga Internasional. 
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full" asChild>
                    <a data-testid="link-program-science">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate transition-transform" data-testid="card-program-library">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={libraryImage}
                  alt="Library and humanities program"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-3">Program Non - Akademik</h3>
                <p className="text-muted-foreground mb-4">
                  Selain fokus pada potensi akademik, sekolah ini juga menekankan pengembangan Tahfizh, IT, dan penguasaan Bahasa (Arab dan Inggris).
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full" asChild>
                    <a data-testid="link-program-arts">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate transition-transform" data-testid="card-program-sports">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sportsImage}
                  alt="Athletics and sports program"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-3">Berbagai Ekskul Fisik dan Olahraga</h3>
                <p className="text-muted-foreground mb-4">
                  di Daarul Qur'an. Siswa dapat mengembangkan bakat dan minat mereka dalam mengikuti berbagai ekstrakulikuler fisik dan olahraga dengan Fasilitas yang lengkap dan emadai. 
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full" asChild>
                    <a data-testid="link-program-sports">
                      Lebih Lanjut
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-title">
            Siap untuk Bergabung?          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Jadilah bagian dari Daarul Qur'an dan mewujudkan Dream Daqu 5 Benua. 
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white text-primary hover:bg-white/90 border-white"
              asChild
            >
              <a data-testid="link-cta-apply">
                Memulai Pendaftaran. 
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
