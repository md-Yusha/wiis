import SchoolLogo from "./SchoolLogo";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [isFading, setIsFading] = useState(false);
  const startTime = useState(() => Date.now())[0];

  useEffect(() => {
    const MIN_DURATION = 3000; // Minimum second duration
    const FADE_DURATION = 1000; // Fade out animation duration

    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= MIN_DURATION) {
        setIsFading(true);
        setTimeout(() => {
          onLoadingComplete?.();
        }, FADE_DURATION);
      } else {
        // Wait for the remaining time to reach minimum duration
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            onLoadingComplete?.();
          }, FADE_DURATION);
        }, MIN_DURATION - elapsedTime);
      }
    };

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      checkLoadingComplete();
    } else {
      // Wait for the page to load
      window.addEventListener("load", checkLoadingComplete);
    }

    return () => {
      window.removeEventListener("load", checkLoadingComplete);
    };
  }, [onLoadingComplete, startTime]);

  return (
    <>
      <style>
        {`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>

      <div
        className={`fixed inset-0 bg-[#1A2721] flex items-center justify-center z-[9999] transition-opacity duration-500 ${
          isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-[600px] mx-auto px-4">
          <div className="animate-pulse w-full flex justify-center items-center">
            <div className="block sm:hidden w-full">
              <SchoolLogo
                size="medium"
                variant="modern"
                className="flex justify-center"
              />
            </div>
            <div className="hidden sm:block w-full">
              <SchoolLogo
                size="xl"
                variant="modern"
                className="flex justify-center"
              />
            </div>
          </div>
          <div className="mt-8 sm:mt-12 flex justify-center w-full">
            <div className="w-full max-w-[240px] sm:max-w-[400px]">
              <div className="h-1.5 sm:h-2 w-full bg-[#CCFF99]/20 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-[#CCFF99] animate-[loading_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
