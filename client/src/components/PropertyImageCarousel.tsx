import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";

interface PropertyImageCarouselProps {
  images: string[];
  youtubeUrl?: string;
  propertyTitle: string;
}

export default function PropertyImageCarousel({ 
  images, 
  youtubeUrl, 
  propertyTitle 
}: PropertyImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Combine images with YouTube video (if available)
  const allItems = [...images];
  if (youtubeUrl) {
    allItems.push('youtube');
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === allItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openYouTubeVideo = () => {
    if (youtubeUrl) {
      window.open(youtubeUrl, '_blank');
    }
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0]
    console.log(videoId)
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="relative">
      <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100">
        {allItems[currentIndex] === 'youtube' && youtubeUrl ? (
          <div 
            className="relative w-full h-full bg-cover bg-center cursor-pointer group"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${getYouTubeThumbnail(youtubeUrl)}')`
            }}
            onClick={openYouTubeVideo}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 text-white p-4 rounded-full group-hover:bg-red-700 transition-colors">
                <Play className="h-8 w-8 fill-current" />
              </div>
            </div>
            <Badge className="absolute top-4 left-4 bg-red-600 text-white">
              <Play className="h-3 w-3 mr-1" />
              Video Tour
            </Badge>
            <Badge className="absolute top-4 right-4 bg-black/50 text-white">
              <ExternalLink className="h-3 w-3 mr-1" />
              YouTube
            </Badge>
          </div>
        ) : (
          <img
            src={allItems[currentIndex] as string}
            alt={`${propertyTitle} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Navigation Buttons */}
        {allItems.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {allItems.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {allItems.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {allItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {item === 'youtube' && youtubeUrl ? (
                <div 
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('${getYouTubeThumbnail(youtubeUrl)}')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-4 w-4 text-white fill-current" />
                  </div>
                </div>
              ) : (
                <img
                  src={item as string}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}