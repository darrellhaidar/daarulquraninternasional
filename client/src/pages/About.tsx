import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Eye, Award, Users, BookOpen, Globe, Heart } from "lucide-react";
import classroomImage from "@assets/generated_images/Classroom_learning_environment_a53089ee.png";
import techLabImage from "@assets/generated_images/Computer_technology_lab_91bec67d.png";
import graduationImage from "@assets/generated_images/Graduation_celebration_moment_669a752c.png";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-about-title">
            Tentang Kami
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" data-testid="badge-our-story">Our Story</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                SMA Daarul Qur'an Internasional
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                   adalah sekolah menengah atas yang menggabungkan kurikulum nasional dengan pembinaan tahfizh Al-Qur'an dan pengembangan karakter Islami secara intensif. Sekolah ini memiliki fokus pada prestasi akademik, penguasaan tahfizh, IT, serta bahasa Arab dan Inggris, serta terintegrasi dengan lingkungan pesantren yang nyaman. 
                </p>
                <p>
                  Tersedia dengan Fullday dan Boarding School ( Tergintegrasi dengan Pesantren Tahfizh Daarul Qur'an ). Keunggulan nya diiantara lain adalah dengan Lembaga Sertifikasi Profesi Daarul Qur'an yang terintegrasi dengan Badan Nasional Sertifikasi Profesi ( BNSP ), Diakui sebagai salah satu sekolah Penggerak Kurikulum Merdeka. 
                </p>
    
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={classroomImage}
                alt="Modern classroom environment"
                className="rounded-xl shadow-lg w-full aspect-square object-cover"
                data-testid="img-about-classroom"
              />
              <img
                src={techLabImage}
                alt="Technology laboratory"
                className="rounded-xl shadow-lg w-full aspect-square object-cover mt-8"
                data-testid="img-about-tech"
              />
              <img
                src={graduationImage}
                alt="Graduation ceremony"
                className="rounded-xl shadow-lg w-full aspect-square object-cover -mt-8"
                data-testid="img-about-graduation"
              />
              <img
                src={classroomImage}
                alt="Student learning"
                className="rounded-xl shadow-lg w-full aspect-square object-cover"
                data-testid="img-about-learning"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20" data-testid="card-mission">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">Misi</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi lembaga Islam yang melahirkan generasi Qur'ani yang berakhlak mulia dan berdaya saing global. Misinya adalah mengembangkan program dakwah inovatif, mendirikan lembaga pendidikan unggul berbasis tahfizhul Qur'an, menggerakkan masyarakat untuk peduli melalui zakat dan infak, serta membangun usaha yang mendorong ekonomi umat. 

                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20" data-testid="card-vision">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">Visi</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi lembaga Islam yang melahirkan generasi Qur'ani yang berakhlak mulia dan berdaya saing global.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-achievements-title">
              Pencapaian Kami
            </h2>
           
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-years">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center" data-testid="stat-students">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">1000+</div>
              <div className="text-lg text-muted-foreground">Lulusan yang diterima di Kampus Ternama di luar dan dalam negeri</div>
            </div>
            <div className="text-center" data-testid="stat-faculty">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10</div>
              <div className="text-lg text-muted-foreground">Jenis Ekstrakulikuler</div>
            </div>
            <div className="text-center" data-testid="stat-graduates">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">A</div>
              <div className="text-lg text-muted-foreground">Akreditasi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
