import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import scienceLabImage from "@assets/generated_images/Students_in_science_lab_39857612.png";
import libraryImage from "@assets/generated_images/School_library_study_area_028af3d7.png";
import sportsImage from "@assets/generated_images/Students_playing_sports_61f00f03.png";
import classroomImage from "@assets/generated_images/Classroom_learning_environment_a53089ee.png";
import theaterImage from "@assets/generated_images/School_theater_performance_e6f09f8e.png";
import techLabImage from "@assets/generated_images/Computer_technology_lab_91bec67d.png";
import graduationImage from "@assets/generated_images/Graduation_celebration_moment_669a752c.png";
import campusImage from "@assets/generated_images/Modern_school_campus_hero_image_8db2d673.png";

const galleryImages = [
  { id: 1, src: campusImage, title: "I❤️DAQU, Landmark Daarul Qur'an", category: "School" },
  { id: 2, src: scienceLabImage, title: "Tim Robotik Daqu, Saat International Youth Robot Competition di Daejeon, Korea.", category: "Prestasi" },
  { id: 3, src: libraryImage, title: "Para Asaatidz berfoto di Perpustakaan", category: "Fasilitas" },
  { id: 4, src: sportsImage, title: "Tim Futsal Daarul Qur'an", category: "Olahraga" },
  { id: 5, src: classroomImage, title: "Penghargaan terhadap Siswa Terbaik", category: "Akademik" },
  { id: 6, src: theaterImage, title: "Marching Band Gemanadaqu", category: "Prestasi" },
  { id: 7, src: techLabImage, title: "Lab Komputer", category: "Akademik" },
  { id: 8, src: graduationImage, title: "Wisuda Purna Santri Akhir", category: "Event" },
];

const categories = ["All", "School", "Akademik", "Olahraga", "Event", "Prestasi"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setLightboxImage(id);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-gallery-title">
            Gallery Foto
          </h1>
          
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm hover-elevate active-elevate-2 ${
                  selectedCategory === category ? "" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-category-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer hover-elevate transition-all group"
                onClick={() => openLightbox(image.id)}
                data-testid={`card-gallery-${image.id}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <Badge variant="secondary" className="text-xs">{image.category}</Badge>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage !== null && currentLightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
            data-testid="button-lightbox-close"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div
            className="max-w-6xl max-h-[90vh] mx-auto px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              data-testid="img-lightbox-current"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{currentLightboxImage.title}</h3>
              <Badge variant="outline" className="border-white text-white">
                {currentLightboxImage.category}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
