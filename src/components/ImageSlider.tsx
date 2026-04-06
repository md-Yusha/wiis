import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideData = {
  url: string;
  title: string;
  description: string;
};

const slides: SlideData[] = [
  {
    url: "/w1.jpg",
    title: "Excellence in Education",
    description: "Providing a balanced academic and Islamic education",
  },
  {
    url: "/w2.jpg",
    title: "Islamic Values",
    description: "Nurturing faith, character and moral values",
  },
  {
    url: "/sch.png",
    title: "Modern Facilities",
    description: "State-of-the-art learning environments",
  },
  {
    url: "/playarea.png",
    title: "Play Area",
    description: "Creating a safe and fun environment for children",
  },
  {
    url: "schoolplan.png",
    title: "School Planning",
    description: "Committed to the highest standards of education",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // Track image load state

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setImageLoaded(false); // Start loading next image
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setImageLoaded(false); // Start loading previous image
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setImageLoaded(false); // Start loading selected image
    setCurrentIndex(slideIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    setLoaded(true);
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [currentIndex]);

  // Preload image and only show after loaded
  useEffect(() => {
    setImageLoaded(false);
    const img = new window.Image();
    img.src = slides[currentIndex].url;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [currentIndex]);

  return (
    <div className="h-screen w-full relative group overflow-hidden">
      {/* Background Image with fade transition */}
      <div
        className="w-full h-full absolute top-0 left-0 transition-opacity duration-700 brightness-[0.65]"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: imageLoaded ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Optionally, show a loader while image is loading */}
      {!imageLoaded && (
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/30 z-10">
          {/* You can replace this with your Loader component if desired */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-60" />
        </div>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-20" />

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 font-serif
                         ${
                           loaded && imageLoaded
                             ? "animate-slide-down"
                             : "opacity-0"
                         }`}
          >
            {slides[currentIndex].title}
          </h1>
          <p
            className={`text-lg md:text-xl mb-8
                       ${
                         loaded && imageLoaded
                           ? "animate-slide-up"
                           : "opacity-0"
                       }`}
          >
            {slides[currentIndex].description}
          </p>
          <div
            className={`${
              loaded && imageLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <button
              className="bg-school-blue hover:bg-school-dark text-white font-bold py-3 px-8 rounded-full 
                        shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-40">
        <button
          onClick={goToPrevious}
          className="p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-40">
        <button
          onClick={goToNext}
          className="p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-50">
        <div className="flex justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer w-3 h-3 rounded-full transition-all 
                         ${
                           currentIndex === slideIndex
                             ? "bg-white scale-125"
                             : "bg-white/50"
                         }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
