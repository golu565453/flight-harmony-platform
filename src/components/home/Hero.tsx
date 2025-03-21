
import React from 'react';
import FlightSearchForm from '../ui/FlightSearchForm';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-airline-light-blue to-airline-navy opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-24 pb-12">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Your Journey, <br className="md:hidden" />
            <span className="text-airline-blue">Harmonized</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience seamless travel management with our intuitive platform.
            Book flights, track status, and manage your journey effortlessly.
          </p>
        </div>

        <div className="mt-12">
          <FlightSearchForm />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          <div className="glass-panel rounded-xl p-4 text-center text-white">
            <p className="text-3xl font-bold">200+</p>
            <p className="text-sm text-white/80">Destinations</p>
          </div>
          <div className="glass-panel rounded-xl p-4 text-center text-white">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-white/80">On-time Performance</p>
          </div>
          <div className="glass-panel rounded-xl p-4 text-center text-white">
            <p className="text-3xl font-bold">5M+</p>
            <p className="text-sm text-white/80">Happy Travelers</p>
          </div>
          <div className="glass-panel rounded-xl p-4 text-center text-white">
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-white/80">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Wave design at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
