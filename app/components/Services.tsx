
'use client';

import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Navigate life's complexities with refined, evidence-based techniques for managing anxiety and stress. Discover sophisticated coping strategies and mindfulness practices that cultivate your inner tranquility.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your most precious connections through enhanced communication and profound understanding. Whether nurturing romantic partnerships or family dynamics, we cultivate healthier, more meaningful bonds.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "bg-red-100 text-red-700 border-red-200"
    },
    {
      title: "Trauma Recovery",
      description: "Embark on a journey of healing from past experiences with compassionate, trauma-informed care. Utilizing proven therapeutic approaches to process trauma and reclaim your sense of safety and personal empowerment.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-100 text-blue-700 border-blue-200"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            Therapeutic Services
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl font-serif text-gray-600 leading-relaxed">
            Discover bespoke therapeutic approaches thoughtfully designed to support your unique journey toward mental wellness and profound personal growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group border border-gray-100"
            >
              {/* Premium Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Elegant Icon */}
                <div className={`absolute top-6 right-6 p-4 rounded-2xl ${service.color} backdrop-blur-sm border transition-all duration-300 group-hover:scale-110`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Premium Content */}
              <div className="p-10">
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>
                
                {/* Elegant Learn More Link */}
                <div className="flex items-center text-yellow-600 font-serif font-medium group-hover:text-blue-600 transition-colors duration-300">
                  <span className="tracking-wide">Discover More</span>
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-premium-gradient p-12 rounded-3xl shadow-premium-lg max-w-4xl mx-auto border border-yellow-200/30">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="font-serif text-gray-700 mb-8 text-lg leading-relaxed">
              Take the first step toward enhanced mental wellness with a complimentary consultation.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-gradient hover:shadow-premium-lg text-white font-serif font-semibold px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-premium tracking-wide border border-yellow-400/20"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
