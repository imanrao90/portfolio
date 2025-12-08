import React, { useRef, useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
// import { sendEmail } from '../services/emailService';
import { sendEmail } from '../services/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    // Basic form validation check
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    if (!values.user_name || !values.user_email || !values.message) {
      toast.error('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(formRef.current);
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-10">
      <Toaster position="top-right" />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-blue-950 mb-6">Get In Touch</h1>
            <p className="text-gray-600 text-lg mb-12">
              I'm currently seeking internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-950">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Email</h3>
                  <a href="imanrao90@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                    imanrao90@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-950">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-accent transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-950">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Location</h3>
                  <p className="text-gray-600">
                    San Francisco, CA<br />(Open to Remote)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-950 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-950 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-950 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
