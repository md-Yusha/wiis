import { useState, useEffect } from "react";
import {
  Download,
  ChevronDown,
  ChevronUp,
  Calendar,
  FileText,
  User,
  Award,
  CreditCard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdmissionStep = ({ number, title, description }) => (
  <div className="flex items-start">
    <div className="bg-school-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-school-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className={`border-0 shadow-sm mb-3 overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-gray-50" : "bg-white"
      }`}
    >
      <CardContent className="p-0">
        <button
          className="flex justify-between items-center w-full text-left p-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-medium text-school-blue">{question}</h3>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="px-5 pb-5 pt-0 text-gray-600">
            <p>{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AdmissionsPage = () => {
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
            Admissions
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our educational community and give your child the gift of a
            balanced Islamic education
          </p>
        </div>
      </section>

      {/* Admissions Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-8 font-serif text-school-blue">
              Admission Process
            </h2>
            <p className="text-gray-700 mb-12 text-lg">
              At Whitefield International Islamic School, we welcome students
              from diverse backgrounds who share our commitment to academic
              excellence and Islamic values. Our admission process is designed
              to ensure a good fit between the school and prospective students.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12 mt-12 reveal">
            <AdmissionStep
              number="1"
              title="Submit Application"
              description="Complete the online application form or download and submit the paper application with all required documents."
            />

            <AdmissionStep
              number="2"
              title="Entrance Assessment"
              description="Students will undergo an age-appropriate assessment to determine their academic level and learning needs."
            />

            <AdmissionStep
              number="3"
              title="Family Interview"
              description="Parents and students meet with the school administration to discuss expectations, values, and determine if there's a good fit."
            />

            <AdmissionStep
              number="4"
              title="Admission Decision"
              description="The admissions committee reviews all information and makes a decision, usually within two weeks of completing the process."
            />

            <AdmissionStep
              number="5"
              title="Enrollment"
              description="Upon acceptance, complete the enrollment process by paying the registration fee and submitting any remaining documents."
            />
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24 bg-school-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-12 font-serif text-school-blue text-center">
              Required Documents
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <User className="text-school-blue w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-school-dark">
                      Personal Information
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Completed application form</li>
                      <li>Passport-size photographs</li>
                      <li>Copy of birth certificate</li>
                      <li>Student's Aadhaar card</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <Award className="text-school-blue w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-school-dark">
                      Academic Records
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Previous school records</li>
                      <li>Report cards from the last 2 years</li>
                      <li>Transfer certificate (if applicable)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <FileText className="text-school-blue w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-school-dark">
                      Medical Information
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Medical history form</li>
                      <li>Immunization records</li>
                      <li>Special needs documentation (if applicable)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-school-blue/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-5">
                    <CreditCard className="text-school-blue w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-school-dark">
                      Parent Information
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Parents' ID proof</li>
                      <li>Proof of residence</li>
                      <li>Income certificate (for financial aid)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-12 font-serif text-school-blue">
              Downloadable Forms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-school-light p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                <Download className="text-school-blue w-12 h-12 mb-6" />
                <h3 className="font-bold text-xl mb-3 text-school-dark">
                  Financial Aid Application
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Form to apply for financial assistance and scholarships
                </p>
                <a
                  href="/forms/financial-aid-application.pdf"
                  download="WIIS-Financial-Aid-Application.pdf"
                  className="inline-flex items-center bg-school-blue text-black px-4 py-2 rounded-full font-semibold hover:bg-school-blue/90 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>

              <div className="bg-school-light p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                <Download className="text-school-blue w-12 h-12 mb-6" />
                <h3 className="font-bold text-xl mb-3 text-school-dark">
                  Parent Handbook
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Comprehensive guide to school policies and procedures
                </p>
                <a
                  href="/forms/parent-handbook.pdf"
                  download="WIIS-Parent-Handbook.pdf"
                  className="inline-flex items-center bg-school-blue text-black px-4 py-2 rounded-full font-semibold hover:bg-school-blue/90 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-school-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-12 font-serif text-school-blue text-center">
              Important Dates
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-school-blue text-school-dark p-6">
                <h3 className="font-bold text-xl">
                  Admissions Calendar 2025-2026
                </h3>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        September 1, 2024
                      </h4>
                      <p className="text-gray-600">
                        Applications open for the new academic year
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        October 15-30, 2024
                      </h4>
                      <p className="text-gray-600">
                        Entrance assessments for new applicants
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        November 15, 2024
                      </h4>
                      <p className="text-gray-600">
                        First round of admission decisions announced
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        December 15, 2024
                      </h4>
                      <p className="text-gray-600">
                        Deadline for first round enrollment confirmation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        January 10, 2025
                      </h4>
                      <p className="text-gray-600">
                        Second round of applications (if spots available)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-school-blue w-6 h-6 mr-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-school-dark">
                        April 1, 2025
                      </h4>
                      <p className="text-gray-600">New parent orientation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-12 font-serif text-school-blue text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-2 ">
              <FaqItem
                question="What are the age requirements for admission?"
                answer="For Pre-KG, children should be 3+ years by June 1st. For KG, 4+ years, and for Grade 1, 5+ years. For higher grades, the corresponding ages apply."
              />

              <FaqItem
                question="Does the school provide transportation?"
                answer="Yes, we offer transportation services covering major areas of Whitefield and surrounding neighborhoods. Additional fees apply for this service."
              />

              <FaqItem
                question="Are there scholarships or financial aid available?"
                answer="We offer limited need-based financial assistance for families facing financial challenges. Please download and complete the Financial Aid Application form for consideration."
              />

              <FaqItem
                question="What is the teacher-to-student ratio?"
                answer="We maintain a low teacher-to-student ratio of 1:20 in elementary grades and 1:25 in middle and high school to ensure personalized attention."
              />

              <FaqItem
                question="Do you accept mid-year admissions?"
                answer="Yes, we accept mid-year admissions based on seat availability. The same admission process applies with additional assessments to ensure proper grade placement."
              />

              <FaqItem
                question="How do you accommodate students with special needs?"
                answer="We have a dedicated support team for students with mild learning differences. Please discuss your child's specific needs during the application process."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between glass-card p-12 rounded-3xl backdrop-blur-sm bg-white/80">
            <div className="mb-8 md:mb-0 md:w-2/3 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">
                Ready to Apply?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Start your child's journey with Whitefield International Islamic
                School today. Our admissions team is ready to guide you through
                each step of the process.
              </p>
            </div>
            <div className="reveal">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-school-neon text-school-dark font-bold py-4 px-8 rounded-full 
                         hover:bg-school-light hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
