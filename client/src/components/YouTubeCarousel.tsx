import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import type { YouTubeVideo } from "@/data/properties";

interface YouTubeCarouselProps {
  videos: YouTubeVideo[];
}

export default function YouTubeCarousel({ videos }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  if (videos.length === 0) return null;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(currentIndex, currentIndex + 3).map((video, index) => {
          const actualIndex = (currentIndex + index) % videos.length;
          const actualVideo = videos[actualIndex];
          
          return (
            <Card 
              key={actualVideo.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openVideo(actualVideo.url)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={actualVideo.thumbnail}
                  alt={actualVideo.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'rotate(0deg)', transformOrigin: 'center'}}

                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-red-600 text-white p-3 rounded-full group-hover:bg-red-700 transition-colors">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <ExternalLink className="h-3 w-3 inline mr-1" />
                  YouTube
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {actualVideo.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {actualVideo.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      {videos.length > 3 && (
        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Dots Indicator */}
      {videos.length > 3 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(videos.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 3) === index 
                  ? 'bg-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}