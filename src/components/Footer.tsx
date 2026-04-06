import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SchoolLogo from "./SchoolLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-dark text-white pt-16 pb-8 w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and School Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full flex justify-center md:justify-start mb-6">
              <SchoolLogo size="medium" showName={true} variant="modern" />
            </div>
            <p className="text-white/70 text-sm text-center md:text-left">
              Excellence in education with deep-rooted Islamic values,
              developing the next generation of confident Muslims.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-school-neon border-b border-school-neon/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/islamic-values"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  Islamic Values
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  className="text-white/80 hover:text-school-neon transition"
                >
                  Events & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-school-neon border-b border-school-neon/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-school-neon" />
                <span className="text-white/80">
                  Eidgah road, muthkur, Medimallasandra post, Bengaluru,
                  Karnataka 560067
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-school-neon" />
                <a href="tel:+919036081087" className="text-white/80">
                  +91 9036081087
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-school-dark" />
                <a href="tel:+919035681087" className="text-white/80">
                  +91 9035681087
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-school-neon" />
                <a
                  href="mailto:whitefieldislamicschool@gmail.com"
                  className="text-white/80"
                >
                  whitefieldislamicschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-school-neon border-b border-school-neon/20 pb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/Islamicschoolwf/"
                className="text-white/80 hover:text-school-neon transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/whitefield_islamic_school/"
                className="text-white/80 hover:text-school-neon transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-school-neon transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="w-full">
              <h4 className="text-white/90 mb-2">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-school-neon"
                />
                <button className="whitespace-nowrap px-4 py-2 bg-school-neon text-school-dark rounded-md hover:bg-school-light transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-school-neon/20 text-center text-white/60 text-sm">
          <p>{currentYear} Whitefield International Islamic School.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
