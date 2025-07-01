"use client";

import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3121327/3121327-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/85 via-blue-900/75 to-gray-900/80"></div>

      {/* Premium Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <span className="inline-block bg-yellow-500/25 border border-yellow-400/30 text-yellow-100 px-6 py-3 rounded-full text-sm font-serif font-medium backdrop-blur-sm tracking-wider">
            Licensed Clinical Psychologist
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight tracking-tight">
          Transform Your Mental Health Journey
          <span className="block text-yellow-400 text-gold-shimmer italic mt-4">
            with Dr. Serena Blake
          </span>
        </h1>

        <div className="w-32 h-0.5 bg-yellow-400 mx-auto mb-8 opacity-80"></div>

        <h2 className="text-xl md:text-2xl font-serif font-light mb-10 text-gray-100 leading-relaxed tracking-wide">
          Eight Years of Excellence • 500+ Successful Sessions • Los Angeles,
          California
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={scrollToContact}
            className="bg-gold-gradient hover:shadow-premium-lg text-white font-serif font-semibold px-10 py-5 rounded-full transition-all duration-500 transform hover:scale-105 shadow-premium text-lg tracking-wide border border-yellow-400/20"
          >
            Begin Your Journey
          </button>

          <div className="flex items-center gap-3 text-gray-200 font-serif">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="tracking-wide">
              Los Angeles & Virtual Sessions
            </span>
          </div>
        </div>

        <div className="flex justify-center space-x-12 text-gray-300 font-serif text-sm tracking-wide">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span>Licensed & Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Evidence-Based</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span>Compassionate Care</span>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
