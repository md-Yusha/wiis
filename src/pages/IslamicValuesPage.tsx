import { useEffect } from "react";
import IslamicValuesObjects from "@/components/three/IslamicValuesObjects";
import { BookOpen, Moon, Heart, BookText } from "lucide-react";

const IslamicValuesPage = () => {
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
            Islamic Values
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Nurturing faith, character and moral excellence in every student
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue">
              Our Islamic Foundation
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              At Whitefield International Islamic School, Islamic values form
              the foundation of our educational approach. We believe that a
              strong moral and spiritual foundation is essential for the
              holistic development of our students. Our Islamic program is
              designed to instill core values, nurture faith, and develop strong
              character, all while pursuing academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Quran Memorization */}
      <section id="quran-section" className="py-16 md:py-24 bg-school-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue flex items-center">
                <BookOpen className="mr-4 text-school-blue" />
                Quran Memorization Program
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our comprehensive Quran memorization program, Miftahul Quran,
                offers students the opportunity to connect with the words of
                Allah in a meaningful way. The program is structured to
                accommodate different levels of proficiency and learning speeds.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-3 text-lg">
                <li>Daily Quran recitation and memorization sessions</li>
                <li>Qualified Huffaz as instructors</li>
                <li>Tajweed rules and proper pronunciation</li>
                <li>Understanding the meaning and context of verses</li>
                <li>Regular assessments and celebrations of achievements</li>
              </ul>
              <p className="text-gray-700 text-lg bg-white p-4 rounded-xl shadow-sm">
                Students who show exceptional dedication and ability have the
                option to join our intensive Hifz program, where they can work
                toward memorizing the entire Quran.
              </p>
            </div>
            <div className="h-80 reveal bg-white p-4 rounded-2xl shadow-lg">
              {/* 3D Quran Stand appears here */}
              <div className="canvas-element">
                {/* This element will be controlled by IslamicValuesObjects component */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer and Worship */}
      <section id="prayers-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-80 reveal bg-gray-50 p-4 rounded-2xl shadow-lg">
              {/* 3D Crescent Moon appears here */}
              <div className="canvas-element">
                {/* This element will be controlled by IslamicValuesObjects component */}
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue flex items-center">
                <Moon className="mr-4 text-school-blue" />
                Prayer and Worship
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                At WISS, we integrate daily prayers into our schedule, teaching
                students the importance of regular worship and connection with
                Allah. Our prayer halls provide a peaceful environment for
                spiritual practice.
              </p>
              <div className="space-y-6 mb-4">
                <div className="bg-school-light p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Daily Prayers
                  </h3>
                  <p className="text-gray-600">
                    Students and staff observe Zuhr prayer together during
                    school hours, with proper wudu facilities and separate
                    prayer areas for boys and girls.
                  </p>
                </div>
                <div className="bg-school-light p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Jummah Prayer
                  </h3>
                  <p className="text-gray-600">
                    Special arrangements for Friday prayers with visiting
                    scholars who deliver age-appropriate khutbahs for the
                    students.
                  </p>
                </div>
                <div className="bg-school-light p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Islamic Festivals
                  </h3>
                  <p className="text-gray-600">
                    We celebrate Islamic festivals and important dates in the
                    Islamic calendar with special programs and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Building */}
      <section
        id="character-section"
        className="py-16 md:py-24 bg-school-light"
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue flex items-center">
                <Heart className="mr-4 text-school-blue" />
                Character Building
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our Tazkiya program focuses on character development through
                Islamic principles. We believe that good character is the
                foundation of a successful life and a strong community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Adab (Manners)
                  </h3>
                  <p className="text-gray-600">
                    Learning proper Islamic etiquette and behavior in different
                    situations
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Akhlaq (Ethics)
                  </h3>
                  <p className="text-gray-600">
                    Developing moral reasoning and ethical decision-making
                    skills
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Responsibility
                  </h3>
                  <p className="text-gray-600">
                    Taking ownership of one's actions and their consequences
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-school-dark">
                    Community Service
                  </h3>
                  <p className="text-gray-600">
                    Regular opportunities to serve others and make a positive
                    impact
                  </p>
                </div>
              </div>
            </div>
            <div className="h-80 reveal bg-white p-4 rounded-2xl shadow-lg">
              {/* 3D Prayer Mat appears here */}
              <div className="canvas-element">
                {/* This element will be controlled by IslamicValuesObjects component */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Dress Code */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue flex items-center justify-center">
              <BookText className="mr-4 text-school-blue" />
              Islamic Dress Code
            </h2>
            <p className="text-gray-700 text-lg">
              We follow an Islamic dress code that emphasizes modesty and
              identity, helping students understand and embrace their Islamic
              heritage while developing confidence in their faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <div className="bg-school-light p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center text-school-dark">
                Girls' Uniform
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-3">
                <li>School uniform with appropriate length and looseness</li>
                <li>Hijab for all female students</li>
                <li>
                  Comfortable and modest sportswear for physical activities
                </li>
              </ul>
              <p className="text-gray-600 italic text-center bg-white p-4 rounded-lg">
                "Say to the believing women that they should lower their gaze
                and guard their modesty..." (Quran 24:31)
              </p>
            </div>

            <div className="bg-school-light p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center text-school-dark">
                Boys' Uniform
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-3">
                <li>School uniform with full-length trousers</li>
                <li>Skull caps (topi/kufi) for male students</li>
                <li>Modest sportswear for physical education</li>
              </ul>
              <p className="text-gray-600 italic text-center bg-white p-4 rounded-lg">
                "Children of Adam, wear your beautiful apparel at every place of
                worship..." (Quran 7:31)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insert the 3D objects component to control the animations */}
      <IslamicValuesObjects
        sectionId="quran-section"
        section2Id="prayers-section"
        section3Id="character-section"
      />
    </div>
  );
};

export default IslamicValuesPage;
