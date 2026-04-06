import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Reset status when user starts typing again after an error or success
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Set loading state
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send the form using EmailJS
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        // Success
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        // Reset form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // API returned an error
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      // Network or other error
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5 text-sm font-medium text-school-dark"
      >
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ backgroundColor: "white" }}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            ></textarea>
          </div>
        </div>

        {/* Status message */}
        {status.message && (
          <div
            className={`p-3 rounded-md ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : status.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === "loading"}
          style={{
            backgroundColor: "#CCFF99",
            color: "#1A2721",
            border: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          className={`w-full font-bold py-3 px-6 rounded-md transition duration-300 flex justify-center items-center ${
            status.type === "loading" ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#b8e589")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#CCFF99")
          }
        >
          {status.type === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Content below the form */}
      <div className="mt-8 pt-6 border-t border-gray-400">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CCFF99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-school-neon mb-2">
            We'd love to hear from you!
          </h3>
          <p className="text-white max-w-md">
            Have questions about our programs or want to get involved? Fill out
            the form above and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
