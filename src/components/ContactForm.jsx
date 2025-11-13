import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, MessageSquare } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: "top-right",
            style: {
              background: "#fff",
              color: "#10B981",
              borderRadius: "10px",
              padding: "12px 16px",
            },
          });
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: "top-right",
            style: {
              background: "#fff",
              color: "#EF4444",
              borderRadius: "10px",
              padding: "12px 16px",
            },
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center border-t border-gray-200 bg-[#0C2B4E] py-16 px-6 py-30">
      {/* Toast notification container */}
      <Toaster />

      <div className="max-w-2xl w-full bg-[#ecece5] rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          I’d love to hear about your project or just chat about development.
          Fill out the form below or reach me directly via email.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label> */}
            <div className="flex items-center border border-gray-300  rounded-lg px-3">
              <User className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label> */}
            <div className="flex items-center border border-gray-300  rounded-lg px-3">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label> */}
            <div className="flex items-start border border-gray-300 rounded-lg px-3">
              <MessageSquare className="text-gray-400 w-5 h-5 mt-2 mr-2" />
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full py-2 outline-none bg-transparent resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-xl font-medium text-white transition ${isSending
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;



