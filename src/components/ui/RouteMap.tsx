
import React, { useState } from 'react';
import { MapPin, Plane } from 'lucide-react';

// Note: In a real application, you would integrate with a mapping library
// such as Mapbox, Google Maps, or Leaflet to create an interactive map.
// This is a simplified visual representation for demonstration purposes.

const RouteMap = () => {
  const [activeRoute, setActiveRoute] = useState<number | null>(0);

  // Sample routes
  const routes = [
    { id: 0, from: 'JFK', to: 'LAX', fromName: 'New York', toName: 'Los Angeles', distance: '2,475 mi', duration: '5h 45m' },
    { id: 1, from: 'LHR', to: 'DXB', fromName: 'London', toName: 'Dubai', distance: '3,400 mi', duration: '6h 50m' },
    { id: 2, from: 'SIN', to: 'SYD', fromName: 'Singapore', toName: 'Sydney', distance: '3,915 mi', duration: '7h 45m' },
  ];

  return (
    <div className="w-full rounded-2xl glass-card p-8 animate-scale-in">
      <h2 className="text-2xl font-semibold text-airline-navy mb-4">Popular Routes</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Route Map Visualization */}
        <div className="relative h-80 bg-airline-light-blue rounded-xl overflow-hidden">
          {/* World Map Background - This would be replaced with an actual map in a real app */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-30"></div>
          
          {/* This would be replaced with actual route lines on a real map */}
          <div className="absolute inset-0 flex items-center justify-center">
            {activeRoute !== null && (
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <MapPin size={24} className="text-airline-blue" />
                </div>
                <div className="h-0.5 w-36 bg-airline-blue relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Plane size={20} className="text-airline-blue transform rotate-90" />
                  </div>
                </div>
                <div className="bg-white p-2 rounded-full shadow-md">
                  <MapPin size={24} className="text-airline-blue" />
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-airline-navy">
              Explore our global network
            </p>
            <p className="text-xs text-gray-600">
              200+ destinations worldwide
            </p>
          </div>
        </div>
        
        {/* Route Selection */}
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            Select a route to see flight details and explore our most popular destinations.
          </p>
          
          {routes.map((route) => (
            <div
              key={route.id}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                activeRoute === route.id
                  ? 'bg-airline-light-blue border border-airline-blue'
                  : 'bg-white border border-gray-100 hover:border-airline-blue/50'
              }`}
              onClick={() => setActiveRoute(route.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="font-semibold text-airline-navy">{route.from}</p>
                    <p className="text-sm text-gray-500">{route.fromName}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-airline-blue"></div>
                    <div className="w-16 h-0.5 bg-airline-blue"></div>
                    <div className="w-2 h-2 rounded-full bg-airline-blue"></div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-airline-navy">{route.to}</p>
                    <p className="text-sm text-gray-500">{route.toName}</p>
                  </div>
                </div>
                
                <div className="hidden sm:block">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Distance</p>
                    <p className="font-medium">{route.distance}</p>
                  </div>
                </div>
              </div>
              
              {activeRoute === route.id && (
                <div className="mt-4 pt-4 border-t border-airline-blue/20 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in">
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-medium">{route.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Daily Flights</p>
                    <p className="font-medium">3</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="font-medium">$349</p>
                  </div>
                  <div>
                    <button className="text-sm text-airline-blue font-medium hover:text-airline-navy transition-colors">
                      View Flights →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
