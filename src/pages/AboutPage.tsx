import { useEffect } from "react";
import { Award, BookOpen, Heart, Users } from "lucide-react";

const AboutPage = () => {
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
            About Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Whitefield International Islamic School's mission,
            vision, and values
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="text-5xl font-bold mb-6 font-serif text-school-blue">
                Our Story
              </h2>
              <p className="text-gray-700 mb-8 text-2xl">
                Whitefield International Islamic School was established in 2023
                with a vision to provide quality education that combines
                academic excellence with Islamic values. Our founders, a group
                of educators and community leaders, recognized the need for an
                educational institution that could nurture young Muslims
                intellectually, spiritually, and socially.
              </p>
              <p className="text-gray-700 mb-8 text-2xl">
                Starting with just a handful of students, our school has grown
                steadily, adding new programs and facilities to meet the needs
                of our diverse student body. Today, we are proud to be a leading
                Islamic school in Bangalore, known for our commitment to
                educational excellence and character development.
              </p>
              <p className="text-gray-700 mb-8 text-2xl">
                Throughout our journey, we have remained true to our founding
                principles: providing a well-rounded education that empowers
                students to succeed in this world while preparing them for the
                hereafter.
              </p>
            </div>
            <div className="reveal">
              <img
                src="/sch.png"
                alt="School Building"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-2">
              Mission, Vision & Values
            </h2>
            <p className="text-gray-600">
              The guiding principles behind everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-xl reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                To provide a balanced educational environment that nurtures
                academic excellence, Islamic knowledge, and character
                development, preparing students to be successful contributors to
                society and exemplary representatives of Islam.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-xl reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be a leading educational institution that empowers Muslim
                youth to achieve academic excellence, develop strong Islamic
                identity, and become compassionate leaders who positively impact
                their communities and the world.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-xl reveal">
              <div className="bg-school-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-school-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Our Values</h3>
              <p className="text-gray-600 text-center">
                We are guided by Islamic principles of excellence (Ihsan),
                integrity (Amanah), compassion (Rahma), respect (Ihtiram), and
                continuous learning (Iqra). These values permeate every aspect
                of our educational approach and community culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-2">
              Our Leadership Team
            </h2>
            <p className="text-gray-600">
              Meet the dedicated professionals guiding our school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-16 mx-8 md:mx-16">
            {/* Team Member 1 */}
            <div className="reveal flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="placeholder.svg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Mr. Bakrudeen Sir</h3>
                <p className="text-school-blue font-medium mb-4">
                  Founder and Chairperson
                </p>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    His story began with a simple yet powerful vision—one born
                    not from textbooks or educational degrees, but from lived
                    experience. Bakrudeen Sir, our founder and managing
                    director, didn’t come from a privileged background. His
                    childhood was shaped by scarcity and struggle. Raised in a
                    large family with limited means, he learned early what it
                    meant to go without, and yet, he carried with him a deep
                    desire to build something meaningful, not just for his
                    children, but for every parent who dreamt of raising their
                    children with both faith and knowledge. With hands-on
                    experience gained during his time at the Taj Group of Hotels
                    —from Civil, Plumbing, Electricals to carpentry, mechanics
                    and interior furnishing—Sir built more than just skill; he
                    built character. And when he moved to Bangalore in 2004, it
                    wasn’t comfort he was chasing—it was purpose. That purpose
                    took shape in the form of our school. Currently, Sir is the
                    head of Operations in his Self made company - Total Building
                    Solutions aimed at offering services in the construction and
                    interior domain. At the heart of everything he does is a
                    hadeeth that continues to guide his path:
                  </p>
                  <p className="text-md text-black/40 italic">
                    “Whoever travels a path in search of knowledge, Allah will
                    make easy for him a path to Paradise” (Sahih al-Bukhari,
                    Hadith 67).
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="reveal flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="placeholder.svg"
                  alt="Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Mrs. Shafiya Ma'am</h3>
                <p className="text-school-blue font-medium mb-4">
                  Co-Founder and Academic Director
                </p>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    Shafiya Ma’am is the Wife of Bakrudeen Sir and hails from
                    Nagercoil, Tamil Nadu. Her early education was rooted in
                    hometown, and her passion for Islamic knowledge truly shaped
                    her path. She went on to complete her studies in Islamic
                    Studies and Functional Arabic at Madrasathul Ayesha Siddiqa
                    in Kayalpatnam.
                  </p>
                  <p className="text-sm">
                    She currently serves as an Arabic teacher and has become an
                    integral part of our school’s learning environment,
                    especially in helping our students build a strong foundation
                    in Arabic and Deen.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="placeholder.svg"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold ">
                  Mrs. Mohammadi Ummatunnisa
                </h3>
                <h4 className="text-sm ">Alias Kausar Ma'am</h4>
                <p className="text-school-blue font-medium mb-4">
                  Headmistress
                </p>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    As the Headmistress, she leads the school with dedication,
                    vision, and a strong commitment to both educational quality
                    and Islamic values. She is a dedicated professional with a
                    passion for education and a commitment to fostering a
                    positive learning environment. She has extensive experience
                    in education and a deep understanding of the importance of a
                    strong educational foundation.{" "}
                  </p>
                  <p className="text-sm">
                    She also works for the welfare of the students and the
                    school community. Also has been a part of various social
                    welfare activities and initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="placeholder.svg"
                  alt="Academic Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold ">Ms. Sumayya</h3>
                <h4 className="text-sm "></h4>
                <p className="text-school-blue font-medium mb-4"></p>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores similique maxime perspiciatis at laborum magni
                    laudantium ad? Laboriosam nisi id dolor debitis sint tenetur
                    doloremque ratione eaque! Ea, illum eos!
                  </p>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem molestias sequi odio, accusamus consequuntur perferendis
                    illum tempora quam maiores dolorum amet est, sed porro dolor
                    illo vel! Quisquam, eius amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="placeholder.svg"
                  alt="School Secretary"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold ">Mr. Shujauddin</h3>
                <h4 className="text-sm "></h4>
                <p className="text-school-blue font-medium mb-4"></p>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio voluptas id accusantium similique quo iure, eos
                    quaerat, eaque harum sed fuga, odit nostrum vel aliquid nemo
                    neque cumque asperiores vitae?
                  </p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    molestias sequi odio, accusamus consequuntur perferendis
                    illum tempora quam maiores dolorum amet est, sed porro dolor
                    illo vel! Quisquam, eius amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-2">
              Our Facilities
            </h2>
            <p className="text-gray-600">
              State-of-the-art amenities that enhance learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9obl4JUEAHL-vWTOGbffyKVok13HZMr-Dw&s"
                alt="Library"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Library</h3>
                <p className="text-gray-600">
                  Our library houses thousands of books, digital resources, and
                  quiet study spaces to foster a love of reading and research.
                </p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://jbmsmartstart.in/wp-content/uploads/2024/01/Importance-of-Labs-in-School-For-Students.png"
                alt="Science Lab"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Science Laboratories</h3>
                <p className="text-gray-600">
                  Well-equipped physics, chemistry, and biology labs allow
                  students to conduct experiments and develop practical
                  scientific skills.
                </p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://live.staticflickr.com/3628/3307434170_d8b50b6c1b_b.jpg"
                alt="Prayer Hall"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prayer Halls</h3>
                <p className="text-gray-600">
                  Dedicated prayer spaces for boys and girls provide a peaceful
                  environment for daily prayers and spiritual reflection.
                </p>
              </div>
            </div>

            {/* Facility 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://t4.ftcdn.net/jpg/02/20/24/05/360_F_220240507_Z8WDjgJliVAL5i41G2WjQtAVkSC066lV.jpg"
                alt="Computer Lab"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Computer Lab</h3>
                <p className="text-gray-600">
                  Our computer lab features modern equipment and software,
                  preparing students for success in a digital world.
                </p>
              </div>
            </div>

            {/* Facility 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2036&auto=format&fit=crop"
                alt="Playground"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sports Facilities</h3>
                <p className="text-gray-600">
                  Outdoor playgrounds and indoor sports areas support physical
                  education, sports training, and healthy recreation.
                </p>
              </div>
            </div>

            {/* Facility 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://res.cloudinary.com/dqhwmrt6x/image/upload/t_oab_default_v2/v1568840778/orderandbliss/2019/craft-closet/DSC_4608.jpg"
                alt="Art Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Art & Activity Rooms</h3>
                <p className="text-gray-600">
                  Specialized spaces for art, music, and extracurricular
                  activities help develop creativity and discover new talents.
                </p>
              </div>
            </div>

            {/* Facility 7: Animal Farm */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://media.istockphoto.com/id/837901366/photo/chickens-riding-a-sheep.jpg?s=170667a&w=0&k=20&c=gA-iaH_9xJg-v1bgXQPOs1rOH-TkecamhsNJIhAj4xg="
                alt="Animal Farm"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Animal Farm</h3>
                <p className="text-gray-600">
                  Our on-campus animal farm provides students with hands-on
                  learning about nature, responsibility, and animal care,
                  fostering a love for the environment and living creatures.
                </p>
              </div>
            </div>

            {/* Facility 8: Separate Playgrounds */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://content.jdmagicbox.com/v2/comp/hyderabad/l8/040pxx40.xx40.200110154531.s5l8/catalogue/play-ground-fabrication-jula-bench-champapet-hyderabad-playground-equipment-manufacturers-41lg7yotqj.jpg"
                alt="Playground for kids"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Playground for kids</h3>
                <p className="text-gray-600">
                  We offer dedicated playgrounds for small kids, ensuring a safe
                  and comfortable environment for all students to enjoy physical
                  activities and sports.
                </p>
              </div>
            </div>

            {/* Facility 9: Transport Facilities */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://5.imimg.com/data5/CN/KW/NX/SELLER-1705300/school-bus-services-in-bengaluru.jpg"
                alt="Transport Facilities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Transport Facilities</h3>
                <p className="text-gray-600">
                  Our fleet of well-maintained school buses ensures safe and
                  reliable transportation for students across various routes in
                  the city.
                </p>
              </div>
            </div>

            {/* Facility 10: Canteen for Boys & Girls */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://www.goonawarra.vic.edu.au/uploaded_files/media/img_4050.jpg"
                alt="Canteen"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Canteen for Boys & Girls
                </h3>
                <p className="text-gray-600">
                  Separate canteen areas for boys and girls provide hygienic,
                  nutritious meals and snacks in a comfortable dining
                  environment.
                </p>
              </div>
            </div>

            {/* Facility 11: Good Environmental Area */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://www.usnews.com/object/image/0000016c-9bf9-d1ec-a97f-9bfb74420000/college-photo_30321.jpg?update-time=&size=responsive640"
                alt="Green Campus"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Green & Eco-Friendly Campus
                </h3>
                <p className="text-gray-600">
                  Our campus is surrounded by lush greenery and landscaped
                  gardens, offering a peaceful, eco-friendly environment that
                  promotes well-being and learning.
                </p>
              </div>
            </div>

            {/* Facility 12: Separate Classrooms for Boys and Girls */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://t3.ftcdn.net/jpg/06/87/98/02/360_F_687980239_7A7Zw8tZKNO78pE2xLrFNhgpcuzrvvEG.jpg"
                alt="Green Campus"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Separate Classrooms for Boys and Girls
                </h3>
                <p className="text-gray-600">
                  Our school is committed to providing a comfortable and
                  supportive learning environment for all students. We have
                  separate classrooms for boys and girls, ensuring privacy and
                  promoting a focused educational experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Future Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-2">
              Future Plans
            </h2>
            <p className="text-gray-600">
              Exciting upcoming developments to further enhance our campus and
              student experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Future Plan 1: Islamic Layout */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3ckS9DFuQR2RTAb8-MrMV34PIun1y9M0Tg&s"
                alt="Islamic Layout"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Islamic Layout</h3>
                <p className="text-gray-600">
                  Our future expansion will feature an Islamic architectural
                  layout, reflecting traditional design elements and fostering a
                  spiritually uplifting environment.
                </p>
              </div>
            </div>

            {/* Future Plan 2: Conference Hall */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://content.jdmagicbox.com/v2/comp/bangalore/u9/080pxx80.xx80.180423113415.m1u9/catalogue/samskruthi-gokula-convention-centre-jp-nagar-7th-phase-bangalore-banquet-halls-sf8pt.jpg"
                alt="Conference Hall"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Conference Hall for Events & Muslim Weddings
                </h3>
                <p className="text-gray-600">
                  A modern conference hall will be available for school events,
                  seminars, and can also serve as a venue for Muslim weddings
                  and community gatherings.
                </p>
              </div>
            </div>

            {/* Future Plan 3: Football & Basketball Playground */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh0Qd43F-8dHgECbGjYv1NlQY9UN_I20gyg&s"
                alt="Football and Basketball Playground"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Football & Basketball Playground
                </h3>
                <p className="text-gray-600">
                  Plans are underway to build dedicated football and basketball
                  playgrounds, encouraging teamwork, fitness, and sportsmanship
                  among students.
                </p>
              </div>
            </div>

            {/* Future Plan 4: Swimming Pool */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://www.hrjohnsonindia.com/assets/images/blog/neo-pool-ocean-swimming-pool-tile.jpg"
                alt="Swimming Pool"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Swimming Pool</h3>
                <p className="text-gray-600">
                  A state-of-the-art swimming pool will provide students with
                  opportunities for aquatic sports, recreation, and water safety
                  training.
                </p>
              </div>
            </div>

            {/* Future Plan 5: Masjid */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://live.staticflickr.com/3628/3307434170_d8b50b6c1b_b.jpg"
                alt="Masjid"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Masjid</h3>
                <p className="text-gray-600">
                  A beautiful masjid will be constructed at the heart of our
                  campus, serving as a center for prayer, reflection, and
                  community activities.
                </p>
              </div>
            </div>

            {/* Future Plan 6: Taekwondo Training */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFt0OVi2nYBC3FqBxqGvpTsXjJa9dkJu8nzQ&s"
                alt="Taekwondo Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Taekwondo Training</h3>
                <p className="text-gray-600">
                  We plan to introduce professional Taekwondo training,
                  promoting discipline, self-defense, and physical fitness for
                  our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold font-serif text-school-blue mb-2">
              What Parents Say
            </h2>
            <p className="text-gray-600">
              Hear from families who are part of our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  F
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Farida Ahmed</h3>
                  <p className="text-gray-500 text-sm">Parent of 2 students</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "WISS has been a blessing for our family. My children receive
                excellent academic education while growing stronger in their
                faith. The teachers truly care about each student."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Hassan Patel</h3>
                  <p className="text-gray-500 text-sm">
                    Parent of a 5th grader
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Since joining WISS, my son has thrived academically and
                spiritually. The school's balanced approach to education has
                helped him develop confidence and a strong moral compass."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Safia Qureshi</h3>
                  <p className="text-gray-500 text-sm">
                    Parent of a 7th grader
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The integrated approach to Islamic education alongside a strong
                ICSE curriculum is exactly what we wanted for our daughter. The
                faculty are highly qualified and deeply caring."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
