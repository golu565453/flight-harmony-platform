
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-airline-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-airline-navy font-bold text-lg">AH</span>
              </div>
              <span className="font-semibold text-xl text-white">AirlineHarmony</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience seamless travel management with AirlineHarmony. Book flights, track status, 
              and manage your travel from anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-airline-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/flights" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Book Flights
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Flight Status
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link to="/checkin" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Check-in Online
                </Link>
              </li>
              <li>
                <Link to="/baggage" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Baggage Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-airline-blue">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-airline-blue">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-300 mt-0.5" />
                <span className="text-gray-300 text-sm">support@airlineharmony.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <PhoneCall size={18} className="text-gray-300 mt-0.5" />
                <span className="text-gray-300 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="mt-4">
                <button className="bg-airline-blue text-white px-4 py-2 rounded-md text-sm hover:bg-airline-blue/90 transition-colors">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AirlineHarmony. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal" className="text-sm text-gray-400 hover:text-white transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
