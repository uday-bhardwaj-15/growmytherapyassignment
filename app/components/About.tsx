
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-premium-gradient">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Serena Blake, Licensed Clinical Psychologist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Premium floating credentials card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-premium-lg elegant-float border border-yellow-200/30">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-yellow-600 mb-1">500+</div>
                  <div className="text-sm font-serif text-gray-600 tracking-wide">Client Sessions</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Meet Dr. Serena Blake
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>
            </div>
            
            <p className="text-lg font-serif text-gray-700 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with eight years of distinguished experience and over 500 client sessions. She masterfully blends evidence-based approaches—including cognitive-behavioral therapy and mindfulness—with compassionate, individualized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="text-lg font-serif text-gray-700 leading-relaxed">
              Whether you meet in her elegant Maplewood Drive office or connect virtually via Zoom, Dr. Blake is devoted to creating a sanctuary of safety and support where you can truly flourish.
            </p>
            
            {/* Premium Credentials */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-white p-6 rounded-2xl shadow-premium border border-yellow-100/50 hover:shadow-premium-lg transition-all duration-300">
                <div className="text-2xl font-heading font-bold text-yellow-600 mb-2">PsyD</div>
                <div className="text-sm font-serif text-gray-600 tracking-wide">Licensed Clinical Psychologist</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-premium border border-yellow-100/50 hover:shadow-premium-lg transition-all duration-300">
                <div className="text-2xl font-heading font-bold text-yellow-600 mb-2">8 Years</div>
                <div className="text-sm font-serif text-gray-600 tracking-wide">Professional Excellence</div>
              </div>
            </div>
            
            {/* Elegant Specializations */}
            <div className="pt-8">
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['Anxiety & Stress', 'Relationship Counseling', 'Trauma Recovery', 'Cognitive Behavioral Therapy', 'Mindfulness-Based Therapy'].map((spec) => (
                  <span key={spec} className="bg-yellow-100/60 text-yellow-800 px-5 py-2 rounded-full text-sm font-serif font-medium border border-yellow-200/50 hover:bg-yellow-200/60 transition-colors duration-300">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
