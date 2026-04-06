import { useNavigate } from "react-router-dom";

const sampleImages = [
  { id: 1, title: "My First Photo", image_url: "/w1.jpg" },
  { id: 2, title: "School Building", image_url: "/w2.jpg" },
  { id: 3, title: "My First Photo", image_url: "/sch.png" },
  { id: 4, title: "School Building", image_url: "/schoolplan.png" },
];

const GalleryPreview = () => {
  const navigate = useNavigate();
  const images = sampleImages.slice(0, 4);
  // Removed dynamic fetch; using static sampleImages

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-school-dark">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={img.image_url}
                alt={img.title}
                className="w-full h-40 object-cover object-center hover:brightness-90 transition duration-300"
              />
            </div>
          ))}
        </div>
        <button
          className="bg-school-neon backdrop-blur-sm text-black hover:bg-school-light hover:scale-105  font-bold py-2 px-6 rounded-full shadow-lg transition"
          onClick={() => navigate("/gallery")}
        >
          View Full Gallery
        </button>
      </div>
    </section>
  );
};

export default GalleryPreview;
