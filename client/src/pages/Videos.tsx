import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Selamat Datang di SMP - SMA Daarul Qur'an Internasinal",
    embedUrl: "https://www.youtube.com/embed/NXQNKLVEUw0?si=LigYRs-jkRhZkgrB",
    category: "Sekilas",
  },
  {
    id: 2,
    title: "Adiwiyata",
    embedUrl: "https://www.youtube.com/embed/xIiaO-FLpiQ",
    category: "Academics",
  },
  {
    id: 3,
    title: "Tour Area Pesantren Daqu",
    embedUrl: "https://www.youtube.com/embed/nkf4930BuLo?si=Vtvt80bWgfvKA7-y",
    category: "Tour",
  },
  {
    id: 4,
    title: "Marching Band Gemanadaqu",
    description: "di Istana Merdeka, 72th Dirgahayu Indonesia",
    embedUrl: "https://www.youtube.com/embed/j6LtLpd4FpU?si=6PlCAKGjLkLCPerF",
    category: "Prestasi",
  },
  {
    id: 5,
    title: "Marching Band Gemanadaqu",
    description: "Yeosu Marching Festival 2019",
    embedUrl: "https://www.youtube.com/embed/qWhbLAZccCE?si=gyJcEguCDTAgdWIv",
    category: "Prestasi",
  },
  {
    id: 6,
    title: "Perlepasan Kelulusan, Angkatan 2025",
    embedUrl: "https://www.youtube.com/embed/HhhkteSRDdA?si=q8oeMAY5tU9xLiwE",
    category: "Tentang Santri",
  },
  {
    id: 7,
    title: "Daarul Qur'an Festival Atsadamastha",
    embedUrl: "https://www.youtube.com/embed/zmHMxwATY4E?si=f9fMtr7sWvyKQ03-",
    category: "Event tahunan",
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-videos-title">
            Video Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Menunjukkan beberapa Arsip Video kami mulai dari Event Tahunan, Prestasi, Sekilas tentang Daarul Qur'an, dsb.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Card className="overflow-hidden shadow-xl" data-testid="card-featured-video">
              <div className="aspect-video bg-muted">
                <iframe
                  src={videos[0].embedUrl}
                  title={videos[0].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="iframe-featured-video"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-3">{videos[0].category}</Badge>
                <h2 className="font-serif text-3xl font-bold mb-3">{videos[0].title}</h2>
                <p className="text-lg text-muted-foreground">{videos[0].description}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold mb-2">Lebih Banyak</h2>
          </div>
            

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden hover-elevate transition-all group"
                data-testid={`card-video-${video.id}`}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {video.category}
                  </Badge>
                  <h3 className="font-semibold text-xl mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ingin Melihat lebih banyak ?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Jadwalkan Kunjungan untuk melihat lebih banyak video dan foto dari kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="http://wa.me/6282122277712">
              <Button asChild>
                <a data-testid="link-schedule-visit">Jadwalkan Survey</a>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
