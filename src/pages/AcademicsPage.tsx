import { useEffect } from "react";
import AcademicsModel from "@/components/three/AcademicsModel";
import {
  BookOpen,
  Beaker,
  Laptop,
  Calculator,
  Languages,
  PenTool,
} from "lucide-react";

const AcademicsPage = () => {
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
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-school-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-school-neon">
            Academic Excellence
          </h1>
          <p className="text-xl max-w-2xl mx-auto ">
            Our curriculum is designed to challenge students intellectually
            while nurturing their curiosity and love for learning
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue">
                CBSE Curriculum
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                At Whitefield International Islamic School, we follow the
                Central Board of Secondary Education (CBSE) curriculum, which is
                known for its balanced approach to education, emphasizing both
                theoretical knowledge and practical application.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                The CBSE curriculum helps students develop:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-3 text-lg">
                <li>Critical thinking and analytical skills</li>
                <li>Strong communication abilities</li>
                <li>A well-rounded understanding of core subjects</li>
                <li>Project-based learning experience</li>
                <li>Preparation for higher education globally</li>
              </ul>
            </div>

            <div className="h-80 reveal bg-gray-50 p-4 rounded-2xl shadow-lg">
              <div className="h-full w-full">
                <img
                  alt=""
                  src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2025/01/cbse-recruitment-2025-1-1735729930.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-6">
              Our Teaching Approach
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              We believe in a holistic approach to education that combines
              traditional teaching methods with modern pedagogical practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <PenTool className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                We recognize that each student has unique strengths and learning
                styles. Our teachers customize their approach to meet individual
                student needs.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Inquiry-Based Learning
              </h3>
              <p className="text-gray-600">
                We encourage students to ask questions, investigate topics, and
                develop solutions, fostering curiosity and independent thinking.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Languages className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-school-dark">
                Bilingual Approach
              </h3>
              <p className="text-gray-600">
                Our curriculum includes both English and Arabic, preparing
                students to be proficient in multiple languages and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-6">
              Our Learning Facilities
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              State-of-the-art facilities that enhance the learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal bg-gray-50 p-4 rounded-2xl shadow-lg">
              <div className="h-80 w-full">
                <iframe
                  id="home-map"
                  width="100%"
                  height="500"
                  scrolling="no"
                  src="https://www.arcgis.com/home/webscene/viewer.html?webscene=6682f70b89c4483f88e8df839a011c1e&amp;ui=min"
                ></iframe>
              </div>
            </div>

            <div className="space-y-8 reveal">
              {/* Facility 1 */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                  <Beaker className="text-school-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-school-dark">
                    Science Laboratories
                  </h3>
                  <p className="text-gray-600">
                    Fully equipped physics, chemistry, and biology labs with
                    modern instruments for practical experiments and scientific
                    exploration.
                  </p>
                </div>
              </div>

              {/* Facility 2 */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                  <Laptop className="text-school-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-school-dark">
                    Computer Lab
                  </h3>
                  <p className="text-gray-600">
                    Advanced computer facilities with high-speed internet access
                    and modern software for digital literacy and programming
                    courses.
                  </p>
                </div>
              </div>

              {/* Facility 3 */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                  <Calculator className="text-school-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-school-dark">
                    Smart Classrooms
                  </h3>
                  <p className="text-gray-600">
                    Interactive boards, digital projectors, and educational
                    technology tools that enhance the teaching and learning
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
