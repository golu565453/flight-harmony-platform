
import React from 'react';
import { Plane, Map, Clock, CreditCard, Users, BadgeCheck } from 'lucide-react';
import FlightStatusTracker from '../ui/FlightStatusTracker';
import RouteMap from '../ui/RouteMap';

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Flight Status Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-airline-navy mb-4">Real-time Flight Status</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your flight in real-time with our advanced tracking system. Stay informed with gate changes, delays, and more.
            </p>
          </div>
          
          <FlightStatusTracker />
        </div>
        
        {/* Route Map Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-airline-navy mb-4">Global Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our extensive route network connecting over 200 destinations worldwide.
            </p>
          </div>
          
          <RouteMap />
        </div>
        
        {/* Key Features */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-airline-navy mb-4">Why Choose AirlineHarmony</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence ensures you experience the best in air travel management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Plane size={28} className="text-airline-blue" />}
              title="Seamless Booking"
              description="Book flights with ease through our intuitive interface. Compare options and find the best deals."
            />
            <FeatureCard 
              icon={<Clock size={28} className="text-airline-blue" />}
              title="Real-time Updates"
              description="Stay informed with instant notifications about your flight status, gate changes, and more."
            />
            <FeatureCard 
              icon={<Map size={28} className="text-airline-blue" />}
              title="Interactive Maps"
              description="Visualize your journey with interactive maps showing routes, airports, and connections."
            />
            <FeatureCard 
              icon={<CreditCard size={28} className="text-airline-blue" />}
              title="Secure Payments"
              description="Peace of mind with our secure payment system. Multiple payment options available."
            />
            <FeatureCard 
              icon={<Users size={28} className="text-airline-blue" />}
              title="Group Bookings"
              description="Easily manage bookings for groups of any size with our specialized tools."
            />
            <FeatureCard 
              icon={<BadgeCheck size={28} className="text-airline-blue" />}
              title="Premium Support"
              description="24/7 customer support to assist you with any queries or issues during your journey."
            />
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="glass-card bg-gradient-to-r from-airline-light-blue to-airline-blue/10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-airline-navy mb-4">Ready to Experience Seamless Travel?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have simplified their journey with AirlineHarmony.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-airline-blue/30 transition-all hover-lift">
      <div className="bg-airline-light-blue/50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-airline-navy mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;
