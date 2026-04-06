import { useState } from "react";

const sampleImages = [
  {
    id: 1,
    title: "School Building",
    description: "School building image",
    image_url: "/sch.png",
  },
  {
    id: 2,
    title: "School Planning",
    description: "School planning image",
    image_url: "/schoolplan.jpg",
  },
  {
    id: 3,
    title: "kids",
    description: "Kids showcasing things they learnt",
    image_url: "/w1.jpg",
  },
  {
    id: 4,
    title: "Happy kids",
    description: "Happy kids image",
    image_url: "/w2.jpg",
  },
];

const GalleryPage = () => {
  const [images, setImages] = useState(sampleImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminAuth") === "true"
  );
  // For upload
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [form, setForm] = useState({ title: "", description: "", image: null });

  // Logout handler for admin
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAdmin(false);
    window.alert("Logged out successfully."); // Replace with toast if you have a toast system
  };

  const handleHover = (idx) => {
    // For future animation logic if needed
  };

  const handleClick = (img) => {
    setSelected(img);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelected(null);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError("");
    try {
      // Check if image is selected
      if (!form.image) {
        throw new Error("Please select an image");
      }

      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("image", form.image);

      // Add admin auth header
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-admin-auth": "true",
        },
      };

      console.log("Uploading image to:", "/api/gallery");
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: data,
        ...config,
      });
      const resData = await res.json();
      console.log("Upload response:", resData);

      setImages((imgs) => [resData, ...imgs]);
      setForm({ title: "", description: "", image: null });
      // Reset the file input
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      console.error("Upload error:", err);
      setUploadError(
        err.message || "Failed to upload image. Please try again."
      );
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      {" "}
      {/* pt-24 ensures Navbar is not overlapped */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-serif mb-8 text-center text-school-dark">
          School Gallery
        </h1>
        {images.length === 0 ? (
          <div className="text-center text-gray-500 py-24 text-xl">
            No images in the gallery yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 hover:z-10 transition duration-300 cursor-pointer group relative"
                onMouseEnter={() => handleHover(img.id)}
                onClick={() => handleClick(img)}
              >
                <img
                  src={img.image_url}
                  alt={img.title}
                  className="w-full h-48 object-cover object-center group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-bold">View</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for enlarged image */}
        {modalOpen && selected && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full mx-4 overflow-hidden">
              <img
                src={selected.image_url}
                alt={selected.title}
                className="w-full md:w-2/3 h-96 object-cover object-center"
              />
              <div className="p-8 flex flex-col justify-center md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
                <p className="text-gray-700 mb-4">{selected.description}</p>
                <button
                  onClick={handleModalClose}
                  className="mt-auto bg-school-blue hover:bg-school-dark text-white font-bold py-2 px-6 rounded-full shadow-md transition"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="fixed inset-0" onClick={handleModalClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
