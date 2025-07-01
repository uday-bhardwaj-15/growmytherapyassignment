"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (
    name: keyof FormData,
    value: string | boolean
  ): string => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)
          ? ""
          : "Please enter a valid email address";
      case "phone":
        return /^[+]?[1-9][\d]{0,15}$/.test(
          (value as string).replace(/\D/g, "")
        )
          ? ""
          : "Please enter a valid phone number";
      case "name":
        return (value as string).trim().length >= 2
          ? ""
          : "Name must be at least 2 characters";
      case "message":
        return (value as string).trim().length >= 10
          ? ""
          : "Please provide more details (at least 10 characters)";
      case "agreeToContact":
        return (value as boolean) ? "" : "You must agree to be contacted";
      default:
        return (value as string).trim() ? "" : "This field is required";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === "checkbox" ? checked : value;
    const error = validateField(name as keyof FormData, fieldValue);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          preferredTime: "",
          agreeToContact: false,
        });
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-premium-gradient p-12 rounded-3xl shadow-premium-lg border border-yellow-200/30">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Thank You for Reaching Out
              </h2>
              <p className="text-xl font-serif text-gray-700 mb-8 leading-relaxed">
                Your message has been received. Dr. Blake will respond within 24
                hours to discuss how she can support your mental health journey.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-yellow-600 hover:text-blue-600 font-serif font-medium underline underline-offset-4 transition-colors duration-300 text-lg tracking-wide"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-premium-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Begin Your Healing Journey
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl font-serif text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Take the first step toward enhanced mental wellness. Dr. Blake is
              here to provide compassionate, professional support tailored to
              your unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-premium-lg border border-yellow-100/50">
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
                Schedule Your Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-serif font-medium text-gray-700 mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-serif"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 font-serif">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-serif font-medium text-gray-700 mb-3"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-serif"
                      placeholder="(323) 555-0192"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 font-serif">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-serif font-medium text-gray-700 mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-serif"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 font-serif">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-serif font-medium text-gray-700 mb-3"
                  >
                    What brings you here? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-serif resize-vertical"
                    placeholder="Please share what you're hoping to work on or any questions you have about therapy..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 font-serif">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-serif font-medium text-gray-700 mb-3"
                  >
                    Preferred time to reach you
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-serif"
                    placeholder="e.g., Weekday mornings, evenings after 6pm"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label
                    htmlFor="agreeToContact"
                    className="text-sm font-serif text-gray-700 leading-relaxed"
                  >
                    I agree to be contacted by Dr. Serena Blake regarding my
                    inquiry and understand that all communications will be kept
                    confidential. *
                  </label>
                </div>
                {errors.agreeToContact && (
                  <p className="text-sm text-red-600 font-serif">
                    {errors.agreeToContact}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient hover:shadow-premium-lg text-white font-serif font-semibold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-premium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none tracking-wide border border-yellow-400/20"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-premium border border-yellow-100/50">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Office Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="font-serif text-gray-600 leading-relaxed">
                        1287 Maplewood Drive
                        <br />
                        Los Angeles, CA 90026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="font-serif text-gray-600">(323) 555-0192</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="font-serif text-gray-600">
                        serena@blakepsychology.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-premium border border-yellow-100/50">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-serif font-medium text-gray-900">
                      In-Person Sessions
                    </span>
                    <span className="font-serif text-gray-600">
                      Tue & Thu, 10 AM–6 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-serif font-medium text-gray-900">
                      Virtual Sessions
                    </span>
                    <span className="font-serif text-gray-600">
                      Mon, Wed & Fri, 1 PM–5 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-premium border border-yellow-100/50">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Session Fees
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-serif font-medium text-gray-900">
                      Individual Session
                    </span>
                    <span className="font-serif text-yellow-600 font-semibold text-lg">
                      $200
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-serif font-medium text-gray-900">
                      Couples Session
                    </span>
                    <span className="font-serif text-yellow-600 font-semibold text-lg">
                      $240
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
