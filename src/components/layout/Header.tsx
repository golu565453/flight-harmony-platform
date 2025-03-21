
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 animate-fade-in"
        >
          <div className="w-10 h-10 rounded-full bg-airline-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">AH</span>
          </div>
          <span className={`font-semibold text-xl ${isScrolled ? 'text-airline-navy' : 'text-airline-navy'}`}>
            AirlineHarmony
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
        </nav>

        {/* User Profile & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <UserMenu />
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-airline-navy p-1 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-airline-navy hover:text-airline-blue py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/flights" 
              className="text-airline-navy hover:text-airline-blue py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Flights
            </Link>
            <Link 
              to="/status" 
              className="text-airline-navy hover:text-airline-blue py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Flight Status
            </Link>
            <Link 
              to="/dashboard" 
              className="text-airline-navy hover:text-airline-blue py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const textColor = isScrolled ? 'text-airline-navy' : 'text-airline-navy';
  const hoverColor = 'hover:text-airline-blue';
  
  return (
    <>
      <Link 
        to="/" 
        className={`${textColor} ${hoverColor} transition-colors py-2 text-sm font-medium`}
      >
        Home
      </Link>
      <Link 
        to="/flights" 
        className={`${textColor} ${hoverColor} transition-colors py-2 text-sm font-medium`}
      >
        Flights
      </Link>
      <Link 
        to="/status" 
        className={`${textColor} ${hoverColor} transition-colors py-2 text-sm font-medium`}
      >
        Flight Status
      </Link>
      <Link 
        to="/dashboard" 
        className={`${textColor} ${hoverColor} transition-colors py-2 text-sm font-medium`}
      >
        Dashboard
      </Link>
    </>
  );
};

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center space-x-2 text-airline-navy hover:bg-airline-light-blue"
        >
          <User size={18} />
          <span className="hidden sm:inline">Account</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white p-2">
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/dashboard" className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/profile" className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/bookings" className="w-full">
            My Bookings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
