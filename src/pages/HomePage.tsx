import { useEffect } from "react";
import ImageSlider from "@/components/ImageSlider";
import HomeBackground from "@/components/three/HomeBackground";
import { Book, GraduationCap, Heart, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GalleryPreview from "@/components/GalleryPreview";
import YouTubeVideos from "@/components/YouTubeVideos";

const HomePage = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("revealed");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      {/* 3D Background */}
      <HomeBackground />

      {/* Hero Section with Slider */}
      <section className="relative">
        <ImageSlider />
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto reveal glass-card p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-white/80">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-school-dark">
              Welcome to Whitefield International Islamic School
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl">
              At Whitefield International Islamic School, we believe in
              nurturing young minds with a perfect blend of academic excellence
              and Islamic values. Our school provides a supportive environment
              where students can grow intellectually, spiritually, and socially.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-school-neon text-school-dark font-bold py-4 px-8 rounded-full 
                      transition duration-300 hover:bg-school-light hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-school-light w-full overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-school-dark mb-4">
              Why Choose Our School?
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the unique advantages of our educational approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academic Excellence */}
            <div className="reveal glass-card p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300 bg-white/80">
              <div className="w-16 h-16 bg-school-neon/60 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-school-dark/80" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Our curriculum combines modern education with Islamic values,
                preparing students for both academic success and spiritual
                growth.
              </p>
            </div>

            {/* Islamic Values */}
            <div className="reveal glass-card p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300 bg-white/80">
              <div className="w-16 h-16 bg-school-neon/60 rounded-full flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-school-dark/80" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Islamic Values
              </h3>
              <p className="text-gray-600">
                We instill strong Islamic values and character development,
                creating well-rounded individuals who are proud of their faith.
              </p>
            </div>

            {/* Community */}
            <div className="reveal glass-card p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300 bg-white/80">
              <div className="w-16 h-16 bg-school-neon/60 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-school-dark/80" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Supportive Community
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of students, parents, and educators
                working together to create an inspiring learning environment.
              </p>
            </div>

            {/* Character Development */}
            <div className="reveal glass-card p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300 bg-white/80">
              <div className="w-16 h-16 bg-school-neon/60 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-school-dark/80" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Character Development
              </h3>
              <p className="text-gray-600">
                We focus on developing strong moral character, leadership
                skills, and a sense of responsibility in our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between glass-card p-12 rounded-3xl backdrop-blur-sm bg-white/80">
            <div className="mb-8 md:mb-0 md:w-2/3 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">
                Ready to give your child the best education?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The admissions for the new academic year are now open. Contact
                us today to schedule a visit or learn more about the application
                process.
              </p>
            </div>
            <div className="reveal">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-school-neon text-school-dark font-bold py-4 px-8 rounded-full 
                         hover:bg-school-light hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YouTubeVideos />

      {/* Gallery Preview Section */}
      <GalleryPreview />
    </>
  );
};

export default HomePage;
