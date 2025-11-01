"use client";
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar2 from "../../components/navbar2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchContactpageTemplate } from "@/store/slices/contactpageslice";
import ContactPage2 from "@/components/duplicate/contact/Part1";

// Helper to render icon based on string name
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "map-pin":
      return <MapPin size={24} />;
    case "phone":
      return <Phone size={24} />;
    case "mail":
      return <Mail size={24} />;
    case "clock":
      return <Clock size={24} />;
    default:
      return <MapPin size={24} />;
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const dispatch = useDispatch<AppDispatch>();
  const fetched = useRef(false);

  // Select contact page data from Redux
  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.contactpage
  );

  useEffect(() => {
    const vendorId = sessionStorage.getItem("vendor_id");
    if (vendorId && !fetched.current) {
      fetched.current = true;
      dispatch(fetchContactpageTemplate(vendorId));
    }
  }, [dispatch]);

  // Initialize form data when contactData loads
  useEffect(() => {
    if (contactData?.contactForm?.fields) {
      const initialForm: Record<string, string> = {};
      contactData.contactForm.fields.forEach((field: any) => {
        initialForm[field.name] = "";
      });
      setFormData(initialForm);
    }
  }, [contactData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Reset form
    const resetForm: Record<string, string> = {};
    contactData?.contactForm?.fields.forEach((field: any) => {
      resetForm[field.name] = "";
    });
    setFormData(resetForm);
  };

  // If still loading
  if (loading && !contactData) {
    return (
      <>
        <Navbar2 />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading contact page...</p>
        </div>
      </>
    );
  }

  // If no data after loading
  if (!contactData) {
    return (
      <>
    <ContactPage2/>
      </>
    );
  }

  const {
    hero,
    contactInfo,
    contactForm,
    visitInfo,
    faqSection,
  } = contactData;

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${hero?.backgroundImage?.trim()}')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                {hero?.title || "Contact Us"}
              </h1>
              <p className="text-xl lg:text-2xl">{hero?.subtitle || "We'd Love to Hear From You"}</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo?.map((info: any, index: number) => (
              <div
                key={info._id || index}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-green-600 shadow-md">
                  {renderIcon(info.icon)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-700">{info.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {contactForm?.heading || "Send Us a Message"}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {contactForm?.description ||
                  "Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {contactForm?.fields?.map((field: any) => (
                  <div key={field._id || field.name}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label} {field.required && "*"}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  {contactForm?.submitButtonText || "Send Message"}
                </button>
              </form>
            </div>

            {/* Map/Image Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {visitInfo?.heading || "Find Us Here"}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {visitInfo?.description ||
                  "Visit our store to explore our collection in person."}
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <img
                  src={visitInfo?.mapImage?.trim() || "https://via.placeholder.com/800x400?text=Location+Map"}
                  alt="Store location"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {visitInfo?.reasonsHeading || "Why Visit Our Store?"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {visitInfo?.reasonsList?.map((reason: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          {faqSection && (
            <div className="mt-20">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                {faqSection.heading || "Frequently Asked Questions"}
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12">
                {faqSection.subheading || "Quick answers to common questions"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqSection.faqs?.map((faq: any, idx: number) => (
                  <div
                    key={faq._id || idx}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-md shadow-lg flex items-center justify-center transition-all transform hover:scale-105 z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}