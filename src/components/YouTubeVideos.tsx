import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

// Sample video IDs - these will be replaced with actual YouTube video IDs
const sampleVideos = [
  {
    id: 1,
    title: "Haj Celebration 2025",
    videoId: "nqFYL5tiRf8", // Extracted from the YouTube URL
  },
  { id: 2, title: "Open Science Day 2024", videoId: "k74fjAK75Cw" },
  { id: 3, title: "Calligraphy Session", videoId: "R1JXJi2nrE0" },
  { id: 4, title: "Allah Made Everything", videoId: "wngIkH0bXVE" },
];

const YouTubeVideos = () => {
  const navigate = useNavigate();
  const videos = sampleVideos.slice(0, 4);

  // YouTube channel URL - replace with actual URL
  const youtubeChannelUrl = "https://www.youtube.com/@WhitefieldIISchool";

  return (
    <section className="py-24 px-4 lg:px-8 bg-school-light w-full overflow-x-hidden">
      <div className="max-w-none w-full px-2 md:px-2 mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-school-dark mb-4">
            Featured Videos
          </h2>
          <p className="text-gray-600 text-lg">
            Watch our latest events, activities, and educational content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 w-full">
          {videos.map((video) => (
            <div
              key={video.id}
              className="reveal glass-card p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300 bg-white/80 shadow-lg"
            >
              <div className="aspect-video w-full mb-6 overflow-hidden rounded-xl">
                {video.videoId === "placeholder2" ||
                video.videoId === "placeholder3" ||
                video.videoId === "placeholder4" ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">YouTube Video Placeholder</p>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-school-dark">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-full 
                    transition duration-300 hover:bg-red-500 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Visit Our YouTube Channel
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
