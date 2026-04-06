import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-school-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-school-neon">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions and welcome you to our school
            community
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-serif text-school-blue mb-8">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-10 text-lg">
                Whether you have questions about our programs, admissions, or
                would like to schedule a visit, we're here to help. Reach out to
                us using any of the following contact methods or fill out the
                form.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start bg-school-light/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <MapPin className="text-school-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-school-dark">
                      Our Location
                    </h3>
                    <address className="not-italic text-gray-600 text-lg">
                      Whitefield International Islamic School
                      <br />
                      Eidgah road, muthkur, Medimallasandra post,
                      <br />
                      Bengaluru, Karnataka 560067,
                      <br />
                      India
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start bg-school-light/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <Phone className="text-school-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-school-dark">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Main Office: +91 90360 81087
                      <br />
                      Admissions: +91 90360 81087
                      <br />
                      Principal's Office: +91 9902294609
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start bg-school-light/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <Mail className="text-school-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-school-dark">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600 text-lg">
                      General Inquiries: info@wiss.edu.in
                      <br />
                      Admissions: admissions@wiss.edu.in
                      <br />
                      Principal: principal@wiss.edu.in
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start bg-school-light/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <Clock className="text-school-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-school-dark">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Monday to Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM
                      <br />
                      Closed on Sundays and Public Holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-school-dark/90 p-8 lg:p-10 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-serif text-school-neon mb-8">
                Feedback and Inquiries
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold font-serif text-school-blue mb-6 text-center">
            Find Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Visit our campus to experience our vibrant learning environment.
            We're conveniently located in Whitefield, Bangalore.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Custom shape for the map container */}
            <div className="absolute inset-0 bg-school-dark rounded-2xl transform translate-x-2 translate-y-2 z-0"></div>

            {/* Main map container with custom shape */}
            <div className="relative z-10 h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.44760796724!2d77.80804823162804!3d12.961584139404168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d62382871c1%3A0xcda302fb789302f9!2sWhitefield%20International%20Islamic%20School%2C%20Muthkur%20Branch!5e0!3m2!1sen!2sin!4v1744681275608!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Info box in top-right corner */}
              <div className="absolute top-4 right-4 max-w-xs">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border-r-4 border-school-neon">
                  <div className="flex items-center mb-2">
                    <img
                      src="/logo.svg"
                      alt="WIIS Logo"
                      className="w-14 h-14 mr-3"
                      style={{ filter: "brightness(0)" }}
                    />
                    <h3 className="text-lg font-bold text-school-dark">
                      WIIS Campus
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Open for visits Monday-Friday, 9:00 AM to 4:00 PM.
                  </p>
                  <div className="flex items-center text-school-blue text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Whitefield, Bangalore
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-school-neon rounded-full opacity-70 z-0"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-school-blue rounded-full opacity-70 z-0"></div>
          </div>

          {/* Additional information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Use the map controls to navigate, zoom, and get directions to our
              campus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
